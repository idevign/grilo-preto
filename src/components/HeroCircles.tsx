"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
}

// [inner radius, outer radius] pairs for each bright ring.
// inner = 0 means a solid filled circle at the center.
const RINGS: [number, number][] = [
  [0, 52],
  [70, 112],
  [130, 172],
  [190, 232],
  [250, 295],
];

// Dark overlay opacity applied over the full image outside the rings.
const OVERLAY_ALPHA = 0.8;

export default function HeroCircles({ src }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId = 0;
    let started = false;

    // Normalized mouse position (0..1). Default to center.
    const mouse = { x: 0.5, y: 0.5 };
    const target = { x: 0.5, y: 0.5 };

    const img = new Image();
    img.src = src;

    function setSize() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      if (!w || !h) return;
      canvas!.width = w;
      canvas!.height = h;
    }

    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    // Track mouse globally so hover over overlaid text/divs still works.
    function onMouseMove(e: MouseEvent) {
      const r = canvas!.getBoundingClientRect();
      target.x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      target.y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    }

    function onTouchMove(e: TouchEvent) {
      const r = canvas!.getBoundingClientRect();
      const t = e.touches[0];
      target.x = Math.min(1, Math.max(0, (t.clientX - r.left) / r.width));
      target.y = Math.min(1, Math.max(0, (t.clientY - r.top) / r.height));
    }

    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });

    // Draw image scaled to cover the canvas, centered.
    function drawCover() {
      const w = canvas!.width;
      const h = canvas!.height;
      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx!.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    }

    function draw() {
      frameId = requestAnimationFrame(draw);

      const w = canvas!.width;
      const h = canvas!.height;
      if (!w || !h) return;

      // Smooth lerp toward target position.
      mouse.x += (target.x - mouse.x) * 0.08;
      mouse.y += (target.y - mouse.y) * 0.08;

      const cx = mouse.x * w;
      const cy = mouse.y * h;

      ctx!.clearRect(0, 0, w, h);

      if (!img.complete || !img.naturalWidth) {
        ctx!.fillStyle = "#1c1a17";
        ctx!.fillRect(0, 0, w, h);
        return;
      }

      // Step 1: draw full image as the base layer.
      drawCover();

      // Step 2: dark overlay on top of the full image.
      ctx!.fillStyle = `rgba(10, 9, 8, ${OVERLAY_ALPHA})`;
      ctx!.fillRect(0, 0, w, h);

      // Step 3: for each ring, clip to the annular region and redraw the
      // image at full brightness, cutting through the dark overlay.
      for (const [inner, outer] of RINGS) {
        ctx!.save();
        ctx!.beginPath();
        // Outer boundary, clockwise.
        ctx!.arc(cx, cy, outer, 0, Math.PI * 2, false);
        // Inner boundary, counterclockwise, creates a hole via nonzero winding.
        if (inner > 0) ctx!.arc(cx, cy, inner, 0, Math.PI * 2, true);
        ctx!.clip();
        drawCover();
        ctx!.restore();
      }
    }

    function start() {
      if (started) return;
      started = true;
      draw();
    }

    img.onload = start;
    if (img.complete && img.naturalWidth) start();

    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchmove", onTouchMove);
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
