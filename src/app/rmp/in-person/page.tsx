"use client";

import { useEffect, useRef, useState } from "react";
import { EASE, REVEAL_TR, useReveal, StaggerItem } from "@/components/animations";

type LogisticsItem = {
  title: string;
  body: string | null;
  list?: string[];
  link: { text: string; href: string } | null;
  highlight?: boolean;
};

const logistics: LogisticsItem[] = [
  {
    title: "Days and Time",
    body: "Monday and Wednesday. 12:00pm — 1:15pm. Doors open at 11:50am. Collective start at 12:10pm.",
    link: null,
  },
  {
    title: "Membership",
    body: "$222/month recommended contribution. One phase commitment (3 months). Fellowships available.",
    link: null,
  },
  {
    title: "What to Bring",
    body: "A curious mind. Comfortable clothing you can move and stretch in. Barefoot or minimal shoes. Water.",
    link: null,
  },
  {
    title: "Location",
    body: "910 Santa Fe Dr, Studio 8. Denver, CO 80204. 910 Arts courtyard. Next to the coffee shop.",
    link: null,
  },
  {
    title: "Includes",
    body: null,
    list: ["RMP⁺ Guided", "Full phase curriculum", "Daily Ritual", "Group forum"],
    link: null,
  },
  {
    title: "Your Invite",
    body: "Get your invite by finding your starting point. Available to those local to Denver, CO and visiting guests of existing members.",
    link: { text: "Find Your Starting Point", href: "/rmp/starting-point" },
    highlight: true,
  },
];

const cultureItems = [
  {
    title: "Attendance",
    body: "Showing up is part of the agreement. Planned absences communicated in advance are understood. Cancellations driven by motivation are not. The practice is designed to be returned to especially when it feels hard to.",
  },
  {
    title: "Progress",
    body: "Members demonstrate development across at least one area over a phase. Progress may be visible or subtle. Maintenance and recovery phases are valid.",
  },
  {
    title: "Effort",
    body: "Effort is measured by the willingness to show up fully in the process. Attentiveness, intention, and openness to feedback. Output alone is not the measure.",
  },
  {
    title: "Confidentiality",
    body: "What is shared within the practice stays within the group. This is what makes the space safe enough for real work.",
  },
];

const faqs = [
  {
    q: "Do I need prior movement experience?",
    a: "No. What matters more is curiosity, a willingness to be challenged, and genuine interest in depth. The self-assessment will help point you in the right direction to start.",
  },
  {
    q: "What if I travel frequently or have an unpredictable schedule?",
    a: "The attendance expectation is real. If your schedule is consistently unpredictable, RMP⁺ Guided is likely a better starting point. Members who travel can access the curriculum remotely via the app during planned absences.",
  },
  {
    q: "Can I join mid-phase?",
    a: "Yes. You will be integrated into the current material with individual guidance. If you prefer to begin at a phase start, that can be arranged.",
  },
  {
    q: "What is a fellowship?",
    a: "Fellowships are available for the right candidate when financial access is a barrier. Reach out directly to discuss.",
  },
  {
    q: "What happens after the first session?",
    a: "If it feels right for both of us, you will be onboarded through Everfit and begin the membership commitment from the next session or phase start.",
  },
];

