"use client";

import { useEffect, useState } from "react";
import { EASE } from "@/components/animations";

export default function Capoeira() {
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
            Part martial art, part game, part music, part ritual. Born from a people who needed
            to move in ways that could not be taken from them.
          </p>
        </div>
      </section>

      {/* ── What it is ── */}
      <section className="page-section">
        <div className="section-inner">
          <div className="blockquote-copper">
            <blockquote>
              &ldquo;A fight like dance, a dance like fight.&rdquo;
              <cite>Mestre Acordeon</cite>
            </blockquote>
          </div>
          <p className="body-prose">
            It is Afro-Brazilian in its roots. Born from a people who needed to move in ways that
            could not be taken from them. Part martial art, part game, part music, part ritual.
            Those categories do not fully contain it. They never have.
          </p>
          <p className="body-prose">
            In the roda, two practitioners enter into a conversation through movement. There is no
            script. No choreography. What unfolds is a live negotiation of space, timing, deception,
            and presence. You learn to read another person while staying honest about yourself. You
            learn that the body has its own intelligence and that developing it takes more than
            strength or technique.
          </p>
          <p className="body-prose">
            Capoeira is also song. It is percussion. It is a culture passed between people over
            generations, carried in the body rather than written in books. To train capoeira
            seriously is to enter something larger than yourself.
          </p>
          <p className="italic-callout">
            It is one of the few practices in the world that asks for all of you. Physical, mental,
            musical, and emotional at the same time.
          </p>
        </div>
      </section>

      {/* ── Lineage ── */}
      <section className="page-section">
        <div className="section-inner">
          <h2>Lineage</h2>
          <p className="body-prose">
            I am a Mestre in capoeira, the highest title within the culture. My lineage runs through
            the United Capoeira Association, under the guidance of world-renowned Mestre Acordeon,
            the late Mestre Rã, and Mestra Suelly.
          </p>
          <p className="body-prose">
            This lineage is not a credential. It is an honor. It is communal recognition. It is a
            responsibility. To teach with integrity, to preserve what was passed to me, to evolve
            it where needed, and to pass it forward with care.
          </p>
          <p className="body-prose">
            I have been in this practice for over two decades. It shaped everything that came after
            it, including the movement practice I teach today. Capoeira is where my roots live.
          </p>
          <p className="section-subheading">
            Mestre Acordeon&nbsp;&nbsp;&middot;&nbsp;&nbsp;Mestre Rã&nbsp;&nbsp;&middot;&nbsp;&nbsp;Mestra Suelly
          </p>
        </div>
      </section>

      {/* ── Train & Play ── */}
      <section className="page-section">
        <div className="section-inner" style={{ gap: "4rem" }}>
          <h2>Train &amp; Play</h2>

          <div className="cap-offering">
            <p className="section-subheading">Online — available anywhere</p>
            <h3>YouTube</h3>
            <p className="body-prose">
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
              className="link-underline"
            >
              Visit My Channel @grilopretocapoeira
            </a>
          </div>

          <div className="cap-offering">
            <p className="section-subheading">In-Person — Denver</p>
            <h3>UCA Colorado</h3>
            <p className="body-prose">
              Classes for all levels, for adults and children. Regular rodas, cultural immersions,
              and an annual batizado. A community rooted in genuine practice of the art, not
              performance, not fitness, not trend. If you are in Denver and want to train capoeira
              in person, this is where you come.
            </p>
            <a
              href="https://ucacolorado.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Visit UCA Colorado
            </a>
          </div>

          <div className="cap-offering">
            <p className="section-subheading">In-Person — Globally</p>
            <h3>Upcoming Events</h3>
            <div className="cap-events">
              <p>
                <a href="https://www.miamicapoeirasolelua.com" target="_blank" rel="noopener noreferrer" className="cap-event cap-event--passed">
                  Sol e Lua Cultural Arts Center Encounter &amp; Belt Ceremony&nbsp;&nbsp;&middot;&nbsp;&nbsp;Miami, FL&nbsp;&nbsp;&middot;&nbsp;&nbsp;Feb 25th – March 1st, 2025{" "}
                  <span className="cap-event-tag">(passed)</span>
                </a>
              </p>
              <p>
                <a href="https://www.ucahayward.com" target="_blank" rel="noopener noreferrer" className="cap-event cap-event--passed">
                  UCA Hayward Batizado 2026&nbsp;&nbsp;&middot;&nbsp;&nbsp;Hayward, CA&nbsp;&nbsp;&middot;&nbsp;&nbsp;April 2026{" "}
                  <span className="cap-event-tag">(passed)</span>
                </a>
              </p>
              <p>
                <a href="https://www.maplevalleycapoeira.com/" target="_blank" rel="noopener noreferrer" className="cap-event cap-event--passed">
                  Maple Valley Capoeira&nbsp;&nbsp;&middot;&nbsp;&nbsp;Maple Valley, WA&nbsp;&nbsp;&middot;&nbsp;&nbsp;April 24th–25th{" "}
                  <span className="cap-event-tag">(passed)</span>
                </a>
              </p>
              <p>
                <a href="https://ucacolorado.com/batizado" target="_blank" rel="noopener noreferrer" className="cap-event">
                  Denver Batizado&nbsp;&nbsp;&middot;&nbsp;&nbsp;Denver, CO&nbsp;&nbsp;&middot;&nbsp;&nbsp;June 4th–7th
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-section" style={{ textAlign: "center" }}>
        <p className="italic-callout">Whether you begin online or step into the studio, the art is waiting.</p>
        <div className="cap-cta-group">
          <a href="https://www.youtube.com/@grilopretocapoeira" target="_blank" rel="noopener noreferrer" className="link-cta">
            Start online
          </a>
          <a href="https://ucacolorado.com" target="_blank" rel="noopener noreferrer" className="link-cta">
            Train in Denver
          </a>
        </div>
      </section>

      <style>{`
        .cap-offering {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .cap-events {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin: 0;
        }
        .cap-event {
          font-size: var(--text-base);
          color: var(--color-text-primary);
          text-decoration: none;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 1px;
          font-weight: 300;
          line-height: 1.6;
          transition: border-color 0.2s;
        }
        .cap-event:hover { border-color: var(--color-text-primary); }
        .cap-event--passed { color: var(--color-text-secondary); }
        .cap-event--passed:hover { border-color: var(--color-border); }
        .cap-event-tag { font-size: var(--text-xs); opacity: 0.6; }
        .cap-cta-group {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
      `}</style>
    </main>
  );
}
