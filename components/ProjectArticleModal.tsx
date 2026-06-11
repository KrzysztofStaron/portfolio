"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectArticleModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectArticleModal({ project, onClose }: ProjectArticleModalProps) {
  useEffect(() => {
    if (!project) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <button
        type="button"
        aria-label="Close article"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c14] shadow-2xl flex flex-col">
        <div className="relative shrink-0 bg-white/5">
          {project.imageNatural ? (
            <Image
              src={project.image}
              alt={project.title}
              width={project.imageNatural.width}
              height={project.imageNatural.height}
              className="w-full h-auto"
              unoptimized={project.image.endsWith(".gif")}
            />
          ) : (
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                unoptimized={project.image.endsWith(".gif")}
              />
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 rounded-full bg-black/50 border border-white/10 p-1.5 text-gray-300 hover:text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8">
          <p className="text-xs text-orange-400 font-medium tracking-widest uppercase mb-2">Project</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{project.title}</h2>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-gray-400 tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
            {(project.article ?? [project.description]).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="inline-flex items-center gap-1.5 mt-8 text-sm text-orange-400 hover:text-orange-300 transition-colors"
            >
              View project
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
