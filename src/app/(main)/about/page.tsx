const chapters = [
  { numeral: "I", heading: "The Unfolding" },
  { numeral: "II", heading: "The Becoming" },
  { numeral: "III", heading: "The Expansion" },
  { numeral: "IV", heading: "The Invitation" },
];

export default function About() {
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
          Grilo Preto
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
          The Story
        </p>
      </section>

      {/* ── Story chapters ── */}
      <section style={{ padding: "0 1.5rem 8rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {chapters.map((chapter, i) => (
            <div
              key={chapter.numeral}
              style={{
                borderTop: "1px solid var(--color-subtle)",
                padding: "3.5rem 0",
                display: "grid",
                gridTemplateColumns: "4rem 1fr",
                gap: "2rem",
                alignItems: "start",
                ...(i === chapters.length - 1 ? { borderBottom: "1px solid var(--color-subtle)" } : {}),
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "var(--color-mid)",
                  letterSpacing: "0.05em",
                  paddingTop: "0.25rem",
                }}
              >
                {chapter.numeral}.
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
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
                  {chapter.heading}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "var(--color-mid)",
                    margin: 0,
                    lineHeight: 1.7,
                    maxWidth: "480px",
                  }}
                >
                  Placeholder — this chapter's story will live here.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
