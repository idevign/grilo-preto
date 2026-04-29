export default function Capoeira() {
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
          Capoeira
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
          Afro-Brazilian martial art&nbsp;&nbsp;·&nbsp;&nbsp;Culture&nbsp;&nbsp;·&nbsp;&nbsp;Community
        </p>
      </section>

      {/* ── Link blocks ── */}
      <section style={{ padding: "0 1.5rem 6rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="capoeira-grid">
          <LinkBlock
            title="UCA Colorado — In Person"
            description="Join us in Denver for open classes, workshops, and roda. Rooted in the lineage of Mestre Acordeon."
            label="Visit UCA Colorado"
            href="https://ucacolorado.com"
            external
          />
          <LinkBlock
            title="Grilo Preto on YouTube"
            description="Movement breakdowns, capoeira history, and practice resources — available anywhere, at any time."
            label="Watch on YouTube"
            href="https://www.youtube.com/@grilopretocapoeira"
            external
          />
        </div>
      </section>

      {/* ── Placeholder text ── */}
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
          Placeholder — the story of capoeira, its origins, and what it means to practice it today will live here.
        </p>
      </section>

      <style>{`
        .capoeira-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 640px) {
          .capoeira-grid { grid-template-columns: 1fr; }
        }
        .capoeira-link {
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
        .capoeira-link:hover { opacity: 1; }
      `}</style>
    </main>
  );
}

function LinkBlock({
  title,
  description,
  label,
  href,
  external,
}: {
  title: string;
  description: string;
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div
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
        {title}
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
        {description}
      </p>
      <a
        href={href}
        className="capoeira-link"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>
    </div>
  );
}
