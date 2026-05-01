"use client";

import { useEffect, useRef } from "react";

const NUM_RINGS    = 12;
const START_RADIUS = 40;
const GROWTH       = 0.4;
const FADE_MS      = 400;
const MAX_DISP     = 20;
const LERP         = 0.08;

export default function HeroLensCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let img: HTMLImageElement | null = null;
    let W = 0, H = 0;

    const radii: number[] = [];
    {
      let r = START_RADIUS;
      for (let i = 0; i < NUM_RINGS; i++) { radii.push(r); r *= 1 + GROWTH; }
    }

    let dx = 0, dy = 0;   // lerped displacement
    let tx = 0, ty = 0;   // target displacement from mouse
    let opacity  = 0;
    let fading   = false;
    let fadeT0   = 0;
    let fadeFrom = 0;
    let raf      = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      W = Math.round(rect.width)  || 1;
      H = Math.round(rect.height) || 1;
      canvas!.width  = W;
      canvas!.height = H;
    }

    function draw(ts: number) {
      if (!img) return;

      // Advance fade
      if (fading) {
        const t = Math.min((ts - fadeT0) / FADE_MS, 1);
        opacity = fadeFrom * (1 - t * t * (3 - 2 * t));
        if (t >= 1) { opacity = 0; fading = false; }
      }

      // Lerp displacement toward target
      dx += (tx - dx) * LERP;
      dy += (ty - dy) * LERP;

      const cx = W / 2;
      const cy = H / 2;

      ctx!.clearRect(0, 0, W, H);
      ctx!.drawImage(img, 0, 0, W, H);

      if (opacity <= 0) return;

      // Per-band displacement — rings fixed at canvas center
      for (let i = 0; i < NUM_RINGS; i++) {
        const innerR = i === 0 ? 0 : radii[i - 1];
        const outerR = radii[i];
        const sign   = i % 2 === 0 ? 1 : -1;

        ctx!.save();
        ctx!.beginPath();
        ctx!.arc(cx, cy, outerR, 0, Math.PI * 2, false);
        if (innerR > 0) ctx!.arc(cx, cy, innerR, 0, Math.PI * 2, true);
        ctx!.clip("evenodd");
        ctx!.translate(dx * sign, dy * sign);
        ctx!.drawImage(img, 0, 0, W, H);
        ctx!.restore();
      }

      // Ring strokes — fixed at canvas center
      ctx!.save();
      ctx!.globalAlpha = opacity;
      ctx!.strokeStyle = "rgba(255,255,255,0)";
      ctx!.lineWidth   = 1.5;
      ctx!.shadowBlur  = 0;
      ctx!.shadowColor = "rgba(255,255,255,0)";
      for (const r of radii) {
        ctx!.beginPath();
        ctx!.arc(cx, cy, r, 0, Math.PI * 2);
        ctx!.stroke();
      }
      ctx!.restore();
    }

    function frame(ts: number) {
      draw(ts);
      raf = requestAnimationFrame(frame);
    }

    const parent = canvas.parentElement!;

    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      const rawX = (e.clientX - rect.left - W / 2) * 0.05;
      const rawY = (e.clientY - rect.top  - H / 2) * 0.05;
      tx = rawX < -MAX_DISP ? -MAX_DISP : rawX > MAX_DISP ? MAX_DISP : rawX;
      ty = rawY < -MAX_DISP ? -MAX_DISP : rawY > MAX_DISP ? MAX_DISP : rawY;
      fading  = false;
      opacity = 1;
    }

    function onLeave() {
      tx = 0;
      ty = 0;
      if (opacity > 0) {
        fading   = true;
        fadeT0   = performance.now();
        fadeFrom = opacity;
      }
    }

    function onResize() { resize(); }

    const image = new window.Image();
    image.onload = () => { img = image; resize(); raf = requestAnimationFrame(frame); };
    image.src = "/images/hero-hand.jpg";

    resize();
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}
