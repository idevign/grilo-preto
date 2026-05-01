"use client";

import { useEffect, useRef } from "react";

const MAX_DISP = 45;
const FADE_MS  = 600;
const FREQ     = 4;
const LERP     = 10; // exponential smoothing speed — higher = faster follow

// 0 = idle, 1 = active, 2 = fading
type Mode = 0 | 1 | 2;

export default function HeroRippleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null;
    if (!ctx) return;
    const c = ctx;

    let bgPx:    Uint8ClampedArray | null = null;
    let imgData: ImageData         | null = null;
    let bgW = 0;
    let bgH = 0;
    let tx  = 0;  // target: actual mouse position
    let ty  = 0;
    let mx  = 0;  // display: lerped position that chases target
    let my  = 0;
    let alpha  = 0;
    let fadeT0 = 0;
    let mode: Mode = 0;
    let prevTs = 0;
    let raf    = 0;

    function buildBg() {
      const rect = canvas!.getBoundingClientRect();
      bgW = Math.round(rect.width)  || 1;
      bgH = Math.round(rect.height) || 1;
      canvas!.width  = bgW;
      canvas!.height = bgH;

      imgData = c.createImageData(bgW, bgH);

      const off = document.createElement("canvas");
      off.width  = bgW;
      off.height = bgH;
      const oc = off.getContext("2d")!;

      const img = new window.Image();
      img.onload = () => {
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const imgAspect    = iw / ih;
        const canvasAspect = bgW / bgH;

        let sx: number, sy: number, sw: number, sh: number;
        if (imgAspect > canvasAspect) {
          sh = ih; sw = sh * canvasAspect; sx = (iw - sw) / 2; sy = 0;
        } else {
          sw = iw; sh = sw / canvasAspect; sx = 0; sy = (ih - sh) / 2;
        }

        oc.drawImage(img, sx, sy, sw, sh, 0, 0, bgW, bgH);
        bgPx = oc.getImageData(0, 0, bgW, bgH).data;
      };
      img.src = "/images/hero-hand.jpg";
    }

    function frame(ts: number) {
      if (mode === 0) return;

      const dt = prevTs ? Math.min(ts - prevTs, 50) : 16;
      prevTs = ts;

      // Frame-rate-independent exponential lerp toward target
      const t = 1 - Math.exp(-LERP * dt / 1000);
      mx += (tx - mx) * t;
      my += (ty - my) * t;

      const settled = Math.abs(tx - mx) < 0.3 && Math.abs(ty - my) < 0.3;

      if (mode === 2) {
        alpha = Math.max(0, 1 - (ts - fadeT0) / FADE_MS);
        if (alpha === 0 && settled) {
          mode   = 0;
          prevTs = 0;
          c.clearRect(0, 0, bgW, bgH);
          return;
        }
      }

      if (!bgPx || !imgData) {
        raf = requestAnimationFrame(frame);
        return;
      }

      const out = imgData.data;

      for (let j = 0; j < bgH; j++) {
        for (let i = 0; i < bgW; i++) {
          const dx   = i - mx;
          const dy   = j - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const oi   = (j * bgW + i) * 4;

          let sx: number, sy: number;

          if (dist < 0.5) {
            sx = i; sy = j;
          } else {
            const disp = Math.sin(Math.log(dist + 1) * FREQ)
              * MAX_DISP
              / (1 + dist * 0.005)
              * alpha;

            sx = Math.max(0, Math.min(bgW - 1, Math.round(i + (dx / dist) * disp)));
            sy = Math.max(0, Math.min(bgH - 1, Math.round(j + (dy / dist) * disp)));
          }

          const si = (sy * bgW + sx) * 4;
          out[oi]     = bgPx[si];
          out[oi + 1] = bgPx[si + 1];
          out[oi + 2] = bgPx[si + 2];
          out[oi + 3] = 255;
        }
      }

      c.putImageData(imgData, 0, 0);
      raf = requestAnimationFrame(frame);
    }

    const parent = canvas.parentElement!;

    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
      if (mode !== 1) {
        const wasIdle = mode === 0;
        if (wasIdle) {
          // Snap display position on first entry so it doesn't slide in from 0,0
          mx = tx; my = ty;
          prevTs = 0;
        }
        mode  = 1;
        alpha = 1;
        if (wasIdle) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(frame);
        }
        // If mode was 2 (fading), RAF is already running — mode change is enough
      }
    }

    function onLeave() {
      if (mode === 1) {
        mode   = 2;
        fadeT0 = performance.now();
        // RAF keeps running: lerp finishes settling, then alpha fades to 0
      }
    }

    buildBg();
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", buildBg);

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", buildBg);
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
