"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EASE } from "@/components/animations";

type Status = "idle" | "submitting" | "success" | "error";

const features = [
  { title: "Sessions", body: "3 per week. Structured and fully programmed. Individual video for each exercise. Filmed in the Movement Ritual studio." },
  { title: "Content Delivery", body: "Dripped week by week. Each week unlocks as you progress. Keeps the practice moving forward. Prevents overwhelm." },
  { title: "Daily Ritual", body: "Daily movement practice. Activates and maintains base conditioning. Changes with each phase. Designed to be done every day." },
  { title: "Platform", body: "Everfit app. iOS and Android. Track sessions and progress. Add personal notes to movements." },
];

export default function RmpGuided() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

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
      <section className="hero-section">
        <div className="hero-content">
          <h1
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

      {/* ── Practice Without Borders ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>Practice Without Borders</h2>
          <h3 className="section-subheading">Two decades of practice, distilled into something you can return to daily.</h3>
          <p className="body-prose">
            Everything in RMP⁺ Guided was built by me. The sessions, the progressions, the Daily
            Ritual. Filmed in my studio, designed from the same methodology that runs through every
            tier of this practice. What you are accessing is not a generic program. It is a specific
            body of work developed over two decades of training, teaching, and refining.
          </p>
          <p className="body-prose">
            It is delivered digitally so that where you live does not determine whether you can
            practice. The work is self-guided. There are no live sessions, no group calls. What
            there is: fully programmed sessions, individual videos for every movement and exercise,
            and a Daily Ritual that is the foundation for each day.
          </p>
          <p className="body-prose">
            It asks consistency of you. That is the only requirement. The content is there. What
            you bring to it determines what you get from it.
          </p>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>What You Get</h2>
          <h3 className="section-subheading">Inside the Platform</h3>
          <div className="grid-2" style={{ maxWidth: "680px" }}>
            {features.map((item) => (
              <div key={item.title} className="rg-feature">
                <p className="section-subheading">{item.title}</p>
                <p className="body-prose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>How It Works</h2>
          <h3 className="section-subheading">Phase Structure and Access</h3>
          <p className="body-prose">
            After purchase you will receive access to the app platform and be onboarded into the
            current phase. Content is released week by week. Each session becomes available as you
            move through the program rather than all at once. This structure is intentional. It
            supports the consistency the practice is built around.
          </p>
          <p className="body-prose">
            Phases run for approximately three months. Each phase has a central theme that shapes
            the material without making it rigid. You do not need to know what that theme is before
            you begin. You will feel it as the weeks progress.
          </p>
          <p className="body-prose">
            A new full phase begins July 1st. Those who join before then enter through an
            orientation period that prepares the body for the practice before the full phase begins.
          </p>
          <div className="blockquote-copper">
            <blockquote>The practice unfolds in phases. Each one builds on what came before.</blockquote>
          </div>
        </div>
      </section>

      {/* ── First Wave ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>First Wave</h2>
          <h3 className="section-subheading">A founding cohort</h3>
          <p className="body-prose">
            RMP⁺ Guided launches summer 2026. This is the first time this practice has been made
            available in a fully digital format. First Wave marks the beginning.
          </p>
          <p className="body-prose">
            First Wave members enter at $44/month through June, then $88/month from July onward.
            That rate is held permanently for anyone who remains continuously subscribed. When the
            rate moves, it moves only for those who join after.
          </p>
          <p className="body-prose">One live virtual session with Grilo Preto, exclusively for First Wave members.</p>
          <p className="body-prose">The waitlist opens May 1st. When it fills, it closes.</p>
          <p className="italic-callout">
            You will be contacted when the waitlist opens on May 1st. No other emails before then.
          </p>

          {status === "success" ? (
            <p className="italic-callout">You&rsquo;re on the list. We&rsquo;ll be in touch before May 1st.</p>
          ) : (
            <form onSubmit={handleSubmit} className="rg-form">
              <div className="rg-form-row">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "submitting"}
                  className="rg-input"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rg-submit"
                  style={{ opacity: status === "submitting" ? 0.6 : 1 }}
                >
                  {status === "submitting" ? "Sending…" : "Join the Waitlist"}
                </button>
              </div>
              {status === "error" && (
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-accent)", margin: 0 }}>
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-section" style={{ textAlign: "center" }}>
        <p className="italic-callout">Not sure where to begin?</p>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/rmp/starting-point" className="link-cta">Find Your Starting Point</Link>
        </div>
      </section>

      <style>{`
        .rg-feature { display: flex; flex-direction: column; gap: 0.625rem; }
        .rg-form { display: flex; flex-direction: column; gap: 1rem; }
        .rg-form-row { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .rg-input {
          font-family: var(--font-body);
          font-size: var(--text-base);
          color: var(--color-text-primary);
          background: transparent;
          border: 1px solid var(--color-border);
          padding: 0.75rem 1rem;
          outline: none;
          flex: 1 1 240px;
          min-width: 0;
          transition: border-color 0.2s;
        }
        .rg-input:focus { border-color: var(--color-text-secondary); }
        .rg-submit {
          font-family: var(--font-label);
          font-size: var(--text-xs);
          letter-spacing: var(--tracking-widest);
          text-transform: uppercase;
          color: var(--color-text-inverse);
          background: var(--color-text-primary);
          border: 1px solid var(--color-text-primary);
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
      `}</style>
    </main>
  );
}
