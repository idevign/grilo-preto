import Link from "next/link";

const paths = [
  {
    title: "RMP⁺ Guided",
    description: "The foundation. A structured online program you move through at your own pace.",
    href: "/rmp/guided",
  },
  {
    title: "RMP⁺ In-Person",
    description: "Weekly group sessions at the Movement Ritual studio in Denver. What practice by yourself cannot replicate.",
    href: "/rmp/in-person",
  },
  {
    title: "RMP⁺ Personalized",
    description: "One-to-one bespoke curriculum tailored to where you are and where you want to go.",
    href: "/rmp/personalized",
  },
];

export default function MovementPractice() {
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
          The Movement Practice
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

      {/* ── Intro ── */}
      <section
        style={{
          padding: "0 1.5rem 4rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            maxWidth: "560px",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
              lineHeight: 1.8,
              color: "var(--color-dark)",
              margin: 0,
              fontWeight: 300,
            }}
          >
            Ritual Movement Practice is a physical-first path to self mastery.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
              lineHeight: 1.8,
              color: "var(--color-dark)",
              margin: 0,
              fontWeight: 300,
            }}
          >
            This practice develops the whole person through the body. Not the
            body in isolation from everything else, but as one integrated system.
          </p>
        </div>
      </section>

      {/* ── Path cards ── */}
      <section style={{ padding: "0 1.5rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="mp-grid">
          {paths.map((path) => (
            <div
              key={path.href}
              style={{
                backgroundColor: "var(--color-base)",
                border: "1px solid var(--color-subtle)",
                padding: "3rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                minHeight: "280px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 400,
                  color: "var(--color-dark)",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {path.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--color-dark)",
                  margin: 0,
                  lineHeight: 1.7,
                  opacity: 0.75,
                  flexGrow: 1,
                }}
              >
                {path.description}
              </p>
              <Link href={path.href} className="mp-card-link">
                Explore
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Full practice link ── */}
      <section
        style={{
          padding: "0 1.5rem 8rem",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Link href="/rmp" className="mp-full-link">
          Explore the full practice →
        </Link>
      </section>

      <style>{`
        .mp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .mp-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .mp-grid { grid-template-columns: 1fr; }
        }
        .mp-card-link {
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
        .mp-card-link:hover { opacity: 1; }
        .mp-full-link {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--color-mid);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.2s;
        }
        .mp-full-link:hover { color: var(--color-dark); }
      `}</style>
    </main>
  );
}
