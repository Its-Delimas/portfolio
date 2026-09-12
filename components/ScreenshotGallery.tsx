"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Screenshot } from "@/lib/projects";

export default function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + screenshots.length) % screenshots.length)),
    [screenshots.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % screenshots.length)),
    [screenshots.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, prev, next]);

  if (screenshots.length === 0) return null;

  return (
    <>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:thin]">
        {screenshots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open screenshot ${i + 1} of ${screenshots.length}`}
            className="relative shrink-0 w-[88vw] sm:w-[720px] aspect-video rounded-[var(--radius-md)] border border-border overflow-hidden snap-start cursor-zoom-in hover:border-accent/50 transition-colors"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(min-width: 640px) 720px, 88vw"
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-white/20 text-white hover:border-white/50 transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.75} />
          </button>

          {screenshots.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous screenshot"
              className="absolute left-2 sm:left-6 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-[var(--radius-sm)] border border-white/20 text-white hover:border-white/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.75} />
            </button>
          )}

          <div
            className="relative w-full max-w-6xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[openIndex].src}
              alt={screenshots[openIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {screenshots.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next screenshot"
              className="absolute right-2 sm:right-6 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-[var(--radius-sm)] border border-white/20 text-white hover:border-white/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.75} />
            </button>
          )}

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-white/70">
            {openIndex + 1} / {screenshots.length}
          </div>
        </div>
      )}
    </>
  );
}
