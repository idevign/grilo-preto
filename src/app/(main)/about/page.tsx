"use client";

import { useState } from "react";

const chapters = [
  {
    numeral: "I",
    title: "The Unfolding",
    body: "Years building a career in software development and design. Conventional success, increasing distance from myself. The kind of life that looks right from the outside and feels increasingly hollow from within. Capoeira found me. Not the other way around. Something broke open. I did not understand it then. I kept returning anyway.",
  },
  {
    numeral: "II",
    title: "The Becoming",
    body: "Two decades of direct study. The art asked questions the mind had been avoiding. The body, it turned out, knew things I had not been listening to. Mestre Acordeon, the late Mestre Rã, Mestra Suelly. A lineage passed through practice, not paper. I became a Mestre. The title is a responsibility, not an arrival.",
  },
  {
    numeral: "III",
    title: "The Expansion",
    body: "The study deepened beyond capoeira. Gymnastic strength training. Somatics. Movement culture. Training with Ido Portal and his senior students. Not collecting methods. Asking the same question through different forms. What does it mean to move with full presence? What does the body reveal when you stop performing and start listening?",
  },
  {
    numeral: "IV",
    title: "The Invitation",
    body: "What I found across two decades, I offer. Not as a method. As a synthesis. The practice I teach today is the result of living inside a question and refusing to settle for easy answers. You are invited into it.",
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <main>

      {/* ── Header ── */}
      <section style={{ padding: "5rem 1.5rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.1,
            color: "var(--color-dark)",
            margin: "0 0 1.25rem",
          }}
        >
          About Grilo
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-mid)",
            margin: 0,
          }}
        >
          Mestre. Movement teacher. The story behind the practice.
        </p>
      </section>

      {/* ── Desktop: two-column ── */}
      <div className="about-desktop">
        <div className="about-inner">

          {/* Left: chapter list */}
          <aside className="about-left">
            <p className="about-eyebrow">The Story of Grilo Preto</p>

            <nav style={{ display: "flex", flexDirection: "column" }}>
              {chapters.map((ch, i) => (
                <button
                  key={ch.numeral}
                  onClick={() => setActive(i)}
                  style={{
                    all: "unset",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.875rem",
                    padding: "1rem 0 1rem 1.25rem",
                    borderLeft: i === active
                      ? "2px solid var(--color-copper)"
                      : "2px solid transparent",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.06em",
                      color: i === active ? "var(--color-copper)" : "var(--color-mid)",
                      transition: "color 0.2s",
                      flexShrink: 0,
                    }}
                  >
                    {ch.numeral}.
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "1.0625rem",
                      fontWeight: 400,
                      color: i === active ? "var(--color-dark)" : "var(--color-mid)",
                      transition: "color 0.2s",
                      lineHeight: 1.3,
                    }}
                  >
                    {ch.title}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Right: content pane */}
          <div className="about-right">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div
                style={{
                  width: "28px",
                  height: "1px",
                  backgroundColor: "var(--color-copper)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "var(--color-mid)",
                }}
              >
                {chapters[active].numeral}.
              </span>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 300,
                  color: "var(--color-dark)",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {chapters[active].title}
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1rem, 1.8vw, 1.0625rem)",
                  lineHeight: 1.85,
                  color: "var(--color-dark)",
                  margin: 0,
                  fontWeight: 300,
                  maxWidth: "52ch",
                }}
              >
                {chapters[active].body}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Mobile: stacked accordion ── */}
      <div className="about-mobile">
        <p className="about-eyebrow" style={{ marginBottom: "2rem" }}>
          The Story of Grilo Preto
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {chapters.map((ch, i) => (
            <div key={ch.numeral} style={{ borderTop: "1px solid var(--color-subtle)" }}>
              <button
                onClick={() => setActive(active === i ? -1 : i)}
                style={{
                  all: "unset",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.875rem",
                  width: "100%",
                  padding: "1.25rem 0",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    color: i === active ? "var(--color-copper)" : "var(--color-mid)",
                    flexShrink: 0,
                  }}
                >
                  {ch.numeral}.
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "1.125rem",
                    fontWeight: 400,
                    color: i === active ? "var(--color-dark)" : "var(--color-mid)",
                    lineHeight: 1.3,
                  }}
                >
                  {ch.title}
                </span>
              </button>

              {active === i && (
                <div
                  style={{
                    paddingBottom: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  <div style={{ width: "28px", height: "1px", backgroundColor: "var(--color-copper)" }} />
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      lineHeight: 1.85,
                      color: "var(--color-dark)",
                      margin: 0,
                      fontWeight: 300,
                    }}
                  >
                    {ch.body}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Shared ── */
        .about-eyebrow {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
        }

        /* ── Desktop ── */
        .about-desktop {
          display: flex;
          align-items: flex-start;
        }
        .about-inner {
          display: flex;
          align-items: flex-start;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
          gap: 5rem;
        }
        .about-left {
          flex: 0 0 38%;
        }
        .about-right {
          flex: 1;
        }
        .about-mobile {
          display: none;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .about-desktop { display: none; }
          .about-mobile {
            display: block;
            padding: 4rem 1.5rem 6rem;
          }
        }
      `}</style>
    </main>
  );
}
