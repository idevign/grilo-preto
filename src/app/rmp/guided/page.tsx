"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { EASE, REVEAL_TR, useReveal, StaggerItem } from "@/components/animations";

type Status = "idle" | "submitting" | "success" | "error";

export default function RmpGuided() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const s1Ref = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const bqRef = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);
  const s4Ref = useRef<HTMLDivElement>(null);
  const s5Ref = useRef<HTMLDivElement>(null);

  const r1 = useReveal(s1Ref);
  const r2 = useReveal(s2Ref);
  const rBq = useReveal(bqRef);
  const r3 = useReveal(s3Ref);
  const r4 = useReveal(s4Ref);
  const r5 = useReveal(s5Ref);

  useEffect(() => { setLoaded(true); }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <main>

      {/* ── Hero ── */}
      <section className="rg-hero">
        <div className="rg-hero-content">
          <h1
            className="rg-hero-h1"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.9s ${EASE} 0.1s, transform 0.9s ${EASE} 0.1s`,
            }}
          >
            RMP⁺ Guided
          </h1>
          <h2
            className="hero-eyebrow"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.35s, transform 0.8s ${EASE} 0.35s`,
            }}
          >
            Ritual Movement Practice
          </h2>
          <p
            className="hero-blurb"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.6s, transform 0.8s ${EASE} 0.6s`,
            }}
          >
            The foundation, in your own space.
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
            gap: "1.75rem",
            opacity: r1 ? 1 : 0,
            transform: r1 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2 className="rg-section-heading">Practice Without Borders</h2>
          <h3 className="rg-section-subheading">Two decades of practice, distilled into something you can return to daily.</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="rg-body">
              Everything in RMP⁺ Guided was built by me. The sessions, the progressions, the Daily
              Ritual. Filmed in my studio, designed from the same methodology that runs through every
              tier of this practice. What you are accessing is not a generic program. It is a specific
              body of work developed over two decades of training, teaching, and refining.
            </p>
            <p className="rg-body">
              It is delivered digitally so that where you live does not determine whether you can
              practice. The work is self-guided. There are no live sessions, no group calls. What
              there is: fully programmed sessions, individual videos for every movement and exercise,
              and a Daily Ritual that is the foundation for each day.
            </p>
            <p className="rg-body">
              It asks consistency of you. That is the only requirement. The content is there. What
              you bring to it determines what you get from it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: What You Get ── */}
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
            gap: "2.5rem",
            opacity: r2 ? 1 : 0,
            transform: r2 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h2 className="rg-section-heading">What You Get</h2>
            <h3 className="rg-section-subheading">Inside the Platform</h3>
          </div>

          <div className="rg-grid-2">
            {[
              {
                title: "Sessions",
                body: "3 per week. Structured and fully programmed. Individual video for each exercise. Filmed in the Movement Ritual studio.",
              },
              {
                title: "Content Delivery",
                body: "Dripped week by week. Each week unlocks as you progress. Keeps the practice moving forward. Prevents overwhelm.",
              },
              {
                title: "Daily Ritual",
                body: "Daily movement practice. Activates and maintains base conditioning. Changes with each phase. Designed to be done every day.",
              },
              {
                title: "Platform",
                body: "Everfit app. iOS and Android. Track sessions and progress. Add personal notes to movements.",
              },
            ].map((item, i) => (
              <StaggerItem key={item.title} index={i}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
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
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: How It Works ── */}
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
            transform: r3 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h2 className="rg-section-heading">How It Works</h2>
            <h3 className="rg-section-subheading">Phase Structure and Access</h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="rg-body">
              After purchase you will receive access to the app platform and be onboarded into the
              current phase. Content is released week by week. Each session becomes available as you
              move through the program rather than all at once. This structure is intentional. It
              supports the consistency the practice is built around.
            </p>
            <p className="rg-body">
              Phases run for approximately three months. Each phase has a central theme that shapes
              the material without making it rigid. You do not need to know what that theme is before
              you begin. You will feel it as the weeks progress.
            </p>
            <p className="rg-body">
              A new full phase begins July 1st. Those who join before then enter through an
              orientation period that prepares the body for the practice before the full phase begins.
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
                fontSize: "clamp(var(--text-base), 2vw, var(--text-md))",
                fontWeight: 300,
                color: "var(--color-dark)",
                margin: 0,
                lineHeight: 1.45,
              }}
            >
              The practice unfolds in phases. Each one builds on what came before.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Section 4: First Wave + Waitlist Form ── */}
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
            gap: "2.5rem",
            opacity: r4 ? 1 : 0,
            transform: r4 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h2 className="rg-section-heading">First Wave</h2>
            <h3 className="rg-section-subheading">A founding cohort</h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="rg-body">
              RMP⁺ Guided launches summer 2026. This is the first time this practice has been made
              available in a fully digital format. First Wave marks the beginning.
            </p>
            <p className="rg-body">
              First Wave members enter at $44/month through June, then $88/month from July onward.
              That rate is held permanently for anyone who remains continuously subscribed. When the
              rate moves, it moves only for those who join after.
            </p>
            <p className="rg-body">
              One live virtual session with Grilo Preto, exclusively for First Wave members.
            </p>
            <p className="rg-body">
              The waitlist opens May 1st. When it fills, it closes.
            </p>
          </div>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "var(--text-base)",
              color: "var(--color-mid)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            You will be contacted when the waitlist opens on May 1st. No other emails before then.
          </p>

          {/* Waitlist form */}
          {status === "success" ? (
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "var(--text-md)",
                fontWeight: 300,
                color: "var(--color-dark)",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              You&rsquo;re on the list. We&rsquo;ll be in touch before May 1st.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "submitting"}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-base)",
                    color: "var(--color-dark)",
                    backgroundColor: "transparent",
                    border: "1px solid var(--color-subtle)",
                    padding: "0.75rem 1rem",
                    outline: "none",
                    flex: "1 1 240px",
                    minWidth: 0,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-mid)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-subtle)")}
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xs)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-base)",
                    backgroundColor: "var(--color-dark)",
                    border: "1px solid var(--color-dark)",
                    padding: "0.75rem 1.5rem",
                    cursor: status === "submitting" ? "default" : "pointer",
                    opacity: status === "submitting" ? 0.6 : 1,
                    transition: "opacity 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {status === "submitting" ? "Sending…" : "Join the Waitlist"}
                </button>
              </div>

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-copper)",
                    margin: 0,
                  }}
                >
                  {errorMessage}
                </p>
              )}
            </form>
          )}
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
          padding: "6rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))",
          textAlign: "center",
        }}
      >
        <div
          ref={s5Ref}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            opacity: r5 ? 1 : 0,
            transform: r5 ? "none" : "translateY(24px)",
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
              margin: 0,
              lineHeight: 1.35,
            }}
          >
            Not sure where to begin?
          </p>
          <Link href="/rmp/starting-point" className="rg-cta-link">
            Find Your Starting Point
          </Link>
        </div>
      </section>

      <style>{`
        .rg-hero {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          overflow: hidden;
        }
        .rg-hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 6rem 2rem 6rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem));
          max-width: 680px;
        }
        .rg-hero-h1 {
          font-family: var(--font-hero);
          font-size: clamp(var(--text-2xl), 7.5vw, var(--text-4xl));
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: var(--tracking-tight);
          color: var(--color-text-primary);
          margin: 0;
        }
        .rg-body {
          font-family: var(--font-body);
          font-size: var(--text-base);
          line-height: 1.85;
          color: var(--color-dark);
          margin: 0;
          font-weight: 300;
        }
        .rg-label {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
        }
        .rg-italic-sub {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(var(--text-base), 2vw, var(--text-md));
          font-weight: 300;
          color: var(--color-dark);
          margin: 0;
          line-height: 1.45;
        }
        .rg-section-heading {
          font-family: var(--font-display);
          font-size: clamp(var(--text-lg), 3vw, var(--text-xl));
          font-weight: 400;
          color: var(--color-dark);
          margin: 0;
          line-height: 1.2;
          letter-spacing: var(--tracking-tight);
        }
        .rg-section-subheading {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
          font-weight: 500;
        }
        .rg-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem 4rem;
          max-width: 680px;
        }
        @media (max-width: 560px) {
          .rg-grid-2 { grid-template-columns: 1fr; gap: 2rem; }
        }
        .rg-cta-link {
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
        .rg-cta-link:hover {
          color: var(--color-dark);
          border-color: var(--color-dark);
        }
      `}</style>
    </main>
  );
}
