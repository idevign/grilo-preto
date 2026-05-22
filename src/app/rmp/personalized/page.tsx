"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EASE } from "@/components/animations";

const formatItems = [
  { title: "Format", body: "1:1 or small group (2 max). Weekly or biweekly sessions. In-person in Denver or remote." },
  { title: "Platform", body: "RMP⁺ Guided included. Bespoke curriculum map. Session tracking. Direct communication." },
  { title: "Remote", body: "Video feedback via app. Film your sessions. Receive direct feedback from me." },
  { title: "Pricing", body: "Starting at $333/month. Remote and in-person rates differ. Structured in phases." },
];

export default function RmpPersonalized() {
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
            RMP⁺ Personalized
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
            Private. Bespoke. Built entirely around you.
          </p>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>Who This Is For</h2>
          <p className="italic-callout">
            Capable in almost every context. And still carrying something that has not yet been resolved.
          </p>
          <p className="body-prose">
            You have built things. Developed yourself in real ways. Moved through difficulty and
            come out the other side. And underneath all of that there is a version of yourself that
            has not yet been fully inhabited. Not because you have not tried. You have tried harder
            than most people around you will ever know.
          </p>
          <p className="body-prose">
            What you are looking for is not another method to follow. It is a practice that meets
            you specifically. Your patterns. Your history. Your body. The particular way your
            intelligence has become both your greatest asset and the thing that keeps you circling.
          </p>
          <div className="blockquote-copper">
            <blockquote>
              &ldquo;You are not looking to become someone different. You are looking to stop being governed
              by standards and definitions that were never yours to begin with.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── The Work ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>The Work</h2>
          <h3 className="section-subheading">What This Actually Is</h3>
          <p className="italic-callout">A private engagement built from the ground up. Not a program. A path.</p>
          <p className="body-prose">
            RMP⁺ Personalized is a 1:1 engagement, or small group of two, built entirely around
            your patterns, your history, and where you intend to go. It uses the same platform and
            foundation as RMP⁺ Guided, and goes further. Your curriculum is not drawn from a
            general phase map. It is built for you specifically and tracked in real time.
          </p>
          <p className="body-prose">
            We work through the body because that is where the patterns actually live. The way you
            move under pressure, the way you hold yourself in uncertainty, where you brace and
            where you go soft. These are not separate from how you operate in your work, your
            relationships, your decisions. Making them visible changes them.
          </p>
          <p className="body-prose">
            What shifts over time is difficult to put simply. People describe making decisions
            differently. Inhabiting their own presence differently. A quieter relationship with
            themselves that does not depend on external conditions to exist.
          </p>
        </div>
      </section>

      {/* ── What It Asks ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>What It Asks</h2>
          <h3 className="section-subheading">This Will Not Stay Comfortable</h3>
          <p className="italic-callout">
            The practice meets you where you are honest. That is rarely where you are comfortable.
          </p>
          <p className="body-prose">
            This will not stay comfortable with you when comfort is what is keeping you in place.
            The first thing most people encounter is exposure. Something the practice asks that
            performing cannot answer.
          </p>
          <p className="body-prose">
            For one person, at the end of her session she was in tears. Not from physical pain but
            from a realization that she had never moved without being watched, even by herself. The
            usual tools did not work. The familiar performance had nowhere to go.
          </p>
          <p className="body-prose">She stayed. She did the work. And she brought the people she loves.</p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>How It Works</h2>
          <h3 className="section-subheading">Format, Frequency, and Access</h3>
          <p className="italic-callout">In-person in Denver or remote. Weekly or biweekly. Directly with me.</p>
          <div className="grid-2" style={{ maxWidth: "680px" }}>
            {formatItems.map((item) => (
              <div key={item.title} className="pp-format-item">
                <p className="section-subheading">{item.title}</p>
                <p className="body-prose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before You Begin ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>Before You Begin</h2>
          <h3 className="section-subheading">A Recommended Starting Point</h3>
          <p className="italic-callout">
            One completed phase of RMP⁺ Guided or RMP⁺ In-Person is recommended before applying.
          </p>
          <p className="body-prose">
            The private work builds from what the foundation practice begins to surface. Those who
            arrive at Personalized having already moved through a phase understand what this
            practice can do. The 1:1 work takes it further and makes it entirely yours.
          </p>
          <p className="body-prose">
            If you have significant physical limitations or medical conditions, reach out before
            applying so we can determine the right path for you.
          </p>
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
        .pp-format-item { display: flex; flex-direction: column; gap: 0.625rem; }
      `}</style>
    </main>
  );
}
