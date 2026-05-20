"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { EASE, REVEAL_TR, useReveal, StaggerItem } from "@/components/animations";

const paths = [
  {
    title: "RMP⁺ Guided",
    description: "The foundation. A structured online program you move through at your own pace.",
    href: "/rmp/guided",
  },
  {
    title: "RMP⁺ In-Person",
    description: "Weekly group sessions at the Movement Ritual studio in Denver. What practice by yourself cannot replicate.",
    href: "/rmp/in-person",
  },
  {
    title: "RMP⁺ Personalized",
    description: "One-to-one bespoke curriculum tailored to where you are and where you want to go.",
    href: "/rmp/personalized",
  },
];

export default function MovementPractice() {
  const [loaded, setLoaded] = useState(false);

  const s1Ref = useRef<HTMLDivElement>(null);
  const r1 = useReveal(s1Ref);

  useEffect(() => { setLoaded(true); }, []);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="mp-hero">
        <div className="mp-hero-content">
          <h1
            className="mp-hero-h1"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.9s ${EASE} 0.1s, transform 0.9s ${EASE} 0.1s`,
            }}
          >
            The Movement Practice
          </h1>
          <h2
            className="hero-eyebrow"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.35s, transform 0.8s ${EASE} 0.35s`,
            }}
          >
            A physical-first path to self mastery
          </h2>
          <p
            className="hero-blurb"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.6s, transform 0.8s ${EASE} 0.6s`,
            }}
          >
            Ritual Movement Practice develops the whole person through the body. Not the body in isolation from everything else, but as one integrated system.
          </p>
        </div>
      </section>

      {/* ── Path cards ── */}
      <section style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))" }}>
        <div
          ref={s1Ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            opacity: r1 ? 1 : 0,
            transform: r1 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <div className="mp-grid">
            {paths.map((path, i) => (
              <StaggerItem key={path.href} index={i}>
                <div
                  style={{
                    backgroundColor: "var(--color-base)",
                    border: "1px solid var(--color-subtle)",
                    padding: "3rem 2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    minHeight: "280px",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(var(--text-md), 2.5vw, var(--text-lg))",
                      fontWeight: 400,
                      color: "var(--color-dark)",
                      margin: 0,
                      lineHeight: 1.2,
                      letterSpacing: "var(--tracking-tight)",
                    }}
                  >
                    {path.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-base)",
                      color: "var(--color-dark)",
                      margin: 0,
                      lineHeight: 1.7,
                      opacity: 0.75,
                      flexGrow: 1,
                    }}
                  >
                    {path.description}
                  </p>
                  <Link href={path.href} className="mp-card-link">
                    Explore
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </div>
          <div style={{ margin: "3rem 0 0", textAlign: "center" }}>
            <Link href="/rmp" className="mp-full-link">
              Explore the full practice →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .mp-hero {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          overflow: hidden;
        }
        .mp-hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 6rem 2rem 6rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem));
          max-width: 680px;
        }
        .mp-hero-h1 {
          font-family: var(--font-hero);
          font-size: clamp(var(--text-2xl), 7.5vw, var(--text-4xl));
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: var(--tracking-tight);
          color: var(--color-text-primary);
          margin: 0;
        }
        .mp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .mp-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .mp-grid { grid-template-columns: 1fr; }
        }
        .mp-card-link {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-dark);
          text-decoration: none;
          border-bottom: 1px solid currentColor;
          padding-bottom: 1px;
          align-self: flex-start;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .mp-card-link:hover { opacity: 1; }
        .mp-full-link {
          font-family: var(--font-body);
          font-size: var(--text-base);
          color: var(--color-mid);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.2s;
        }
        .mp-full-link:hover { color: var(--color-dark); }
      `}</style>
    </main>
  );
}
