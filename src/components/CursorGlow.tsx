import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    return isFinePointer && !reduced;
  });
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[55] -translate-x-1/2 -translate-y-1/2 mix-blend-screen cursor-glow"
      style={{ left: sx, top: sy }}
    >
      <div className="w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(95,212,232,0.07)_0%,rgba(255,122,61,0.04)_40%,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 border border-[var(--accent-2)]/50 rounded-full" />
    </motion.div>
  );
}
