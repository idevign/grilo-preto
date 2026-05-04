"use client";

import { useEffect, useState } from "react";
import { EASE } from "@/components/animations";
import { StorySection } from "@/components/StorySection";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  return (
    <main>

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-scrim" />
        <div className="about-hero-content">
          <h1
            className="about-hero-h1"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.9s ${EASE} 0.1s, transform 0.9s ${EASE} 0.1s`,
            }}
          >
            About Grilo
          </h1>
          <h2
            className="hero-eyebrow"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.35s, transform 0.8s ${EASE} 0.35s`,
            }}
          >
            Mestre. Movement Teacher.
          </h2>
          <p
            className="hero-blurb"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.6s, transform 0.8s ${EASE} 0.6s`,
            }}
          >
            Two decades inside a practice that asks for all of you. This is the story behind it.
          </p>
        </div>
      </section>

      {/* ── Story of Grilo Preto ── */}
      <StorySection />

      <style>{`
        .about-hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          overflow: hidden;
          background: url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80') center / cover no-repeat;
        }
        .about-hero-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to bottom, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.72) 100%);
          pointer-events: none;
        }
        .about-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 5rem 2rem 5rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem));
          max-width: 680px;
        }
        .about-hero-h1 {
          font-family: var(--font-hero);
          font-size: clamp(var(--text-2xl), 7.5vw, var(--text-4xl));
          font-weight: 700;
          font-style: italic;
          line-height: 0.95;
          color: #f0ebe3;
          margin: 0;
        }
      `}</style>
    </main>
  );
}
