"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/projects";
import { ProjectArticleModal } from "./ProjectArticleModal";

interface HandwritingProjectCardProps {
  project: Project;
}

const MAX_CHARS = 100;

type Point = [number, number];
type Stroke = Point[];

type StreamEvent =
  | { type: "meta"; text: string; temperature: number }
  | { type: "point"; x: number; y: number; pen_up: number }
  | { type: "end"; num_points: number };

type GenerateResult = { ok: true } | { ok: false; error: string };

function fitStrokes(
  strokes: Stroke[],
  currentStroke: Stroke,
  width: number,
  height: number,
): { tx: (x: number) => number; ty: (y: number) => number } {
  const all = [...strokes.flat(), ...currentStroke];
  if (all.length === 0) {
    return { tx: (x) => x, ty: (y) => y };
  }

  const xs = all.map((p) => p[0]);
  const ys = all.map((p) => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const pad = 16;
  const scale = Math.min(
    (width - 2 * pad) / (maxX - minX || 1),
    (height - 2 * pad) / (maxY - minY || 1),
  );

  return {
    tx: (x) => pad + (x - minX) * scale,
    ty: (y) => pad + (maxY - y) * scale,
  };
}

function drawStrokes(
  ctx: CanvasRenderingContext2D,
  strokes: Stroke[],
  currentStroke: Stroke,
  width: number,
  height: number,
) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fafafa";
  ctx.fillRect(0, 0, width, height);

  const { tx, ty } = fitStrokes(strokes, currentStroke, width, height);
  ctx.strokeStyle = "#111";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  for (const stroke of [...strokes, currentStroke]) {
    if (stroke.length < 2) continue;
    ctx.beginPath();
    ctx.moveTo(tx(stroke[0][0]), ty(stroke[0][1]));
    for (let i = 1; i < stroke.length; i++) {
      ctx.lineTo(tx(stroke[i][0]), ty(stroke[i][1]));
    }
    ctx.stroke();
  }
}

async function streamHandwriting(
  text: string,
  temperature: number,
  onPoint: (strokes: Stroke[], currentStroke: Stroke) => void,
): Promise<GenerateResult> {
  const res = await fetch("/api/handwriting/stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, temperature }),
  }).catch(() => null);

  if (!res) {
    return { ok: false, error: "Network error — could not reach the API" };
  }

  if (!res.ok) {
    const data = (await res.json()) as { error?: string };
    return { ok: false, error: data.error ?? "Generation failed" };
  }

  if (!res.body) {
    return { ok: false, error: "No response stream" };
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  const strokes: Stroke[] = [];
  let currentStroke: Stroke = [];

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      if (!line) continue;
      const event = JSON.parse(line) as StreamEvent;

      if (event.type === "point") {
        currentStroke.push([event.x, event.y]);
        if (event.pen_up) {
          strokes.push(currentStroke);
          currentStroke = [];
        }
        onPoint(strokes, currentStroke);
      }
    }
  }

  if (currentStroke.length > 0) {
    strokes.push(currentStroke);
    onPoint(strokes, []);
  }

  return { ok: true };
}

export function HandwritingProjectCard({ project }: HandwritingProjectCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const currentStrokeRef = useRef<Stroke>([]);
  const rafRef = useRef<number | null>(null);
  const warmedRef = useRef(false);

  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [articleOpen, setArticleOpen] = useState(false);

  function prewarm() {
    if (warmedRef.current) return;
    warmedRef.current = true;
    fetch("/api/handwriting/health");
  }

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawStrokes(
      ctx,
      strokesRef.current,
      currentStrokeRef.current,
      canvas.width,
      canvas.height,
    );
  }, []);

  const scheduleRedraw = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      redraw();
    });
  }, [redraw]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  async function handleGenerate() {
    const trimmed = text.trim() + ".";

    if (!trimmed) {
      setError("Enter some text first");
      return;
    }

    setError(null);
    setGenerating(true);
    strokesRef.current = [];
    currentStrokeRef.current = [];
    redraw();

    const result = await streamHandwriting(trimmed, 0.0, (strokes, currentStroke) => {
      strokesRef.current = strokes;
      currentStrokeRef.current = currentStroke;
      scheduleRedraw();
    });

    setGenerating(false);

    if (!result.ok) {
      setError(result.error);
    }
  }

  return (
    <>
      <div className="flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
        <button
          type="button"
          onClick={() => setArticleOpen(true)}
          className="text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
        >
          <div className="w-full bg-white">
            <Image
              src={project.image}
              alt={project.title}
              width={project.imageNatural?.width ?? 1120}
              height={project.imageNatural?.height ?? 408}
              className="w-full h-auto"
            />
          </div>

          <div className="p-5 flex flex-col gap-4">
            <div>
              <h3 className="text-base font-bold mb-1.5 text-white">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-gray-400 tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </button>

        <div className="px-5 pb-5 flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={text}
            onFocus={prewarm}
            onChange={(e) => {
              prewarm();
              setText(e.target.value.slice(0, MAX_CHARS));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !generating) handleGenerate();
            }}
            placeholder="Type something..."
            maxLength={MAX_CHARS}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-600 outline-none focus:border-orange-500/30 transition-colors"
          />
          <button
            type="button"
            onClick={handleGenerate}
            disabled={generating}
            className="rounded-xl bg-orange-500/15 border border-orange-500/25 px-4 py-2 text-sm font-medium text-orange-400 hover:bg-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {generating ? "Writing..." : "Generate"}
          </button>
        </div>

        {error && <p className="text-xs text-red-400">{error}</p>}

        <canvas
          ref={canvasRef}
          width={560}
          height={160}
          className="w-full rounded-xl border border-white/[0.06] bg-[#fafafa]"
        />
        </div>
      </div>

      <ProjectArticleModal
        project={articleOpen ? project : null}
        onClose={() => setArticleOpen(false)}
      />
    </>
  );
}
