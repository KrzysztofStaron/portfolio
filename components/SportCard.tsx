"use client";

import Image from "next/image";
import { useState } from "react";
import type { SportCard as SportCardData } from "@/lib/sport";
import { StoryArticleModal } from "./StoryArticleModal";

export function SportCard(card: SportCardData) {
  const [open, setOpen] = useState(false);

  const story = {
    title: card.title,
    description: card.description,
    image: card.image,
    article: card.article,
    tags: card.tags,
    link: card.link,
    linkLabel: card.linkLabel,
    categoryLabel: "Sport",
    imageClassName: card.imageClassName,
    imageNatural: card.imageNatural,
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative aspect-square overflow-hidden rounded-2xl border border-white/[0.06] hover:border-orange-500/20 transition-all duration-300 cursor-pointer"
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          className={`${card.imageClassName ?? "object-cover"} transition-transform duration-700 group-hover:scale-[1.04]`}
          unoptimized={card.image.endsWith(".gif")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-xs font-semibold text-white">{card.title}</p>
        </div>
      </button>

      <StoryArticleModal story={open ? story : null} onClose={() => setOpen(false)} />
    </>
  );
}
