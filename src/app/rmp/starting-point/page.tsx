export default function RmpStartingPoint() {
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
          Find Your Starting Point
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
          Five questions. No wrong answers.
        </p>
      </section>

      <section
        style={{
          padding: "0 1.5rem 10rem",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "1px solid var(--color-subtle)",
            width: "100%",
            maxWidth: "640px",
            padding: "5rem 3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "1.5rem",
              fontWeight: 300,
              color: "var(--color-dark)",
              margin: 0,
            }}
          >
            Quiz coming soon
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "var(--color-mid)",
              margin: 0,
              letterSpacing: "0.03em",
            }}
          >
            We&rsquo;re still building this. Check back shortly.
          </p>
        </div>
      </section>
    </main>
  );
}
