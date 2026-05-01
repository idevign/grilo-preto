export default function Capoeira() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="cap-hero">
        <div className="cap-hero-scrim" />
        <div className="cap-hero-content">
          <p className="cap-hero-eyebrow">An Afro-Brazilian Martial Art</p>
          <h1 className="cap-hero-h1">Capoeira</h1>
          <p className="cap-hero-blurb">
            Part martial art, part game, part music, part ritual. Born from a people who needed to move in ways that could not be taken from them.
          </p>
        </div>
      </section>

      {/* ── Section 1: What it is ── */}
      <section
        style={{
          padding: "4rem 1.5rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "2rem" }}>

          {/* Pull quote */}
          <blockquote
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
              fontWeight: 300,
              color: "var(--color-dark)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            "A fight like dance, a dance like fight."
            <cite
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontStyle: "normal",
                fontSize: "0.8125rem",
                letterSpacing: "0.06em",
                color: "var(--color-mid)",
                marginTop: "0.75rem",
              }}
            >
              — Mestre Acordeon
            </cite>
          </blockquote>

          {/* Body */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="cap-body">
              It is Afro-Brazilian in its roots. Born from a people who needed to move in ways that
              could not be taken from them. Part martial art, part game, part music, part ritual.
              Those categories do not fully contain it. They never have.
            </p>
            <p className="cap-body">
              In the roda, two practitioners enter into a conversation through movement. There is no
              script. No choreography. What unfolds is a live negotiation of space, timing, deception,
              and presence. You learn to read another person while staying honest about yourself. You
              learn that the body has its own intelligence and that developing it takes more than
              strength or technique.
            </p>
            <p className="cap-body">
              Capoeira is also song. It is percussion. It is a culture passed between people over
              generations, carried in the body rather than written in books. To train capoeira
              seriously is to enter something larger than yourself.
            </p>
          </div>

          {/* Italic callout */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
              fontWeight: 300,
              color: "var(--color-dark)",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            It is one of the few practices in the world that asks for all of you. Physical, mental,
            musical, and emotional at the same time.
          </p>
        </div>
      </section>

      {/* ── Section 2: Lineage ── */}
      <section
        style={{
          padding: "4rem 1.5rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
        }}
      >
        <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--color-dark)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Lineage
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="cap-body">
              I am a Mestre in capoeira, the highest title within the culture. My lineage runs through
              the United Capoeira Association, under the guidance of world-renowned Mestre Acordeon,
              the late Mestre Rã, and Mestra Suelly.
            </p>
            <p className="cap-body">
              This lineage is not a credential. It is an honor. It is communal recognition. It is a
              responsibility. To teach with integrity, to preserve what was passed to me, to evolve
              it where needed, and to pass it forward with care.
            </p>
            <p className="cap-body">
              I have been in this practice for over two decades. It shaped everything that came after
              it, including the movement practice I teach today. Capoeira is where my roots live.
            </p>
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "var(--color-mid)",
              margin: 0,
            }}
          >
            Mestre Acordeon&nbsp;&nbsp;·&nbsp;&nbsp;Mestre Rã&nbsp;&nbsp;·&nbsp;&nbsp;Mestra Suelly
          </p>
        </div>
      </section>

      {/* ── Section 3: Train & Play ── */}
      <section
        style={{
          padding: "4rem 1.5rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
        }}
      >
        <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--color-dark)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Train &amp; Play
          </h2>

          {/* Online */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="cap-subheading">Online — available anywhere</p>
            <h3 className="cap-subsubheading">YouTube</h3>
            <p className="cap-body">
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
              className="cap-link"
            >
              Visit My Channel @grilopretocapoeira
            </a>
          </div>

          {/* In-Person Denver */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="cap-subheading">In-Person — Denver</p>
            <h3 className="cap-subsubheading">UCA Colorado</h3>
            <p className="cap-body">
              Classes for all levels, for adults and children. Regular rodas, cultural immersions,
              and an annual batizado. A community rooted in genuine practice of the art, not
              performance, not fitness, not trend. If you are in Denver and want to train capoeira
              in person, this is where you come.
            </p>
            <a
              href="https://ucacolorado.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cap-link"
            >
              Visit UCA Colorado
            </a>
          </div>

          {/* In-Person Global */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="cap-subheading">In-Person — Globally</p>
            <h3 className="cap-subsubheading">Upcoming Events</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ margin: 0 }}>
                <a
                  href="https://www.miamicapoeirasolelua.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cap-event-link cap-event-passed"
                >
                  Sol e Lua Cultural Arts Center Encounter &amp; Belt Ceremony&nbsp;&nbsp;·&nbsp;&nbsp;Miami, FL&nbsp;&nbsp;·&nbsp;&nbsp;Feb 25th – March 1st, 2025{" "}
                  <span className="cap-event-passed-tag">(passed)</span>
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <a
                  href="https://www.ucahayward.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cap-event-link cap-event-passed"
                >
                  UCA Hayward Batizado 2026&nbsp;&nbsp;·&nbsp;&nbsp;Hayward, CA&nbsp;&nbsp;·&nbsp;&nbsp;April 2026{" "}
                  <span className="cap-event-passed-tag">(passed)</span>
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <a
                  href="https://www.maplevalleycapoeira.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cap-event-link cap-event-passed"
                >
                  Maple Valley Capoeira&nbsp;&nbsp;·&nbsp;&nbsp;Maple Valley, WA&nbsp;&nbsp;·&nbsp;&nbsp;April 24th–25th{" "}
                  <span className="cap-event-passed-tag">(passed)</span>
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <a
                  href="https://ucacolorado.com/batizado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cap-event-link"
                >
                  Denver Batizado&nbsp;&nbsp;·&nbsp;&nbsp;Denver, CO&nbsp;&nbsp;·&nbsp;&nbsp;June 4th–7th
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Closing CTA ── */}
      <section
        style={{
          padding: "4rem 1.5rem 8rem",
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
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            fontWeight: 300,
            color: "var(--color-dark)",
            margin: "0 0 2rem",
            lineHeight: 1.4,
          }}
        >
          Whether you begin online or step into the studio, the art is waiting.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap" }}>
          <a
            href="https://www.youtube.com/@grilopretocapoeira"
            target="_blank"
            rel="noopener noreferrer"
            className="cap-cta-link"
          >
            Start online
          </a>
          <a
            href="https://ucacolorado.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cap-cta-link"
          >
            Train in Denver
          </a>
        </div>
      </section>

      <style>{`
        .cap-hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          overflow: hidden;
          background: url('https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&q=80') center / cover no-repeat;
        }
        .cap-hero-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to bottom, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.72) 100%);
          pointer-events: none;
        }
        .cap-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 5rem max(2rem, calc((100vw - 1200px) / 2 + 1.5rem));
          max-width: 680px;
        }
        .cap-hero-eyebrow {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-copper);
          margin: 0;
        }
        .cap-hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(3rem, 5.5vw, 5.5rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.05;
          color: #f0ebe3;
          margin: 0;
        }
        .cap-hero-blurb {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(240, 235, 227, 0.85);
          margin: 0;
          max-width: 42ch;
          font-weight: 300;
        }
        .cap-body {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.8vw, 1.0625rem);
          line-height: 1.85;
          color: var(--color-dark);
          margin: 0;
          font-weight: 300;
        }
        .cap-subheading {
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
        }
        .cap-subsubheading {
          font-family: var(--font-display);
          font-size: clamp(1.25rem, 2vw, 1.625rem);
          font-weight: 400;
          color: var(--color-dark);
          margin: 0;
          line-height: 1.2;
        }
        .cap-link {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--color-dark);
          text-decoration: none;
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 2px;
          align-self: flex-start;
          transition: border-color 0.2s, color 0.2s;
        }
        .cap-link:hover {
          color: var(--color-dark);
          border-color: var(--color-dark);
        }
        .cap-event-link {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          color: var(--color-dark);
          text-decoration: none;
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 1px;
          font-weight: 300;
          line-height: 1.6;
          transition: border-color 0.2s, color 0.2s;
        }
        .cap-event-link:hover { border-color: var(--color-dark); }
        .cap-event-passed { color: var(--color-mid); }
        .cap-event-passed:hover { color: var(--color-mid); border-color: var(--color-subtle); }
        .cap-event-passed-tag { font-size: 0.8125rem; opacity: 0.6; }
        .cap-cta-link {
          font-family: var(--font-body);
          font-size: 0.875rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-mid);
          text-decoration: none;
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .cap-cta-link:hover {
          color: var(--color-dark);
          border-color: var(--color-dark);
        }
      `}</style>
    </main>
  );
}
