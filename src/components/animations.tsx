"use client";

import { useEffect, useRef, useState } from "react";

export const EASE = "cubic-bezier(0.25, 0.1, 0.25, 1)";
export const REVEAL_TR = `opacity 0.7s ${EASE}, transform 0.7s ${EASE}`;

export function useReveal(ref: React.RefObject<HTMLDivElement | null>) {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return revealed;
}

export function StaggerItem({
  index,
  children,
  style,
}: {
  index: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useReveal(ref);
  const delay = `${index * 0.12}s`;
  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ${EASE} ${delay}, transform 0.6s ${EASE} ${delay}`,
      }}
    >
      {children}
    </div>
  );
}