export default function RmpInPerson() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  const s1Ref = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);
  const s4Ref = useRef<HTMLDivElement>(null);
  const s5Ref = useRef<HTMLDivElement>(null);
  const s6Ref = useRef<HTMLDivElement>(null);
  const s7Ref = useRef<HTMLDivElement>(null);

  const r1 = useReveal(s1Ref);
  const r2 = useReveal(s2Ref);
  const r3 = useReveal(s3Ref);
  const r4 = useReveal(s4Ref);
  const r5 = useReveal(s5Ref);
  const r6 = useReveal(s6Ref);
  const r7 = useReveal(s7Ref);

  useEffect(() => { setLoaded(true); }, []);

  return (
    <main>

      {/* ── Hero ── */}
      <section className="ip-hero">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="ip-hero-img"
        />
        <div className="ip-hero-scrim" />
        <div className="ip-hero-content">
          <p
            className="ip-hero-eyebrow"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.1s, transform 0.8s ${EASE} 0.1s`,
            }}
          >
            Ritual Movement Practice
          </p>
          <h1
            className="ip-hero-h1"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.9s ${EASE} 0.35s, transform 0.9s ${EASE} 0.35s`,
            }}
          >
            RMP⁺ In-Person
          </h1>
          <p
            className="ip-hero-blurb"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.6s, transform 0.8s ${EASE} 0.6s`,
            }}
          >
            In-person. Denver. Monday and Wednesday at noon.
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
          <h2 className="ip-section-heading">The Practice</h2>
          <h3 className="ip-section-subheading">Being in collective practice</h3>
          <p className="ip-italic-sub">
            This is not a class you drop into. It is a practice you use to explore and refine who
            you are over time.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="ip-body">
              The group sessions are where the curriculum becomes lived experience. The same material
              available through RMP⁺ Guided is present here, and something is added that cannot be
              replicated alone. What happens between people in a shared physical space changes what
              is possible inside it.
            </p>
            <p className="ip-body">
              Sessions move through a consistent structure. One that carries the work from
              preparation through to physical depth and collective exploration. The structure holds.
              What fills it shifts based on the phase, the theme, and the people present on any
              given day.
            </p>
            <p className="ip-body">
              The space is invite-only. The practice asks a lot of each individual in the room. The
              invite process is a simple way to check for alignment, to make sure it is a fit for
              you, and to curate the space for those who are focused and showing up fully.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: A Session ── */}
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
            <h2 className="ip-section-heading">A Session</h2>
            <h3 className="ip-section-subheading">What a Typical Session Is Like</h3>
          </div>
          <p className="ip-italic-sub">
            Each session has a shape. What fills it varies and yet is consistent.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="ip-body">
              Doors open at 11:50am. That first twenty minutes before the collective start is not
              waiting time. It is the beginning of the session. The body starts its reset before the
              work is named.
            </p>
            <p className="ip-body">
              At 12:10pm we open together. A brief collective hello, a check-in, and then we move
              into the Daily Ritual activating and becoming aware of the body. All this is part of
              your practice outside the studio too. Here it becomes shared.
            </p>
            <p className="ip-body">
              From there the session develops through several layers of work. The physical demands
              are real. The precision required is equally real. You will be asked to do things that
              take genuine attention to execute well, and to keep that attention even when the work
              gets challenging.
            </p>
            <p className="ip-body">
              One component is specific to being in the room together. Relational exploration of the
              material with the group. It does not always arrive at the same point in the session.
              Sometimes it opens the work. Sometimes it runs through the middle of it. Where it lands
              depends on what the session needs and what the group brings that day.
            </p>
            <p className="ip-body">
              Some sessions will ask more of you than others. Some will surprise you. Arrive with
              what you have that day. The practice will meet you there.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: Your First Session ── */}
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
            <h2 className="ip-section-heading">Your First Session</h2>
            <h3 className="ip-section-subheading">What to Expect</h3>
          </div>
          <p className="ip-italic-sub">
            Your first session is one of the most important parts of this process.
          </p>
          <p className="ip-body">
            You will not fully understand the practice until you experience it directly over time.
            Words can only hint at it. It may feel more or less intense than you expect. It might be
            more refreshing or more frustrating than imagined. One session cannot define it. But it
            will begin it.
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
              fontWeight: 300,
              color: "var(--color-copper)",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Your first session is complimentary. No fee to attend.
          </p>
        </div>
      </section>

      {/* ── Section 4: Logistics ── */}
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
            <h2 className="ip-section-heading">Logistics</h2>
            <h3 className="ip-section-subheading">Session Details</h3>
          </div>

          <div className="ip-logistics-grid">
            {logistics.map((item, i) => (
              <StaggerItem key={item.title} index={i}>
                <div className={item.highlight ? "ip-logistics-item ip-logistics-item--highlight" : "ip-logistics-item"}>
                  <p className="ip-logistics-title">{item.title}</p>
                  {item.body && <p className="ip-logistics-body">{item.body}</p>}
                  {item.list && (
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                      {item.list.map((entry) => (
                        <li key={entry} style={{ display: "flex", gap: "0.625rem", alignItems: "baseline" }}>
                          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "var(--color-mid)", flexShrink: 0 }}>+</span>
                          <span className="ip-logistics-body">{entry}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.link && (
                    <a href={item.link.href} className="ip-logistics-link">
                      {item.link.text}
                    </a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Collective Culture Agreements ── */}
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
            gap: "2.5rem",
            opacity: r5 ? 1 : 0,
            transform: r5 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h2 className="ip-section-heading">Collective Culture Agreements</h2>
            <h3 className="ip-section-subheading">Membership Standards</h3>
          </div>

          <div className="ip-culture-grid">
            {cultureItems.map((item, i) => (
              <StaggerItem key={item.title} index={i}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      letterSpacing: "0.06em",
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
                      lineHeight: 1.75,
                      color: "var(--color-dark)",
                      margin: 0,
                      fontWeight: 300,
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

      {/* ── Section 6: FAQ ── */}
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
          ref={s6Ref}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            opacity: r6 ? 1 : 0,
            transform: r6 ? "none" : "translateY(24px)",
            transition: REVEAL_TR,
          }}
        >
          <h2 className="ip-section-heading">FAQ</h2>
          <h3 className="ip-section-subheading">Common questions</h3>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, i) => (
              <StaggerItem key={i} index={i}>
                <div style={{ borderTop: "1px solid var(--color-subtle)" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      all: "unset",
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "1.25rem 0",
                      cursor: "pointer",
                      gap: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        fontWeight: 400,
                        color: "var(--color-dark)",
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        color: "var(--color-mid)",
                        flexShrink: 0,
                        lineHeight: 1,
                      }}
                    >
                      {openFaq === i ? "—" : "+"}
                    </span>
                  </button>

                  {openFaq === i && (
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.75,
                        color: "var(--color-dark)",
                        fontWeight: 300,
                        margin: "0 0 1.5rem",
                        maxWidth: "56ch",
                      }}
                    >
                      {faq.a}
                    </p>
                  )}
                </div>
              </StaggerItem>
            ))}
            <div style={{ borderTop: "1px solid var(--color-subtle)" }} />
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
          ref={s7Ref}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            opacity: r7 ? 1 : 0,
            transform: r7 ? "none" : "translateY(24px)",
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
          <a href="/rmp/starting-point" className="ip-cta-link">
            Find Your Starting Point
          </a>
        </div>
      </section>

      <style>{`
        .ip-hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }
        .ip-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 0;
        }
        .ip-hero-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to bottom, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.72) 100%);
          pointer-events: none;
        }
        .ip-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 0 max(2rem, 5vw) 6rem;
          max-width: 680px;
        }
        .ip-hero-eyebrow {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-copper);
          margin: 0;
        }
        .ip-hero-h1 {
          font-family: var(--font-hero);
          font-size: clamp(4rem, 7.5vw, 8rem);
          font-weight: 700;
          font-style: italic;
          line-height: 0.95;
          color: #f0ebe3;
          margin: 0;
        }
        .ip-hero-blurb {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(240, 235, 227, 0.85);
          margin: 0;
          max-width: 42ch;
          font-weight: 300;
        }
        .ip-body {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.8vw, 1.0625rem);
          line-height: 1.85;
          color: var(--color-dark);
          margin: 0;
          font-weight: 300;
        }
        .ip-label {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
        }
        .ip-section-heading {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 600;
          font-style: italic;
          color: var(--color-dark);
          margin: 0;
          line-height: 1.2;
        }
        .ip-section-subheading {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
          font-weight: 500;
        }
        .ip-italic-sub {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.125rem, 2vw, 1.375rem);
          font-weight: 300;
          color: var(--color-dark);
          margin: 0;
          line-height: 1.45;
        }
        .ip-logistics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 900px;
          border-top: 1px solid var(--color-subtle);
        }
        .ip-logistics-item {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          padding: 2.5rem 3rem 2.5rem 0;
          border-bottom: 1px solid var(--color-subtle);
        }
        .ip-logistics-grid > div:nth-child(even) .ip-logistics-item {
          padding-left: 3rem;
          padding-right: 0;
          border-left: 1px solid var(--color-subtle);
        }
        .ip-logistics-title {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
        }
        .ip-logistics-body {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          line-height: 1.75;
          color: var(--color-dark);
          margin: 0;
          font-weight: 300;
        }
        .ip-logistics-link {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          color: var(--color-dark);
          text-decoration: none;
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 1px;
          align-self: flex-start;
          transition: border-color 0.2s;
        }
        .ip-logistics-link:hover { border-color: var(--color-dark); }
        .ip-logistics-item--highlight {
          outline: 1px solid var(--color-copper);
          outline-offset: -1px;
          padding: 3rem;
        }
        .ip-logistics-item--highlight .ip-logistics-title {
          color: var(--color-copper);
        }
        @media (max-width: 640px) {
          .ip-logistics-grid { grid-template-columns: 1fr; }
          .ip-logistics-item { padding: 2rem 0; }
          .ip-logistics-grid > div:nth-child(even) .ip-logistics-item {
            padding-left: 0;
            border-left: none;
          }
        }
        .ip-culture-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem 4rem;
          max-width: 860px;
        }
        @media (max-width: 640px) {
          .ip-culture-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
        .ip-cta-link {
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
        .ip-cta-link:hover {
          color: var(--color-dark);
          border-color: var(--color-dark);
        }
      `}</style>
    </main>
  );
}
