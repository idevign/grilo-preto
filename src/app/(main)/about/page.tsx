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
          align-items: flex-start;
          justify-content: flex-start;
          overflow: hidden;
        }
        .about-hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 5rem 2rem 5rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem));
          max-width: 680px;
        }
        .about-hero-h1 {
          font-family: var(--font-hero);
          font-size: clamp(var(--text-2xl), 7.5vw, var(--text-4xl));
          font-weight: 400;
          letter-spacing: var(--tracking-tight);
          line-height: 0.95;
          color: var(--color-text-primary);
          margin: 0;
        }
      `}</style>
    </main>
  );
}
