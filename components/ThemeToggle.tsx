"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { isDarkTheme, subscribeTheme, toggleTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribeTheme, isDarkTheme, () => false);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative flex items-center justify-center w-9 h-9 shrink-0 rounded-[var(--radius-sm)] border border-border text-muted hover:text-accent hover:border-accent active:scale-90 transition-[color,border-color,transform] overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          className="flex items-center justify-center"
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          {isDark ? (
            <Sun className="w-4 h-4" strokeWidth={1.75} />
          ) : (
            <Moon className="w-4 h-4" strokeWidth={1.75} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
