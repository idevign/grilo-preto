"use client";

import { useEffect, useRef, useState } from "react";
import { EASE, REVEAL_TR, useReveal, StaggerItem } from "@/components/animations";

export default function Capoeira() {
  const [loaded, setLoaded] = useState(false);

  const s1Ref = useRef<HTMLDivElement>(null);
  const bqRef = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);
  const s4Ref = useRef<HTMLDivElement>(null);

  const r1 = useReveal(s1Ref);
  const rBq = useReveal(bqRef);
  const r2 = useReveal(s2Ref);
  const r3 = useReveal(s3Ref);
  const r4 = useReveal(s4Ref);

  useEffect(() => { setLoaded(true); }, []);

  return (
    <main>

      {/* ── Hero ── */}
      <section className="cap-hero">
        <div className="cap-hero-scrim" />
        <div className="cap-hero-content">
          <h1
            className="cap-hero-h1"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.9s ${EASE} 0.1s, transform 0.9s ${EASE} 0.1s`,
            }}
          >
            Capoeira
          </h1>
          <h2
            className="hero-eyebrow"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.35s, transform 0.8s ${EASE} 0.35s`,
            }}
          >
            An Afro-Brazilian Martial Art
          </h2>
          <p
            className="hero-blurb"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.6s, transform 0.8s ${EASE} 0.6s`,
            }}
          >
            Part martial art, part game, part music, part ritual. Born from a people who needed to move in ways that could not be taken from them.
          </p>
        </div>
      </section>

      {/* ── Section 1: What it is ── */}
      <section
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))",
        }}
      >
        <div
          ref={s1Ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            opacity: r1 ? 1 : 0,
            transform: r1 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >

          {/* Pull quote with copper line */}
          <div
            ref={bqRef}
            style={{
              position: "relative",
              paddingLeft: "1.5rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "2px",
                backgroundColor: "var(--color-copper)",
                height: rBq ? "100%" : "0%",
                transition: `height 0.6s ${EASE} 0.2s`,
              }}
            />
            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(var(--text-md), 2.5vw, var(--text-lg))",
                fontWeight: 300,
                color: "var(--color-dark)",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              &ldquo;A fight like dance, a dance like fight.&rdquo;
              <cite
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontStyle: "normal",
                  fontSize: "var(--text-xs)",
                  letterSpacing: "0.06em",
                  color: "var(--color-mid)",
                  marginTop: "0.75rem",
                }}
              >
                — Mestre Acordeon
              </cite>
            </blockquote>
          </div>

          {/* Body */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="cap-body">
              It is Afro-Brazilian in its roots. Born from a people who needed to move in ways that
              could not be taken from them. Part martial art, part game, part music, part ritual.
              Those categories do not fully contain it. They never have.
            </p>
            <p className="cap-body">
              In the roda, two practitioners enter into a conversation through movement. There is no
              script. No choreography. What unfolds is a live negotiation of space, timing, deception,
              and presence. You learn to read another person while staying honest about yourself. You
              learn that the body has its own intelligence and that developing it takes more than
              strength or technique.
            </p>
            <p className="cap-body">
              Capoeira is also song. It is percussion. It is a culture passed between people over
              generations, carried in the body rather than written in books. To train capoeira
              seriously is to enter something larger than yourself.
            </p>
          </div>

          {/* Italic callout */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(var(--text-base), 2vw, var(--text-md))",
              fontWeight: 300,
              color: "var(--color-dark)",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            It is one of the few practices in the world that asks for all of you. Physical, mental,
            musical, and emotional at the same time.
          </p>
        </div>
      </section>

      {/* ── Section 2: Lineage ── */}
      <section
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))",
        }}
      >
        <div
          ref={s2Ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            opacity: r2 ? 1 : 0,
            transform: r2 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(var(--text-lg), 3vw, var(--text-xl))",
              fontWeight: 600,
              fontStyle: "italic",
              color: "var(--color-dark)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Lineage
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="cap-body">
              I am a Mestre in capoeira, the highest title within the culture. My lineage runs through
              the United Capoeira Association, under the guidance of world-renowned Mestre Acordeon,
              the late Mestre Rã, and Mestra Suelly.
            </p>
            <p className="cap-body">
              This lineage is not a credential. It is an honor. It is communal recognition. It is a
              responsibility. To teach with integrity, to preserve what was passed to me, to evolve
              it where needed, and to pass it forward with care.
            </p>
            <p className="cap-body">
              I have been in this practice for over two decades. It shaped everything that came after
              it, including the movement practice I teach today. Capoeira is where my roots live.
            </p>
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              letterSpacing: "0.08em",
              color: "var(--color-mid)",
              margin: 0,
            }}
          >
            Mestre Acordeon&nbsp;&nbsp;&middot;&nbsp;&nbsp;Mestre Rã&nbsp;&nbsp;&middot;&nbsp;&nbsp;Mestra Suelly
          </p>
        </div>
      </section>

      {/* ── Section 3: Train & Play ── */}
      <section
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))",
        }}
      >
        <div
          ref={s3Ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            opacity: r3 ? 1 : 0,
            transform: r3 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(var(--text-lg), 3vw, var(--text-xl))",
              fontWeight: 600,
              fontStyle: "italic",
              color: "var(--color-dark)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Train &amp; Play
          </h2>

          {/* Online */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="cap-subheading">Online — available anywhere</p>
            <h3 className="cap-subsubheading">YouTube</h3>
            <p className="cap-body">
              Over 16,000 practitioners around the world have found their way to capoeira through
              this channel. What began during the pandemic as a resource for students has grown into
              a widely respected platform for conditioning and training, used by beginners and
              seasoned practitioners alike. A new video series is coming. In the meantime, the
              existing library remains a genuine place to begin.
            </p>
            <a
              href="https://www.youtube.com/@grilopretocapoeira"
              target="_blank"
              rel="noopener noreferrer"
              className="cap-link"
            >
              Visit My Channel @grilopretocapoeira
            </a>
          </div>

          {/* In-Person Denver */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="cap-subheading">In-Person — Denver</p>
            <h3 className="cap-subsubheading">UCA Colorado</h3>
            <p className="cap-body">
              Classes for all levels, for adults and children. Regular rodas, cultural immersions,
              and an annual batizado. A community rooted in genuine practice of the art, not
              performance, not fitness, not trend. If you are in Denver and want to train capoeira
              in person, this is where you come.
            </p>
            <a
              href="https://ucacolorado.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cap-link"
            >
              Visit UCA Colorado
            </a>
          </div>

          {/* In-Person Global */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="cap-subheading">In-Person — Globally</p>
            <h3 className="cap-subsubheading">Upcoming Events</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <StaggerItem index={0}>
                <p style={{ margin: 0 }}>
                  <a
                    href="https://www.miamicapoeirasolelua.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cap-event-link cap-event-passed"
                  >
                    Sol e Lua Cultural Arts Center Encounter &amp; Belt Ceremony&nbsp;&nbsp;&middot;&nbsp;&nbsp;Miami, FL&nbsp;&nbsp;&middot;&nbsp;&nbsp;Feb 25th – March 1st, 2025{" "}
                    <span className="cap-event-passed-tag">(passed)</span>
                  </a>
                </p>
              </StaggerItem>
              <StaggerItem index={1}>
                <p style={{ margin: 0 }}>
                  <a
                    href="https://www.ucahayward.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cap-event-link cap-event-passed"
                  >
                    UCA Hayward Batizado 2026&nbsp;&nbsp;&middot;&nbsp;&nbsp;Hayward, CA&nbsp;&nbsp;&middot;&nbsp;&nbsp;April 2026{" "}
                    <span className="cap-event-passed-tag">(passed)</span>
                  </a>
                </p>
              </StaggerItem>
              <StaggerItem index={2}>
                <p style={{ margin: 0 }}>
                  <a
                    href="https://www.maplevalleycapoeira.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cap-event-link cap-event-passed"
                  >
                    Maple Valley Capoeira&nbsp;&nbsp;&middot;&nbsp;&nbsp;Maple Valley, WA&nbsp;&nbsp;&middot;&nbsp;&nbsp;April 24th–25th{" "}
                    <span className="cap-event-passed-tag">(passed)</span>
                  </a>
                </p>
              </StaggerItem>
              <StaggerItem index={3}>
                <p style={{ margin: 0 }}>
                  <a
                    href="https://ucacolorado.com/batizado"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cap-event-link"
                  >
                    Denver Batizado&nbsp;&nbsp;&middot;&nbsp;&nbsp;Denver, CO&nbsp;&nbsp;&middot;&nbsp;&nbsp;June 4th–7th
                  </a>
                </p>
              </StaggerItem>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Closing CTA ── */}
      <section
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "6rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))",
          textAlign: "center",
        }}
      >
        <div
          ref={s4Ref}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            opacity: r4 ? 1 : 0,
            transform: r4 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(var(--text-md), 2.5vw, var(--text-lg))",
              fontWeight: 300,
              color: "var(--color-dark)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Whether you begin online or step into the studio, the art is waiting.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap" }}>
            <a
              href="https://www.youtube.com/@grilopretocapoeira"
              target="_blank"
              rel="noopener noreferrer"
              className="cap-cta-link"
            >
              Start online
            </a>
            <a
              href="https://ucacolorado.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cap-cta-link"
            >
              Train in Denver
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .cap-hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          overflow: hidden;
          background: url('https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&q=80') center / cover no-repeat;
        }
        .cap-hero-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to bottom, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.72) 100%);
          pointer-events: none;
        }
        .cap-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 5rem 2rem 5rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem));
          max-width: 680px;
        }
        .cap-hero-h1 {
          font-family: var(--font-hero);
          font-size: clamp(var(--text-2xl), 7.5vw, var(--text-4xl));
          font-weight: 700;
          font-style: italic;
          line-height: 0.95;
          color: #f0ebe3;
          margin: 0;
        }
        .cap-body {
          font-family: var(--font-body);
          font-size: var(--text-base);
          line-height: 1.85;
          color: var(--color-dark);
          margin: 0;
          font-weight: 300;
        }
        .cap-subheading {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
        }
        .cap-subsubheading {
          font-family: var(--font-display);
          font-size: var(--text-md);
          font-weight: 400;
          color: var(--color-dark);
          margin: 0;
          line-height: 1.2;
        }
        .cap-link {
          font-family: var(--font-body);
          font-size: var(--text-base);
          color: var(--color-dark);
          text-decoration: none;
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 2px;
          align-self: flex-start;
          transition: border-color 0.2s, color 0.2s;
        }
        .cap-link:hover {
          color: var(--color-dark);
          border-color: var(--color-dark);
        }
        .cap-event-link {
          font-family: var(--font-body);
          font-size: var(--text-base);
          color: var(--color-dark);
          text-decoration: none;
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 1px;
          font-weight: 300;
          line-height: 1.6;
          transition: border-color 0.2s, color 0.2s;
        }
        .cap-event-link:hover { border-color: var(--color-dark); }
        .cap-event-passed { color: var(--color-mid); }
        .cap-event-passed:hover { color: var(--color-mid); border-color: var(--color-subtle); }
        .cap-event-passed-tag { font-size: var(--text-xs); opacity: 0.6; }
        .cap-cta-link {
          font-family: var(--font-body);
          font-size: var(--text-base);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-mid);
          text-decoration: none;
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .cap-cta-link:hover {
          color: var(--color-dark);
          border-color: var(--color-dark);
        }
      `}</style>
    </main>
  );
}
