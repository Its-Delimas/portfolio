"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonClass, cn, EMAIL, WRAP } from "./ui";

/**
 * The top bar. Over a page's black opening panel it has no background of its
 * own and white type, so it reads as part of that panel; once the page scrolls
 * it settles into a paper-coloured bar with a hairline under it.
 */
export function Nav({ overInk = true }: { overInk?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const dark = overInk && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,color] duration-300",
        dark ? "border-b border-transparent text-white" : "border-b border-border bg-bg/85 text-fg backdrop-blur",
      )}
    >
      <div className={cn(WRAP, "flex h-16 items-center gap-3 sm:gap-6")}>
        <Link href="/" className="min-w-0 truncate font-brand text-lg font-extrabold leading-none sm:text-xl">
          Spencer Delimas
        </Link>
        <nav
          className={cn(
            "ml-auto hidden items-center gap-7 text-sm font-medium md:flex",
            dark ? "text-white/70 [&_a:hover]:text-white" : "text-muted [&_a:hover]:text-fg",
          )}
        >
          <Link href="/#work">Work</Link>
          <Link href="/#how">How I work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <a
          href={`mailto:${EMAIL}`}
          className={cn(
            buttonClass(dark ? "ghost-ink" : "primary"),
            "ml-auto h-9 flex-none px-3.5 text-xs sm:h-10 sm:px-5 sm:text-sm md:ml-0",
          )}
        >
          Email me
        </a>
      </div>
    </header>
  );
}
