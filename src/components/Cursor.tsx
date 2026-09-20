import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hot, setHot] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 320, damping: 26, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 320, damping: 26, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHot(!!t?.closest?.("a, button, [data-hover]"));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-flame"
      />
      <motion.div
        aria-hidden
        style={{ x: rx, y: ry }}
        animate={{ scale: hot ? 1.7 : 1, opacity: hot ? 0.6 : 0.35 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-none fixed left-0 top-0 z-[90] size-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-400/50 data-[hot=true]:border-flame/60"
        data-hot={hot}
      />
    </>
  );
}
