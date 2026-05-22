"use client";

import { useEffect, useState } from "react";
import { EASE } from "@/components/animations";

type LogisticsItem = {
  title: string;
  body: string | null;
  list?: string[];
  link: { text: string; href: string } | null;
  highlight?: boolean;
};

const logistics: LogisticsItem[] = [
  { title: "Days and Time", body: "Monday and Wednesday. 12:00pm — 1:15pm. Doors open at 11:50am. Collective start at 12:10pm.", link: null },
  { title: "Membership", body: "$222/month recommended contribution. One phase commitment (3 months). Fellowships available.", link: null },
  { title: "What to Bring", body: "A curious mind. Comfortable clothing you can move and stretch in. Barefoot or minimal shoes. Water.", link: null },
  { title: "Location", body: "910 Santa Fe Dr, Studio 8. Denver, CO 80204. 910 Arts courtyard. Next to the coffee shop.", link: null },
  { title: "Includes", body: null, list: ["RMP⁺ Guided", "Full phase curriculum", "Daily Ritual", "Group forum"], link: null },
  { title: "Your Invite", body: "Get your invite by finding your starting point. Available to those local to Denver, CO and visiting guests of existing members.", link: { text: "Find Your Starting Point", href: "/rmp/starting-point" }, highlight: true },
];

const cultureItems = [
  { title: "Attendance", body: "Showing up is part of the agreement. Planned absences communicated in advance are understood. Cancellations driven by motivation are not. The practice is designed to be returned to especially when it feels hard to." },
  { title: "Progress", body: "Members demonstrate development across at least one area over a phase. Progress may be visible or subtle. Maintenance and recovery phases are valid." },
  { title: "Effort", body: "Effort is measured by the willingness to show up fully in the process. Attentiveness, intention, and openness to feedback. Output alone is not the measure." },
  { title: "Confidentiality", body: "What is shared within the practice stays within the group. This is what makes the space safe enough for real work." },
];

const faqs = [
  { q: "Do I need prior movement experience?", a: "No. What matters more is curiosity, a willingness to be challenged, and genuine interest in depth. The self-assessment will help point you in the right direction to start." },
  { q: "What if I travel frequently or have an unpredictable schedule?", a: "The attendance expectation is real. If your schedule is consistently unpredictable, RMP⁺ Guided is likely a better starting point. Members who travel can access the curriculum remotely via the app during planned absences." },
  { q: "Can I join mid-phase?", a: "Yes. You will be integrated into the current material with individual guidance. If you prefer to begin at a phase start, that can be arranged." },
  { q: "What is a fellowship?", a: "Fellowships are available for the right candidate when financial access is a barrier. Reach out directly to discuss." },
  { q: "What happens after the first session?", a: "If it feels right for both of us, you will be onboarded through Everfit and begin the membership commitment from the next session or phase start." },
];

