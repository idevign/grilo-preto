"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EASE } from "@/components/animations";

const paths = [
  {
    title: "RMP⁺ Guided",
    description: "The foundation. Available anywhere. Three sessions per week plus a daily movement ritual. $88/month. First Wave founding rate $44/month.",
    href: "/rmp/guided",
  },
  {
    title: "RMP⁺ In-Person",
    description: "Weekly group sessions at Movement Ritual in Denver. Monday and Wednesday at noon. Includes RMP⁺ Guided. $222/month recommended contribution.",
    href: "/rmp/in-person",
  },
  {
    title: "RMP⁺ Personalized",
    description: "A bespoke curriculum built entirely around you. Weekly or biweekly sessions in-person or remote. Starting at $333/month.",
    href: "/rmp/personalized",
  },
];

const curriculum = [
  { title: "Expressive skill", body: "A primary movement quality that gives each phase its character and direction." },
  { title: "Mobility", body: "Range and tissue work that opens the body toward the phase direction." },
  { title: "Physical capacity", body: "Conditioning and strength work that supports what the phase asks of the body." },
  { title: "Articulation", body: "Refined coordination that integrates the other three areas into something coherent." },
];

export default function RmpHome() {
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

      {/* ── The Practice ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>The Practice</h2>
          <h3 className="section-subheading">What you will find here</h3>
          <p className="body-prose">
            People arrive here expecting a workout. What they find goes further than that.
          </p>
          <p className="body-prose">
            The practice is physically rigorous. It is also introspective in a way that most physical
            contexts never ask for, and that combination is not incidental. The design asks you to be
            present in your body while being honest about what you find there. For most people, those
            two things have never happened at the same time.
          </p>
          <p className="body-prose">
            Effort is familiar. This practice works with something less practiced. Attention. The
            quality of it, the direction of it, what you do when it becomes uncomfortable to keep it
            in one place.
          </p>
          <p className="body-prose">That is what changes here.</p>
          <div className="blockquote-copper">
            <blockquote>
              "The way you move reveals the way you live. Most people find that confronting at first.
              The right person finds it clarifying."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── What Develops ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>What Develops</h2>
          <p className="body-prose">
            This practice develops the whole person through the body. Not the body in isolation
            from everything else, but as one integrated system.
          </p>
          <p className="body-prose">
            How you move under pressure, how you hold yourself in uncertainty, where you brace and
            where you yield. These show up the same way in how you operate in your work, your
            relationships, your decisions, your life. The practice makes those patterns visible.
            Visible patterns can be worked with. That is the opening.
          </p>
          <p className="body-prose">
            Strength, physical skill, and aesthetic quality are byproducts of consistent honest
            practice. They are reference points, not goals. The deeper development is an embodied
            state of being that is internally governed rather than externally directed. Self mastery
            not as destination but as practice.
          </p>
        </div>
      </section>

      {/* ── On Ritual ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>On Ritual</h2>
          <p className="body-prose">
            I hold this practice as ritual. Structured repetition done with reverence, over time.
            What ritual produces is not dramatic. It is cumulative.
          </p>
          <p className="body-prose">
            Ritual asks you to return, again and again, with focused attention and conscious
            intention. In doing so it reveals what you did not see before. Patterns of tension,
            avoidance, strength, and clarity that were always there. Hidden by moving too quickly
            through your own life to notice.
          </p>
          <p className="body-prose">
            Giving you the ability to liberate yourself from external definitions. To reclaim and
            refine the strength, conditioning, and qualities that were always innate.
          </p>
        </div>
      </section>

      {/* ── The Structure ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>The Structure</h2>
          <p className="body-prose">
            The curriculum unfolds in three-month phases. Each built around four simultaneous areas
            of study. Not sequentially. Together. Each phase has a central theme that gives the work
            direction without making it rigid.
          </p>
          <p className="body-prose">
            This is not a checklist. It is a map. The distinction matters because one produces
            compliance and the other produces understanding.
          </p>
          <div className="grid-2" style={{ marginTop: "1rem", maxWidth: "680px" }}>
            {curriculum.map((item) => (
              <div key={item.title} className="rmp-curriculum-item">
                <p className="section-subheading">{item.title}</p>
                <p className="body-prose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Paths ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>The Paths</h2>
          <div className="grid-3">
            {paths.map((path) => (
              <div key={path.href} className="rmp-path-card">
                <h3>{path.title}</h3>
                <p className="body-prose">{path.description}</p>
                <Link href={path.href} className="link-underline">Explore</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── A Brief Origin ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>A Brief Origin</h2>
          <p className="body-prose">
            I spent years building a career in software development and design. Attaining
            conventional success yet feeling increasingly further from myself. Capoeira found me and
            broke something open. What followed was two decades of direct study across capoeira,
            gymnastic strength training, somatics, and movement, including training with Ido Portal
            and his senior students.
          </p>
          <p className="body-prose">
            What I offer is the synthesis of all of it. Not a fitness method. What I found when I
            stopped optimizing and thinking my way through my own life and started moving and living it.
          </p>
          <a href="https://grilopreto.com/about" className="link-underline">Read the full story</a>
        </div>
      </section>

      {/* ── What It Is ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>What It Is</h2>
          <p className="body-prose">
            Ritual Movement Practice is a physical-first methodology for developing the whole
            person. Not the body in isolation from everything else, but as one integrated system.
            The curriculum unfolds in three-month phases, each organized around four simultaneous
            areas of study, working toward a central theme that gives the work direction without
            making it rigid.
          </p>
          <p className="body-prose">
            The three paths, Guided, In-Person, and Personalized, are different ways of entering
            the same work. The foundation is the same across all three.
          </p>
        </div>
      </section>

      {/* ── What It Is For ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>What It Is For</h2>
          <p className="body-prose">
            People who are ready to be honest about how they move and what that reveals. People who
            have tried other things and found them useful but incomplete. People who want to develop
            something real over time rather than optimize a number on a screen.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-section" style={{ textAlign: "center" }}>
        <p className="italic-callout">Not sure where to begin?</p>
        <div style={{ marginTop: "2rem" }}>
          <a href="https://grilopreto.com/rmp/starting-point" className="link-cta">
            Find Your Starting Point
          </a>
        </div>
      </section>

      <style>{`
        .rmp-curriculum-item { display: flex; flex-direction: column; gap: 0.625rem; }
        .rmp-path-card {
          border: 1px solid var(--color-border);
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 240px;
        }
      `}</style>
    </main>
  );
}
