import { useEffect, useRef } from "react";

/* ————————————————————————————————————————————————
   Fluid gradient wave — layered sine composition with
   rope-physics ripple springs that distort under the cursor.
———————————————————————————————————————————————— */

const STOPS: [number, number, number][] = [
  [255, 77, 0], // neon orange
  [255, 94, 128], // magenta bridge
  [124, 58, 237], // electric purple
];

const rgba = (t: number, a: number): string => {
  const x = Math.min(1, Math.max(0, t)) * (STOPS.length - 1);
  const i = Math.min(STOPS.length - 2, Math.floor(x));
  const f = x - i;
  const A = STOPS[i];
  const B = STOPS[i + 1];
  return `rgba(${Math.round(A[0] + (B[0] - A[0]) * f)},${Math.round(
    A[1] + (B[1] - A[1]) * f
  )},${Math.round(A[2] + (B[2] - A[2]) * f)},${a})`;
};

const SP = 6; // sample spacing (px)

export default function WaveCanvas({ className, paused = false }: { className?: string; paused?: boolean }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let n = 0;
    let off = new Float32Array(0);
    let vel = new Float32Array(0);

    const resize = () => {
      const box = (canvas.parentElement ?? canvas).getBoundingClientRect();
      w = Math.max(320, box.width);
      h = Math.max(160, box.height);
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const nn = Math.ceil(w / SP) + 2;
      if (nn !== n) {
        const no = new Float32Array(nn);
        const nv = new Float32Array(nn);
        no.set(off.subarray(0, Math.min(nn, n)));
        off = no;
        vel = nv;
        n = nn;
      }
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement ?? canvas);

    const mouse = { x: -9999, y: -9999, py: -9999, active: false };
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onOut = () => {
      mouse.active = false;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onOut);
    window.addEventListener("blur", onOut);

    const smooth = (x: number, e0: number, e1: number) => {
      const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
      return t * t * (3 - 2 * t);
    };
    const env = (x: number) => smooth(x, 0, w * 0.13) * (1 - smooth(x, w * 0.87, w));

    const wave = (x: number, amp: number, ph: number, t: number) =>
      env(x) *
      amp *
      (Math.sin(x * 0.0102 + t * 1.15 + ph) * 0.55 +
        Math.sin(x * 0.0064 - t * 0.8 + ph * 2.1) * 0.32 +
        Math.sin(x * 0.021 + t * 1.85 + ph * 0.7) * 0.13) *
      (0.86 + 0.14 * Math.sin(t * 0.6 + x * 0.0012));

    const linePath = (base: number, amp: number, ph: number, t: number, ripple: boolean) => {
      ctx.beginPath();
      ctx.moveTo(-20, wave(-20, amp, ph, t) + base);
      for (let i = 0; i < n; i++) {
        const x = i * SP;
        const y = base + wave(x, amp, ph, t) + (ripple ? off[i] * env(x) : 0);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w + 20, base + wave(w + 20, amp, ph, t));
    };

    let raf = 0;
    let t = 2.4;
    let last = performance.now();

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, rgba(0, 1));
      grad.addColorStop(0.45, rgba(0.5, 1));
      grad.addColorStop(1, rgba(1, 1));

      /* 1 — far ghost fill */
      linePath(h * 0.62, 36, 1.9, t * 0.9, false);
      ctx.lineTo(w + 20, h + 40);
      ctx.lineTo(-20, h + 40);
      ctx.closePath();
      const g1 = ctx.createLinearGradient(0, h * 0.4, 0, h);
      g1.addColorStop(0, rgba(0.75, 0.14));
      g1.addColorStop(1, rgba(0.75, 0));
      ctx.fillStyle = g1;
      ctx.fill();

      /* 2 — back hairline */
      linePath(h * 0.44, 30, 3.4, t * 1.06, false);
      ctx.strokeStyle = grad;
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1.25;
      ctx.stroke();
      ctx.globalAlpha = 1;

      /* 3 — main ribbon fill (reacts to cursor) */
      linePath(h * 0.58, 46, 0, t, true);
      const topY = h * 0.36;
      ctx.lineTo(w + 20, h + 40);
      ctx.lineTo(-20, h + 40);
      ctx.closePath();
      const g2 = ctx.createLinearGradient(0, topY, 0, h + 40);
      g2.addColorStop(0, rgba(0.18, 0.5));
      g2.addColorStop(0.55, rgba(0.52, 0.18));
      g2.addColorStop(1, rgba(1, 0));
      ctx.fillStyle = g2;
      ctx.fill();

      /* 4 — crisp glowing crest line (reacts to cursor) */
      linePath(h * 0.58, 46, 0, t, true);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.4;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.shadowColor = rgba(0.72, 0.42);
      ctx.shadowBlur = 18;
      ctx.stroke();
      ctx.shadowBlur = 0;

      /* 5 — front fine line */
      linePath(h * 0.78, 26, 5.2, t * 1.14, false);
      ctx.strokeStyle = grad;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = 1.1;
      ctx.stroke();
      ctx.globalAlpha = 1;

      /* 6 — sampling dots along the crest */
      ctx.save();
      for (let x = Math.round(w * 0.06); x < w * 0.94; x += 42) {
        const i = Math.min(n - 1, Math.max(0, Math.floor(x / SP)));
        const y = h * 0.58 + wave(x, 46, 0, t) + off[i] * env(x);
        ctx.beginPath();
        ctx.arc(x, y, 1.7, 0, Math.PI * 2);
        ctx.fillStyle = rgba(x / w, 0.55);
        ctx.fill();
      }
      ctx.restore();
    };

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      t += dt;

      const rect = canvas.getBoundingClientRect();
      const mx = mouse.x - rect.left;
      const my = mouse.y - rect.top;
      const inside =
        mouse.active && my > -80 && my < h + 80 && mx > -180 && mx < w + 180;

      if (inside && n > 2) {
        const base = h * 0.58;
        const target = Math.max(-160, Math.min(160, (my - base) * 0.5));
        const dy = mouse.py === -9999 ? 0 : (mouse.y - mouse.py) / Math.max(dt, 0.008);
        const pulse = Math.max(-18, Math.min(18, dy * 0.016));
        const i0 = Math.max(1, Math.floor((mx - 170) / SP));
        const i1 = Math.min(n - 2, Math.ceil((mx + 170) / SP));
        for (let i = i0; i <= i1; i++) {
          const dx = i * SP - mx;
          const g = Math.exp(-(dx * dx) / (2 * 135 * 135));
          vel[i] += pulse * 2.4 * g;
          vel[i] += (target * g - off[i]) * 0.055;
        }
      }
      mouse.py = mouse.y;

      /* rope propagation — ripples travel horizontally like sound waves */
      for (let k = 0; k < 2; k++) {
        for (let i = 1; i < n - 1; i++) {
          vel[i] += (off[i - 1] + off[i + 1] - 2 * off[i]) * 0.28;
        }
      }
      for (let i = 0; i < n; i++) {
        vel[i] += -off[i] * 0.022;
        vel[i] *= 0.928;
        off[i] = Math.max(-230, Math.min(230, off[i] + vel[i]));
      }

      draw();
      raf = requestAnimationFrame(step);
    };

    let visible = true;
    const sync = () => {
      cancelAnimationFrame(raf);
      if (!reduced && visible && !document.hidden) { last = performance.now(); raf = requestAnimationFrame(step); }
      else draw();
    };
    const visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    visibilityObserver.observe(canvas);
    document.addEventListener('visibilitychange', sync);
    const redraw = new ResizeObserver(() => { if (reduced) draw(); });
    redraw.observe(canvas.parentElement ?? canvas);
    sync();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      redraw.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onOut);
      window.removeEventListener("blur", onOut);
    };
  }, [paused]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
