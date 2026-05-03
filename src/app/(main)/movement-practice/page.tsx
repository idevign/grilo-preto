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
      <section className="mp-hero">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="mp-hero-img"
        />
        <div className="mp-hero-scrim" />
        <div className="mp-hero-content">
          <p className="mp-hero-eyebrow">A physical-first path to self mastery</p>
          <h1 className="mp-hero-h1">The Movement Practice</h1>
          <p className="mp-hero-blurb">
            Ritual Movement Practice develops the whole person through the body. Not the body in isolation from everything else, but as one integrated system.
          </p>
        </div>
      </section>

      {/* ── Path cards ── */}
      <section style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6rem max(2rem, 5vw)" }}>
        <div className="mp-grid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
        <div style={{ maxWidth: "1200px", margin: "3rem auto 0", textAlign: "center", width: "100%" }}>
          <Link href="/rmp" className="mp-full-link">
            Explore the full practice →
          </Link>
        </div>
      </section>

      <style>{`
        .mp-hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }
        .mp-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 0;
        }
        .mp-hero-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to bottom, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.72) 100%);
          pointer-events: none;
        }
        .mp-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 0 max(2rem, 5vw) 6rem;
          max-width: 680px;
        }
        .mp-hero-eyebrow {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-copper);
          margin: 0;
        }
        .mp-hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(3rem, 5.5vw, 5.5rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.05;
          color: #f0ebe3;
          margin: 0;
        }
        .mp-hero-blurb {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(240, 235, 227, 0.85);
          margin: 0;
          max-width: 42ch;
          font-weight: 300;
        }
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
