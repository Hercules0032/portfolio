import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

type Props = {
  value: string; // e.g. "100K+", "25%", "5+", "15"
};

/** Parses a leading number out of strings like "100K+" or "25%" and counts up to it. */
export default function CountUp({ value }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const match = value.match(/^([\d.]+)(.*)$/);
  const numeric = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 90, damping: 20 });

  useEffect(() => {
    if (inView) mv.set(numeric);
  }, [inView, numeric, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) {
        const rounded = numeric % 1 === 0 ? Math.round(v) : v.toFixed(1);
        ref.current.textContent = `${rounded}${suffix}`;
      }
    });
    return unsub;
  }, [spring, numeric, suffix]);

  return (
    <motion.span ref={ref}>
      0{suffix}
    </motion.span>
  );
}
