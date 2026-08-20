"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { SPRING_SWAP, EASE_OUT } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface ActionSwapIconProps {
  value: string;
  children: ReactNode;
  animation?: "blur" | "roll";
  className?: string;
}

const BLUR_TRANSITION = { duration: 0.2, ease: "easeInOut" } as const;

const ICON_VARIANTS = {
  blur: {
    initial: { opacity: 0, scale: 0.25, filter: "blur(8px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: BLUR_TRANSITION },
    exit: { opacity: 0, scale: 0.25, filter: "blur(8px)", transition: BLUR_TRANSITION },
  },
  roll: {
    initial: { opacity: 0, y: 12, filter: "blur(3px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: SPRING_SWAP },
    exit: { opacity: 0, y: -12, filter: "blur(3px)", transition: { duration: 0.14, ease: EASE_OUT } },
  },
};

export function ActionSwapIcon({
  value,
  children,
  animation = "blur",
  className,
}: ActionSwapIconProps) {
  const reduce = useReducedMotion();

  return (
    <span className={cn("relative inline-grid shrink-0 place-items-center overflow-hidden", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={`${animation}-${value}`}
          aria-hidden
          variants={ICON_VARIANTS[animation]}
          initial={reduce ? false : "initial"}
          animate={reduce ? { opacity: 1, filter: "blur(0px)", scale: 1, y: 0 } : "animate"}
          exit={reduce ? undefined : "exit"}
          className="col-start-1 row-start-1 inline-flex items-center justify-center will-change-[opacity,filter,transform]"
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
