"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Screenshot } from "@/lib/projects";
import Modal from "./Modal";

export default function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + screenshots.length) % screenshots.length),
    [screenshots.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % screenshots.length),
    [screenshots.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, prev, next]);

  if (screenshots.length === 0) return null;

  return (
    <>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:thin]">
        {screenshots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => openAt(i)}
            aria-label={`Open screenshot ${i + 1} of ${screenshots.length}`}
            className="relative shrink-0 w-[88vw] sm:w-[720px] aspect-video rounded-[var(--radius-md)] border border-border overflow-hidden snap-start cursor-zoom-in hover:border-accent/50 active:scale-[0.99] transition-[border-color,transform]"
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

      <Modal open={isOpen} onClose={close} backdropClassName="bg-black/90">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            close();
          }}
          aria-label="Close"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-white/20 text-white hover:border-white/50 active:scale-90 transition-[border-color,transform]"
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
            className="absolute left-2 sm:left-6 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-[var(--radius-sm)] border border-white/20 text-white hover:border-white/50 active:scale-90 transition-[border-color,transform]"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} />
          </button>
        )}

        <div
          className="relative w-full max-w-6xl aspect-video"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={screenshots[index].src}
                alt={screenshots[index].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {screenshots.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next screenshot"
            className="absolute right-2 sm:right-6 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-[var(--radius-sm)] border border-white/20 text-white hover:border-white/50 active:scale-90 transition-[border-color,transform]"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.75} />
          </button>
        )}

        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-white/70">
          {index + 1} / {screenshots.length}
        </div>
      </Modal>
    </>
  );
}
