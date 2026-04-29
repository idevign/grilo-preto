import Link from "next/link";

export default function RmpHome() {
  return (
    <main>
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
          The Ritual Movement Practice
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

      <section
        style={{
          padding: "4rem 1.5rem 8rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--color-subtle)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
            lineHeight: 1.8,
            color: "var(--color-dark)",
            maxWidth: "560px",
            margin: 0,
            fontWeight: 300,
          }}
        >
          Placeholder — overview of the RMP⁺ program, the three paths, and what this practice is for.
        </p>
      </section>

      {/* ── Find Your Starting Point ── */}
      <section
        style={{
          padding: "8rem 1.5rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--color-dark)",
            margin: "0 0 2rem",
            letterSpacing: "-0.01em",
          }}
        >
          Find Your Starting Point
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
            color: "var(--color-mid)",
            maxWidth: "400px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Five questions. No wrong answers. Find out which path in RMP⁺ is right for where you are now.
        </p>
        <Link href="/starting-point" className="rmp-cta-link">
          Begin here
        </Link>
      </section>

      <style>{`
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
