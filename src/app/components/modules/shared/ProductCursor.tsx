"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointer2 } from "lucide-react";

interface ProductCursorProps {
  x: number;
  y: number;
  actionText?: string;
  isClicking?: boolean;
}

export default function ProductCursor({
  x,
  y,
  actionText,
  isClicking = false,
}: ProductCursorProps) {
  return (
    <motion.div
      className="absolute top-0 left-0 pointer-events-none z-50 flex items-center gap-2"
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
        mass: 0.6,
      }}
    >
      {/* Sleek Mouse Pointer Icon */}
      <div className="relative">
        <MousePointer2 className="w-5 h-5 text-blue-600 fill-blue-600 drop-shadow-md -rotate-12" />

        {/* Click Ripple Effect */}
        {isClicking && (
          <motion.span
            initial={{ scale: 0.4, opacity: 1 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute -top-1 -left-1 w-6 h-6 rounded-full border-2 border-blue-500 bg-blue-500/20"
          />
        )}
      </div>

      {/* Action Tooltip Badge */}
      <AnimatePresence>
        {actionText && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-bold shadow-lg border border-slate-700 whitespace-nowrap flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>{actionText}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
