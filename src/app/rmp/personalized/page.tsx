"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { EASE, REVEAL_TR, useReveal, StaggerItem } from "@/components/animations";

const formatItems = [
  {
    title: "Format",
    body: "1:1 or small group (2 max). Weekly or biweekly sessions. In-person in Denver or remote.",
  },
  {
    title: "Platform",
    body: "RMP⁺ Guided included. Bespoke curriculum map. Session tracking. Direct communication.",
  },
  {
    title: "Remote",
    body: "Video feedback via app. Film your sessions. Receive direct feedback from me.",
  },
  {
    title: "Pricing",
    body: "Starting at $333/month. Remote and in-person rates differ. Structured in phases.",
  },
];

export default function RmpPersonalized() {
  const [loaded, setLoaded] = useState(false);

  const s1Ref = useRef<HTMLDivElement>(null);
  const bqRef = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);
  const s4Ref = useRef<HTMLDivElement>(null);
  const s5Ref = useRef<HTMLDivElement>(null);
  const s6Ref = useRef<HTMLDivElement>(null);

  const r1 = useReveal(s1Ref);
  const rBq = useReveal(bqRef);
  const r2 = useReveal(s2Ref);
  const r3 = useReveal(s3Ref);
  const r4 = useReveal(s4Ref);
  const r5 = useReveal(s5Ref);
  const r6 = useReveal(s6Ref);

  useEffect(() => { setLoaded(true); }, []);

  return (
    <main>

      {/* ── Hero ── */}
      <section className="pp-hero">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="pp-hero-img"
        />
        <div className="pp-hero-scrim" />
        <div className="pp-hero-content">
          <p
            className="pp-hero-eyebrow"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.1s, transform 0.8s ${EASE} 0.1s`,
            }}
          >
            Ritual Movement Practice
          </p>
          <h1
            className="pp-hero-h1"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.9s ${EASE} 0.35s, transform 0.9s ${EASE} 0.35s`,
            }}
          >
            RMP⁺ Personalized
          </h1>
          <p
            className="pp-hero-blurb"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.6s, transform 0.8s ${EASE} 0.6s`,
            }}
          >
            Private. Bespoke. Built entirely around you.
          </p>
        </div>
      </section>

      {/* ── Section 1: No heading ── */}
      <section
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem max(2rem, 5vw)",
        }}
      >
        <div
          ref={s1Ref}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            opacity: r1 ? 1 : 0,
            transform: r1 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2 className="pp-section-heading">Who This Is For</h2>
          <h3 className="pp-section-subheading">Capable in almost every context</h3>
          <p className="pp-italic-sub">
            Capable in almost every context. And still carrying something that has not yet been
            resolved.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="pp-body">
              You have built things. Developed yourself in real ways. Moved through difficulty and
              come out the other side. And underneath all of that there is a version of yourself that
              has not yet been fully inhabited. Not because you have not tried. You have tried harder
              than most people around you will ever know.
            </p>
            <p className="pp-body">
              What you are looking for is not another method to follow. It is a practice that meets
              you specifically. Your patterns. Your history. Your body. The particular way your
              intelligence has become both your greatest asset and the thing that keeps you circling.
            </p>
          </div>

          <div
            ref={bqRef}
            style={{
              position: "relative",
              margin: "0.5rem 0 0",
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
                fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)",
                fontWeight: 300,
                color: "var(--color-dark)",
                margin: 0,
                lineHeight: 1.45,
              }}
            >
              &ldquo;You are not looking to become someone different. You are looking to stop being governed
              by standards and definitions that were never yours to begin with.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Work ── */}
      <section
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem max(2rem, 5vw)",
        }}
      >
        <div
          ref={s2Ref}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            opacity: r2 ? 1 : 0,
            transform: r2 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h2 className="pp-section-heading">The Work</h2>
            <h3 className="pp-section-subheading">What This Actually Is</h3>
          </div>
          <p className="pp-italic-sub">
            A private engagement built from the ground up. Not a program. A path.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="pp-body">
              RMP⁺ Personalized is a 1:1 engagement, or small group of two, built entirely around
              your patterns, your history, and where you intend to go. It uses the same platform and
              foundation as RMP⁺ Guided, and goes further. Your curriculum is not drawn from a
              general phase map. It is built for you specifically and tracked in real time.
            </p>
            <p className="pp-body">
              We work through the body because that is where the patterns actually live. The way you
              move under pressure, the way you hold yourself in uncertainty, where you brace and
              where you go soft. These are not separate from how you operate in your work, your
              relationships, your decisions. Making them visible changes them.
            </p>
            <p className="pp-body">
              What shifts over time is difficult to put simply. People describe making decisions
              differently. Inhabiting their own presence differently. A quieter relationship with
              themselves that does not depend on external conditions to exist.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: What It Asks ── */}
      <section
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem max(2rem, 5vw)",
        }}
      >
        <div
          ref={s3Ref}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            opacity: r3 ? 1 : 0,
            transform: r3 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h2 className="pp-section-heading">What It Asks</h2>
            <h3 className="pp-section-subheading">This Will Not Stay Comfortable</h3>
          </div>
          <p className="pp-italic-sub">
            The practice meets you where you are honest. That is rarely where you are comfortable.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="pp-body">
              This will not stay comfortable with you when comfort is what is keeping you in place.
              The first thing most people encounter is exposure. Something the practice asks that
              performing cannot answer.
            </p>
            <p className="pp-body">
              For one person, at the end of her session she was in tears. Not from physical pain but
              from a realization that she had never moved without being watched, even by herself. The
              usual tools did not work. The familiar performance had nowhere to go.
            </p>
            <p className="pp-body">
              She stayed. She did the work. And she brought the people she loves.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: How It Works ── */}
      <section
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem max(2rem, 5vw)",
        }}
      >
        <div
          ref={s4Ref}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            opacity: r4 ? 1 : 0,
            transform: r4 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h2 className="pp-section-heading">How It Works</h2>
            <h3 className="pp-section-subheading">Format, Frequency, and Access</h3>
          </div>
          <p className="pp-italic-sub">
            In-person in Denver or remote. Weekly or biweekly. Directly with me.
          </p>

          <div className="pp-grid-2">
            {formatItems.map((item, i) => (
              <StaggerItem key={item.title} index={i}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--color-dark)",
                      margin: 0,
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      color: "var(--color-dark)",
                      margin: 0,
                      fontWeight: 300,
                      opacity: 0.75,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Before You Begin ── */}
      <section
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem max(2rem, 5vw)",
        }}
      >
        <div
          ref={s5Ref}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            opacity: r5 ? 1 : 0,
            transform: r5 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h2 className="pp-section-heading">Before You Begin</h2>
            <h3 className="pp-section-subheading">A Recommended Starting Point</h3>
          </div>
          <p className="pp-italic-sub">
            One completed phase of RMP⁺ Guided or RMP⁺ In-Person is recommended before applying.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="pp-body">
              The private work builds from what the foundation practice begins to surface. Those who
              arrive at Personalized having already moved through a phase understand what this
              practice can do. The 1:1 work takes it further and makes it entirely yours.
            </p>
            <p className="pp-body">
              If you have significant physical limitations or medical conditions, reach out before
              applying so we can determine the right path for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "6rem max(2rem, 5vw)",
          textAlign: "center",
        }}
      >
        <div
          ref={s6Ref}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            opacity: r6 ? 1 : 0,
            transform: r6 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 300,
              color: "var(--color-dark)",
              margin: 0,
              lineHeight: 1.35,
            }}
          >
            Not sure where to begin?
          </p>
          <Link href="/rmp/starting-point" className="pp-cta-link">
            Find Your Starting Point
          </Link>
        </div>
      </section>

      <style>{`
        .pp-hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }
        .pp-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 0;
        }
        .pp-hero-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to bottom, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.72) 100%);
          pointer-events: none;
        }
        .pp-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 0 max(2rem, 5vw) 6rem;
          max-width: 680px;
        }
        .pp-hero-eyebrow {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-copper);
          margin: 0;
        }
        .pp-hero-h1 {
          font-family: var(--font-hero);
          font-size: clamp(4rem, 7.5vw, 8rem);
          font-weight: 700;
          font-style: italic;
          line-height: 0.95;
          color: #f0ebe3;
          margin: 0;
        }
        .pp-hero-blurb {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(240, 235, 227, 0.85);
          margin: 0;
          max-width: 42ch;
          font-weight: 300;
        }
        .pp-body {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.8vw, 1.0625rem);
          line-height: 1.85;
          color: var(--color-dark);
          margin: 0;
          font-weight: 300;
        }
        .pp-label {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
        }
        .pp-section-heading {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 600;
          font-style: italic;
          color: var(--color-dark);
          margin: 0;
          line-height: 1.2;
        }
        .pp-section-subheading {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
          font-weight: 500;
        }
        .pp-italic-sub {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.125rem, 2vw, 1.375rem);
          font-weight: 300;
          color: var(--color-dark);
          margin: 0;
          line-height: 1.45;
        }
        .pp-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem 4rem;
          max-width: 680px;
        }
        @media (max-width: 560px) {
          .pp-grid-2 { grid-template-columns: 1fr; gap: 2rem; }
        }
        .pp-cta-link {
          font-family: var(--font-body);
          font-size: 0.875rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-mid);
          text-decoration: none;
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .pp-cta-link:hover {
          color: var(--color-dark);
          border-color: var(--color-dark);
        }
      `}</style>
    </main>
  );
}
