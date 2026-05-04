"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { EASE, REVEAL_TR, useReveal, StaggerItem } from "@/components/animations";

export default function RmpHome() {
  const [loaded, setLoaded] = useState(false);

  const s1Ref = useRef<HTMLDivElement>(null);
  const bqRef = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);
  const s4Ref = useRef<HTMLDivElement>(null);
  const s5Ref = useRef<HTMLDivElement>(null);
  const s6Ref = useRef<HTMLDivElement>(null);
  const s7Ref = useRef<HTMLDivElement>(null);
  const s8Ref = useRef<HTMLDivElement>(null);
  const s9Ref = useRef<HTMLDivElement>(null);

  const r1 = useReveal(s1Ref);
  const rBq = useReveal(bqRef);
  const r2 = useReveal(s2Ref);
  const r3 = useReveal(s3Ref);
  const r4 = useReveal(s4Ref);
  const r5 = useReveal(s5Ref);
  const r6 = useReveal(s6Ref);
  const r7 = useReveal(s7Ref);
  const r8 = useReveal(s8Ref);
  const r9 = useReveal(s9Ref);

  useEffect(() => { setLoaded(true); }, []);

  return (
    <main>

      {/* Hero */}
      <section className="rmp-hero">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="rmp-hero-img"
        />
        <div className="rmp-hero-scrim" />
        <div className="rmp-hero-content">
          <h1
            className="rmp-hero-h1"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.9s ${EASE} 0.1s, transform 0.9s ${EASE} 0.1s`,
            }}
          >
            Ritual
          </h1>
          <h2
            className="hero-eyebrow"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.35s, transform 0.8s ${EASE} 0.35s`,
            }}
          >
            Movement Practice
          </h2>
          <p
            className="hero-blurb"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.6s, transform 0.8s ${EASE} 0.6s`,
            }}
          >
            A physical-first path to self mastery.
          </p>
        </div>
      </section>

      {/* Section 1: No heading */}
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
            gap: "1.25rem",
            opacity: r1 ? 1 : 0,
            transform: r1 ? "translateY(0)" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2 className="rmp-section-heading">The Practice</h2>
          <h3 className="rmp-section-subheading">What you will find here</h3>
          <p className="rmp-body">
            People arrive here expecting a workout. What they find goes further than that.
          </p>
          <p className="rmp-body">
            The practice is physically rigorous. It is also introspective in a way that most physical
            contexts never ask for, and that combination is not incidental. The design asks you to be
            present in your body while being honest about what you find there. For most people, those
            two things have never happened at the same time.
          </p>
          <p className="rmp-body">
            Effort is familiar. This practice works with something less practiced. Attention. The
            quality of it, the direction of it, what you do when it becomes uncomfortable to keep it
            in one place.
          </p>
          <p className="rmp-body">
            That is what changes here.
          </p>

          {/* Blockquote with animated copper line */}
          <div
            ref={bqRef}
            style={{ position: "relative", marginTop: "1.25rem" }}
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
                fontSize: "var(--text-md)",
                fontWeight: 300,
                color: "var(--color-dark)",
                margin: 0,
                lineHeight: 1.45,
                paddingLeft: "1.5rem",
              }}
            >
              "The way you move reveals the way you live. Most people find that confronting at first.
              The right person finds it clarifying."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section 2: What Develops */}
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
            transform: r2 ? "translateY(0)" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2 className="rmp-section-heading">What Develops</h2>
          <h3 className="rmp-section-subheading">What Develops</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="rmp-body">
              This practice develops the whole person through the body. Not the body in isolation
              from everything else, but as one integrated system.
            </p>
            <p className="rmp-body">
              How you move under pressure, how you hold yourself in uncertainty, where you brace and
              where you yield. These show up the same way in how you operate in your work, your
              relationships, your decisions, your life. The practice makes those patterns visible.
              Visible patterns can be worked with. That is the opening.
            </p>
            <p className="rmp-body">
              Strength, physical skill, and aesthetic quality are byproducts of consistent honest
              practice. They are reference points, not goals. The deeper development is an embodied
              state of being that is internally governed rather than externally directed. Self mastery
              not as destination but as practice.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: On Ritual */}
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
            gap: "1.75rem",
            opacity: r3 ? 1 : 0,
            transform: r3 ? "translateY(0)" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2 className="rmp-section-heading">On Ritual</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="rmp-body">
              I hold this practice as ritual. Structured repetition done with reverence, over time.
              What ritual produces is not dramatic. It is cumulative.
            </p>
            <p className="rmp-body">
              Ritual asks you to return, again and again, with focused attention and conscious
              intention. In doing so it reveals what you did not see before. Patterns of tension,
              avoidance, strength, and clarity that were always there. Hidden by moving too quickly
              through your own life to notice.
            </p>
            <p className="rmp-body">
              Giving you the ability to liberate yourself from external definitions. To reclaim and
              refine the strength, conditioning, and qualities that were always innate.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: The Structure */}
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
          ref={s4Ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            opacity: r4 ? 1 : 0,
            transform: r4 ? "translateY(0)" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2 className="rmp-section-heading">The Structure</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="rmp-body">
              The curriculum unfolds in three-month phases. Each built around four simultaneous areas
              of study. Not sequentially. Together. Each phase has a central theme that gives the work
              direction without making it rigid.
            </p>
            <p className="rmp-body">
              This is not a checklist. It is a map. The distinction matters because one produces
              compliance and the other produces understanding.
            </p>
          </div>

          <div className="rmp-curriculum-grid">
            {[
              {
                title: "Expressive skill",
                body: "A primary movement quality that gives each phase its character and direction.",
              },
              {
                title: "Mobility",
                body: "Range and tissue work that opens the body toward the phase direction.",
              },
              {
                title: "Physical capacity",
                body: "Conditioning and strength work that supports what the phase asks of the body.",
              },
              {
                title: "Articulation",
                body: "Refined coordination that integrates the other three areas into something coherent.",
              },
            ].map((item, i) => (
              <StaggerItem
                key={item.title}
                index={i}
                style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xs)",
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
                    fontSize: "var(--text-base)",
                    lineHeight: 1.7,
                    color: "var(--color-dark)",
                    margin: 0,
                    fontWeight: 300,
                    opacity: 0.75,
                  }}
                >
                  {item.body}
                </p>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: The Paths */}
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
          ref={s5Ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            opacity: r5 ? 1 : 0,
            transform: r5 ? "translateY(0)" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2 className="rmp-section-heading">The Paths</h2>

          <div className="rmp-paths-grid">
            {[
              {
                title: "RMP⁺ Guided",
                description:
                  "The foundation. Available anywhere. Three sessions per week plus a daily movement ritual. $88/month. First Wave founding rate $44/month.",
                href: "/rmp/guided",
              },
              {
                title: "RMP⁺ In-Person",
                description:
                  "Weekly group sessions at Movement Ritual in Denver. Monday and Wednesday at noon. Includes RMP⁺ Guided. $222/month recommended contribution.",
                href: "/rmp/in-person",
              },
              {
                title: "RMP⁺ Personalized",
                description:
                  "A bespoke curriculum built entirely around you. Weekly or biweekly sessions in-person or remote. Starting at $333/month.",
                href: "/rmp/personalized",
              },
            ].map((path, i) => (
              <StaggerItem
                key={path.href}
                index={i}
                style={{
                  backgroundColor: "var(--color-base)",
                  border: "1px solid var(--color-subtle)",
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  minHeight: "240px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(var(--text-md), 2vw, var(--text-lg))",
                    fontWeight: 400,
                    color: "var(--color-dark)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {path.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-base)",
                    color: "var(--color-dark)",
                    margin: 0,
                    lineHeight: 1.7,
                    opacity: 0.75,
                    fontWeight: 300,
                    flexGrow: 1,
                  }}
                >
                  {path.description}
                </p>
                <Link href={path.href} className="rmp-card-link">
                  Explore
                </Link>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: A Brief Origin */}
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
          ref={s6Ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            opacity: r6 ? 1 : 0,
            transform: r6 ? "translateY(0)" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2 className="rmp-section-heading">A Brief Origin</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="rmp-body">
              I spent years building a career in software development and design. Attaining
              conventional success yet feeling increasingly further from myself. Capoeira found me and
              broke something open. What followed was two decades of direct study across capoeira,
              gymnastic strength training, somatics, and movement, including training with Ido Portal
              and his senior students.
            </p>
            <p className="rmp-body">
              What I offer is the synthesis of all of it. Not a fitness method. What I found when I
              stopped optimizing and thinking my way through my own life and started moving and
              living it.
            </p>
          </div>

          <a
            href="https://grilopreto.com/about"
            className="rmp-text-link"
          >
            Read the full story
          </a>
        </div>
      </section>

      {/* Section 7: What It Is */}
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
          ref={s7Ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            opacity: r7 ? 1 : 0,
            transform: r7 ? "translateY(0)" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2 className="rmp-section-heading">What It Is</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="rmp-body">
              Ritual Movement Practice is a physical-first methodology for developing the whole
              person. Not the body in isolation from everything else, but as one integrated system.
              The curriculum unfolds in three-month phases, each organized around four simultaneous
              areas of study, working toward a central theme that gives the work direction without
              making it rigid.
            </p>
            <p className="rmp-body">
              The three paths, Guided, In-Person, and Personalized, are different ways of entering
              the same work. The foundation is the same across all three.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: What It Is For */}
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
          ref={s8Ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            opacity: r8 ? 1 : 0,
            transform: r8 ? "translateY(0)" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2 className="rmp-section-heading">What It Is For</h2>
          <p className="rmp-body">
            People who are ready to be honest about how they move and what that reveals. People who
            have tried other things and found them useful but incomplete. People who want to develop
            something real over time rather than optimize a number on a screen.
          </p>
        </div>
      </section>

      {/* Section 9: CTA */}
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
          ref={s9Ref}
          style={{
            opacity: r9 ? 1 : 0,
            transform: r9 ? "translateY(0)" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(var(--text-md), 3vw, var(--text-lg))",
              fontWeight: 300,
              color: "var(--color-dark)",
              margin: "0 0 2rem",
              lineHeight: 1.35,
            }}
          >
            Not sure where to begin?
          </p>
          <a
            href="https://grilopreto.com/rmp/starting-point"
            className="rmp-cta-link"
          >
            Find Your Starting Point
          </a>
        </div>
      </section>

      <style>{`
        .rmp-hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }
        .rmp-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 0;
        }
        .rmp-hero-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to bottom, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.72) 100%);
          pointer-events: none;
        }
        .rmp-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 0 2rem 6rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem));
          max-width: 680px;
        }
        .rmp-hero-h1 {
          font-family: var(--font-hero);
          font-size: clamp(var(--text-2xl), 7.5vw, var(--text-4xl));
          font-weight: 700;
          font-style: italic;
          line-height: 0.95;
          color: #f0ebe3;
          margin: 0;
        }
        .rmp-body {
          font-family: var(--font-body);
          font-size: var(--text-base);
          line-height: 1.85;
          color: var(--color-dark);
          margin: 0;
          font-weight: 300;
        }
        .rmp-section-label {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
          display: none;
        }
        .rmp-section-heading {
          font-family: var(--font-display);
          font-size: clamp(var(--text-lg), 3vw, var(--text-xl));
          font-weight: 600;
          font-style: italic;
          color: var(--color-dark);
          margin: 0;
          line-height: 1.2;
        }
        .rmp-section-subheading {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
          font-weight: 500;
        }
        .rmp-curriculum-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem 4rem;
          margin-top: 1rem;
          max-width: 680px;
        }
        @media (max-width: 560px) {
          .rmp-curriculum-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
        .rmp-paths-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .rmp-paths-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .rmp-paths-grid { grid-template-columns: 1fr; }
        }
        .rmp-card-link {
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
        .rmp-card-link:hover { opacity: 1; }
        .rmp-text-link {
          font-family: var(--font-body);
          font-size: var(--text-base);
          color: var(--color-dark);
          text-decoration: none;
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 2px;
          align-self: flex-start;
          transition: border-color 0.2s;
        }
        .rmp-text-link:hover { border-color: var(--color-dark); }
        .rmp-cta-link {
          font-family: var(--font-body);
          font-size: var(--text-base);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-mid);
          text-decoration: none;
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .rmp-cta-link:hover {
          color: var(--color-dark);
          border-color: var(--color-dark);
        }
      `}</style>
    </main>
  );
}
