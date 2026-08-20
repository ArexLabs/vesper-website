"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [is_visible, set_is_visible] = useState(false);
  const last_scroll_y = useRef(0);

  const handle_scroll = useCallback(() => {
    const current_y = window.scrollY;
    const threshold = window.innerHeight * 0.5;
    const scrolling_up = current_y < last_scroll_y.current;

    last_scroll_y.current = current_y;
    set_is_visible(scrolling_up && current_y > threshold);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handle_scroll, { passive: true });
    return () => window.removeEventListener("scroll", handle_scroll);
  }, [handle_scroll]);

  const scroll_to_top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {is_visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scroll_to_top}
          className={cn(
            "fixed bottom-6 right-6 z-50 p-3 rounded-full",
            "bg-card/80 backdrop-blur border border-border shadow-lg",
            "hover:bg-card hover:border-brand-accent/50",
            "transition-colors"
          )}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-5 h-5 text-foreground" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
