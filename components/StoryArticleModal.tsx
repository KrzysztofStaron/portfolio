"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import type { StoryContent } from "@/lib/story";

interface StoryArticleModalProps {
  story: StoryContent | null;
  onClose: () => void;
}

export function StoryArticleModal({ story, onClose }: StoryArticleModalProps) {
  useEffect(() => {
    if (!story) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [story, onClose]);

  if (!story) return null;

  const paragraphs = (story.article ?? [story.description]).filter((p) => p.length > 0);

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
          {story.imageNatural ? (
            <Image
              src={story.image}
              alt={story.title}
              width={story.imageNatural.width}
              height={story.imageNatural.height}
              className="w-full h-auto"
              unoptimized={story.image.endsWith(".gif")}
            />
          ) : (
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className={story.imageClassName ?? "object-cover"}
                unoptimized={story.image.endsWith(".gif")}
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
          <p className="text-xs text-orange-400 font-medium tracking-widest uppercase mb-2">
            {story.categoryLabel ?? "Story"}
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{story.title}</h2>

          {story.tags && story.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-gray-400 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {story.link && (
            <Link
              href={story.link}
              target="_blank"
              className="inline-flex items-center gap-1.5 mt-8 text-sm text-orange-400 hover:text-orange-300 transition-colors"
            >
              {story.linkLabel ?? "View more"}
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
