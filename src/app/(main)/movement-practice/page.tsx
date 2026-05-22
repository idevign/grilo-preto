"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EASE } from "@/components/animations";

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

  useEffect(() => { setLoaded(true); }, []);

  return (
    <main>

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-content">
          <h1
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
            Ritual Movement Practice develops the whole person through the body. Not the body in
            isolation from everything else, but as one integrated system.
          </p>
        </div>
      </section>

      {/* ── Path cards ── */}
      <section className="page-section">
        <div className="grid-3">
          {paths.map((path) => (
            <div key={path.href} className="mp-card">
              <h2>{path.title}</h2>
              <p className="body-prose">{path.description}</p>
              <Link href={path.href} className="link-underline">Explore</Link>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <Link href="/rmp" className="link-cta">Explore the full practice &rarr;</Link>
        </div>
      </section>

      <style>{`
        .mp-card {
          border: 1px solid var(--color-border);
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 280px;
        }
        .mp-card h2 {
          font-size: clamp(var(--text-md), 2.5vw, var(--text-lg));
        }
      `}</style>
    </main>
  );
}
