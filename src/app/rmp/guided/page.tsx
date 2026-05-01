"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function RmpGuided() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
          RMP⁺ Guided
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
          The foundation, in your own space
        </p>
      </section>

      {/* ── Section 1: No heading ── */}
      <section
        style={{
          padding: "4rem 1.5rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <p className="rg-label">Practice Without Borders</p>
          <p className="rg-italic-sub">
            Two decades of practice, distilled into something you can return to daily.
          </p>

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
          padding: "4rem 1.5rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div>
            <p className="rg-label" style={{ marginBottom: "0.5rem" }}>Inside the Platform</p>
            <h2 className="rg-section-heading">What You Get</h2>
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
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: How It Works ── */}
      <section
        style={{
          padding: "4rem 1.5rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
        }}
      >
        <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <div>
            <p className="rg-label" style={{ marginBottom: "0.5rem" }}>Phase Structure and Access</p>
            <h2 className="rg-section-heading">How It Works</h2>
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

          <blockquote
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
              fontWeight: 300,
              color: "var(--color-dark)",
              margin: "0.5rem 0 0",
              lineHeight: 1.45,
              borderLeft: "2px solid var(--color-copper)",
              paddingLeft: "1.5rem",
            }}
          >
            The practice unfolds in phases. Each one builds on what came before.
          </blockquote>
        </div>
      </section>

      {/* ── Section 4: First Wave + Waitlist Form ── */}
      <section
        style={{
          padding: "4rem 1.5rem 10rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
        }}
      >
        <div style={{ maxWidth: "560px", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "var(--color-dark)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              First Wave
            </h2>

            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                fontWeight: 300,
                color: "var(--color-dark)",
                margin: 0,
                lineHeight: 1.45,
              }}
            >
              A founding cohort. The beginning of something that will not stay small.
            </p>
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
              fontSize: "0.9375rem",
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
                fontSize: "1.25rem",
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
                    fontSize: "0.9375rem",
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
                    fontSize: "0.8125rem",
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
                    fontSize: "0.8125rem",
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
          padding: "6rem 1.5rem 8rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 300,
            color: "var(--color-dark)",
            margin: "0 0 2rem",
            lineHeight: 1.35,
          }}
        >
          Not sure where to begin?
        </p>
        <Link href="/rmp/starting-point" className="rg-cta-link">
          Find Your Starting Point
        </Link>
      </section>

      <style>{`
        .rg-body {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.8vw, 1.0625rem);
          line-height: 1.85;
          color: var(--color-dark);
          margin: 0;
          font-weight: 300;
        }
        .rg-label {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
        }
        .rg-italic-sub {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.125rem, 2vw, 1.375rem);
          font-weight: 300;
          color: var(--color-dark);
          margin: 0;
          line-height: 1.45;
        }
        .rg-section-heading {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 300;
          font-style: italic;
          color: var(--color-dark);
          margin: 0;
          line-height: 1.2;
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
          font-size: 0.875rem;
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