export default function RmpInPerson() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
            RMP⁺ In-Person
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
            In-person. Denver. Monday and Wednesday at noon.
          </p>
        </div>
      </section>

      {/* ── The Practice ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>The Practice</h2>
          <h3 className="section-subheading">Being in collective practice</h3>
          <p className="italic-callout">
            This is not a class you drop into. It is a practice you use to explore and refine who
            you are over time.
          </p>
          <p className="body-prose">
            The group sessions are where the curriculum becomes lived experience. The same material
            available through RMP⁺ Guided is present here, and something is added that cannot be
            replicated alone. What happens between people in a shared physical space changes what
            is possible inside it.
          </p>
          <p className="body-prose">
            Sessions move through a consistent structure. One that carries the work from
            preparation through to physical depth and collective exploration. The structure holds.
            What fills it shifts based on the phase, the theme, and the people present on any
            given day.
          </p>
          <p className="body-prose">
            The space is invite-only. The practice asks a lot of each individual in the room. The
            invite process is a simple way to check for alignment, to make sure it is a fit for
            you, and to curate the space for those who are focused and showing up fully.
          </p>
        </div>
      </section>

      {/* ── A Session ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>A Session</h2>
          <h3 className="section-subheading">What a Typical Session Is Like</h3>
          <p className="italic-callout">Each session has a shape. What fills it varies and yet is consistent.</p>
          <p className="body-prose">
            Doors open at 11:50am. That first twenty minutes before the collective start is not
            waiting time. It is the beginning of the session. The body starts its reset before the
            work is named.
          </p>
          <p className="body-prose">
            At 12:10pm we open together. A brief collective hello, a check-in, and then we move
            into the Daily Ritual activating and becoming aware of the body. All this is part of
            your practice outside the studio too. Here it becomes shared.
          </p>
          <p className="body-prose">
            From there the session develops through several layers of work. The physical demands
            are real. The precision required is equally real. You will be asked to do things that
            take genuine attention to execute well, and to keep that attention even when the work
            gets challenging.
          </p>
          <p className="body-prose">
            One component is specific to being in the room together. Relational exploration of the
            material with the group. It does not always arrive at the same point in the session.
            Sometimes it opens the work. Sometimes it runs through the middle of it. Where it lands
            depends on what the session needs and what the group brings that day.
          </p>
          <p className="body-prose">
            Some sessions will ask more of you than others. Some will surprise you. Arrive with
            what you have that day. The practice will meet you there.
          </p>
        </div>
      </section>

      {/* ── Your First Session ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>Your First Session</h2>
          <h3 className="section-subheading">What to Expect</h3>
          <p className="italic-callout">Your first session is one of the most important parts of this process.</p>
          <p className="body-prose">
            You will not fully understand the practice until you experience it directly over time.
            Words can only hint at it. It may feel more or less intense than you expect. It might be
            more refreshing or more frustrating than imagined. One session cannot define it. But it
            will begin it.
          </p>
          <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "var(--color-text-accent)", margin: 0, lineHeight: 1.5 }}>
            Your first session is complimentary. No fee to attend.
          </p>
        </div>
      </section>

      {/* ── Logistics ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>Logistics</h2>
          <h3 className="section-subheading">Session Details</h3>
          <div className="ip-logistics-grid">
            {logistics.map((item) => (
              <div key={item.title} className={item.highlight ? "ip-logistics-item ip-logistics-item--highlight" : "ip-logistics-item"}>
                <p className="section-subheading">{item.title}</p>
                {item.body && <p className="body-prose">{item.body}</p>}
                {item.list && (
                  <ul className="ip-logistics-list">
                    {item.list.map((entry) => (
                      <li key={entry} className="body-prose">{entry}</li>
                    ))}
                  </ul>
                )}
                {item.link && (
                  <a href={item.link.href} className="link-underline">{item.link.text}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture Agreements ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>Collective Culture Agreements</h2>
          <h3 className="section-subheading">Membership Standards</h3>
          <div className="grid-2" style={{ maxWidth: "860px" }}>
            {cultureItems.map((item) => (
              <div key={item.title} className="ip-culture-item">
                <p className="section-subheading">{item.title}</p>
                <p className="body-prose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>FAQ</h2>
          <h3 className="section-subheading">Common questions</h3>
          <div className="ip-faq">
            {faqs.map((faq, i) => (
              <div key={i} className="ip-faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="ip-faq-q"
                >
                  <span>{faq.q}</span>
                  <span className="ip-faq-toggle">{openFaq === i ? "—" : "+"}</span>
                </button>
                {openFaq === i && <p className="body-prose ip-faq-a">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-section" style={{ textAlign: "center" }}>
        <p className="italic-callout">Not sure where to begin?</p>
        <div style={{ marginTop: "2rem" }}>
          <a href="/rmp/starting-point" className="link-cta">Find Your Starting Point</a>
        </div>
      </section>

      <style>{`
        .ip-logistics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 900px;
          border-top: 1px solid var(--color-border);
        }
        .ip-logistics-item {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          padding: 2.5rem 3rem 2.5rem 0;
          border-bottom: 1px solid var(--color-border);
        }
        .ip-logistics-grid > div:nth-child(even) .ip-logistics-item {
          padding-left: 3rem;
          padding-right: 0;
          border-left: 1px solid var(--color-border);
        }
        .ip-logistics-item--highlight {
          outline: 1px solid var(--color-text-accent);
          outline-offset: -1px;
          padding: 3rem;
        }
        .ip-logistics-item--highlight .section-subheading { color: var(--color-text-accent); }
        .ip-logistics-list {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .ip-culture-item { display: flex; flex-direction: column; gap: 0.75rem; }
        .ip-faq { display: flex; flex-direction: column; }
        .ip-faq-item { border-top: 1px solid var(--color-border); }
        .ip-faq-item:last-child { border-bottom: 1px solid var(--color-border); }
        .ip-faq-q {
          all: unset;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          width: 100%;
          padding: 1.25rem 0;
          cursor: pointer;
          gap: 1rem;
          font-size: var(--text-base);
          color: var(--color-text-primary);
          line-height: 1.4;
        }
        .ip-faq-toggle { color: var(--color-text-secondary); flex-shrink: 0; }
        .ip-faq-a { padding-bottom: 1.5rem; max-width: 56ch; }
        @media (max-width: 640px) {
          .ip-logistics-grid { grid-template-columns: 1fr; }
          .ip-logistics-item { padding: 2rem 0; }
          .ip-logistics-grid > div:nth-child(even) .ip-logistics-item { padding-left: 0; border-left: none; }
        }
      `}</style>
    </main>
  );
}
