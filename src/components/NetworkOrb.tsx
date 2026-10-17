import { useEffect, useRef } from 'react';

export default function NetworkOrb() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const nodes: { x: number; y: number; z: number }[] = [];
    const count = 95;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(Math.max(0, 1 - y * y));
      const angle = goldenAngle * i;
      nodes.push({ x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius });
    }

    const edges: [number, number][] = [];
    nodes.forEach((node, i) => {
      nodes.forEach((next, j) => {
        if (j <= i) return;
        const distance = Math.hypot(node.x - next.x, node.y - next.y, node.z - next.z);
        if (distance < 0.43) edges.push([i, j]);
      });
    });

    let width = 0;
    let height = 0;
    let frame = 0;
    let rotation = 0.35;
    let lastTime = 0;
    let visible = true;

    function draw() {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      if (!width || !height) return;

      const centerX = width / 2;
      const centerY = height / 2;
      const scale = Math.min(width, height) * 0.38;

      const projected = nodes.map((node) => {
        const x = node.x * Math.cos(rotation) + node.z * Math.sin(rotation);
        const z = -node.x * Math.sin(rotation) + node.z * Math.cos(rotation);
        const y = node.y * Math.cos(0.27) - z * Math.sin(0.27);
        const depth = node.y * Math.sin(0.27) + z * Math.cos(0.27);
        const perspective = 3.8 / (3.8 - depth * 0.35);
        return {
          x: centerX + x * scale * perspective,
          y: centerY + y * scale * perspective,
          z: depth,
        };
      });

      edges.forEach(([i, j]) => {
        const a = projected[i];
        const b = projected[j];
        const alpha = 0.08 + ((a.z + b.z + 2) / 4) * 0.3;
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.lineWidth = 0.8;
        context.strokeStyle = `rgba(124, 92, 255, ${alpha})`;
        context.stroke();
      });

      projected
        .slice()
        .sort((a, b) => a.z - b.z)
        .forEach((node) => {
          const alpha = 0.2 + ((node.z + 1) / 2) * 0.65;
          context.beginPath();
          context.arc(node.x, node.y, node.z > 0.3 ? 2.4 : 1.5, 0, Math.PI * 2);
          context.fillStyle = `rgba(0, 229, 255, ${alpha})`;
          context.fill();
        });
    }

    function resize() {
      if (!canvas || !canvas.parentElement || !context) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    }

    function tick(time: number) {
      frame = 0;
      if (motionQuery.matches || !visible || document.hidden) return;
      if (lastTime) rotation += Math.min(time - lastTime, 50) * 0.000075;
      lastTime = time;
      draw();
      frame = requestAnimationFrame(tick);
    }

    function syncAnimation() {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      draw();
      if (!motionQuery.matches && visible && !document.hidden) {
        frame = requestAnimationFrame(tick);
      }
    }

    window.addEventListener('resize', resize);
    motionQuery.addEventListener('change', syncAnimation);
    document.addEventListener('visibilitychange', syncAnimation);

    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
        syncAnimation();
      });
      observer.observe(canvas);
    }

    resize();
    syncAnimation();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      motionQuery.removeEventListener('change', syncAnimation);
      document.removeEventListener('visibilitychange', syncAnimation);
      if (observer) observer.disconnect();
    };
  }, []);

  return <canvas id="network-orb" ref={canvasRef} />;
}
