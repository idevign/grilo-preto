import Link from "next/link";

export default function RmpHome() {
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
          The Practice
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
          A physical-first path to self mastery
        </p>
      </section>

      {/* ── Section 1: No heading ── */}
      <section
        style={{
          padding: "0 1.5rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
          paddingTop: "4rem",
        }}
      >
        <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
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

          <blockquote
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)",
              fontWeight: 300,
              color: "var(--color-dark)",
              margin: "1.25rem 0 0",
              lineHeight: 1.45,
              borderLeft: "2px solid var(--color-copper)",
              paddingLeft: "1.5rem",
            }}
          >
            "The way you move reveals the way you live. Most people find that confronting at first.
            The right person finds it clarifying."
          </blockquote>
        </div>
      </section>

      {/* ── Section 2: What Develops ── */}
      <section
        style={{
          padding: "4rem 1.5rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
        }}
      >
        <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <p className="rmp-section-label">What Develops</p>
          <h2 className="rmp-section-heading">What Develops</h2>

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

      {/* ── Section 3: On Ritual ── */}
      <section
        style={{
          padding: "4rem 1.5rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
        }}
      >
        <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
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

      {/* ── Section 4: The Structure ── */}
      <section
        style={{
          padding: "4rem 1.5rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
        }}
      >
        <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
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
      </section>

      {/* ── Section 5: The Paths ── */}
      <section
        style={{
          padding: "4rem 1.5rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
        }}
      >
        <h2
          className="rmp-section-heading"
          style={{ marginBottom: "2.5rem" }}
        >
          The Paths
        </h2>

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
          ].map((path) => (
            <div
              key={path.href}
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
                  fontSize: "clamp(1.375rem, 2vw, 1.75rem)",
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
                  fontSize: "0.9rem",
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
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 6: A Brief Origin ── */}
      <section
        style={{
          padding: "4rem 1.5rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
        }}
      >
        <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
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

      {/* ── Section 7: CTA ── */}
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
        <a
          href="https://grilopreto.com/starting-point"
          className="rmp-cta-link"
        >
          Find Your Starting Point
        </a>
      </section>

      <style>{`
        .rmp-body {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.8vw, 1.0625rem);
          line-height: 1.85;
          color: var(--color-dark);
          margin: 0;
          font-weight: 300;
        }
        .rmp-section-label {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-mid);
          margin: 0;
          display: none;
        }
        .rmp-section-heading {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 300;
          font-style: italic;
          color: var(--color-dark);
          margin: 0;
          line-height: 1.2;
        }
        .rmp-curriculum-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem 4rem;
          margin-top: 3rem;
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
          font-size: 0.8rem;
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
          font-size: 0.875rem;
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
          font-size: 0.875rem;
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
