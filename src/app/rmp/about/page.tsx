export default function RmpAbout() {
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
          About RMP⁺
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
          The origin and intention behind the practice
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
          Placeholder — the story of how RMP⁺ came to be, its roots in capoeira and somatic practice, and the philosophy behind the methodology.
        </p>
      </section>
    </main>
  );
}
