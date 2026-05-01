import Link from "next/link";
import HeroLensCanvas from "@/components/HeroLensCanvas";

const PATHS = [
  {
    num: "01",
    title: "Movement Practice",
    desc: "Functional movement, mobility, and embodied awareness.",
    href: "/movement-practice",
  },
  {
    num: "02",
    title: "Capoeira",
    desc: "The art of movement, music, and liberation.",
    href: "/capoeira",
  },
  {
    num: "03",
    title: "Journal",
    desc: "Reflections, lessons, and ongoing practice.",
    href: "/journal",
  },
  {
    num: "04",
    title: "About",
    desc: "Two decades of practice. One invitation to begin.",
    href: "/about",
  },
];

export default function Home() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="h2-hero">

        <HeroLensCanvas />
        <div className="h2-scrim" />

        <div className="h2-hero-content">
          <p className="h2-eyebrow">Rooted in tradition. Applied to life.</p>
          <h1 className="h2-heading">
            Inviting a<br />Return to Self.
          </h1>
          <p className="h2-sub">
            A path of movement, culture, and self-mastery. Capoeira. The Movement
            Practice. A way of life.
          </p>
          <div className="h2-actions">
            <Link href="/movement-practice" className="h2-btn-primary">
              Explore the Practice
            </Link>
            <Link href="/rmp/starting-point" className="h2-btn-text">
              Find your starting point &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="h2-phil">
        <div className="h2-phil-left">
          <p className="h2-label">The Practice</p>
          <h2 className="h2-phil-heading">
            Freedom through<br />
            <em className="h2-copper">Discipline.</em>
          </h2>
          <p className="h2-phil-body">
            I have lived inside this practice for two decades. Through capoeira and
            movement. Not as techniques to master, but as a way of asking a question
            I kept needing to return to: what does it mean to truly be free?
          </p>
          <Link href="/about" className="h2-btn-text" style={{ marginTop: "2.5rem", display: "inline-flex" }}>
            Our story &rarr;
          </Link>
        </div>
        <div className="h2-phil-right">
          <blockquote className="h2-quote">
            <span className="h2-quote-mark">&ldquo;</span>
            <p>
              Discipline creates freedom.<br />
              Freedom reveals who you are.
            </p>
            <footer className="h2-quote-attr">Grilo Preto</footer>
          </blockquote>
        </div>
      </section>

      {/* ── Paths grid ── */}
      <section className="h2-paths">
        <div className="h2-paths-grid">
          {PATHS.map((p) => (
            <div key={p.href} className="h2-path-item">
              <span className="h2-path-num">{p.num}</span>
              <h3 className="h2-path-title">{p.title}</h3>
              <p className="h2-path-desc">{p.desc}</p>
              <Link href={p.href} className="h2-path-arrow" aria-label={`Go to ${p.title}`}>
                &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        /* ── Shared ── */
        .h2-eyebrow, .h2-label {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-copper);
          margin: 0;
        }

        /* ── Hero ── */
        .h2-hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          overflow: hidden;
          background: url('/images/hero-hand.jpg') center / cover no-repeat;
        }

        .h2-scrim {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(to right, transparent 20%, rgba(10,8,6,0.75) 55%, rgba(10,8,6,0.88) 100%);
          pointer-events: none;
        }

        .h2-hero-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 7rem max(2rem, calc((100vw - 1200px) / 2 + 2.5rem)) 7rem max(2.5rem, 5vw);
          max-width: 660px;
          text-align: right;
        }
        .h2-heading {
          font-family: var(--font-display);
          font-size: clamp(3rem, 5.5vw, 5.5rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: #f0ebe3;
          margin: 0;
        }
        .h2-sub {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(240, 235, 227, 0.85);
          margin: 0;
          max-width: 36ch;
          font-weight: 300;
        }
        .h2-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 2.5rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        .h2-btn-primary {
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1a1a18;
          background: #f0ebe3;
          text-decoration: none;
          padding: 0.9rem 2rem;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .h2-btn-primary:hover { background: var(--color-copper); color: #f0ebe3; }
        .h2-btn-text {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          letter-spacing: 0.04em;
          color: #f0ebe3;
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .h2-btn-text:hover { opacity: 1; }

        /* ── Philosophy ── */
        .h2-phil {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          padding: 8rem max(2rem, calc((100vw - 1200px) / 2 + 2.5rem));
        }
        .h2-phil-left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .h2-phil-heading {
          font-family: var(--font-display);
          font-size: clamp(2.25rem, 3.5vw, 3.5rem);
          font-weight: 300;
          line-height: 1.1;
          color: var(--color-dark);
          margin: 0;
          font-style: normal;
        }
        .h2-copper {
          color: var(--color-copper);
          font-style: italic;
        }
        .h2-phil-body {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          line-height: 1.85;
          color: var(--color-dark);
          opacity: 0.72;
          margin: 0;
          font-weight: 300;
        }
        .h2-phil-right {
          display: flex;
          align-items: center;
          padding-left: 3rem;
          border-left: 1px solid var(--color-subtle);
        }
        .h2-quote { margin: 0; padding: 0; border: none; }
        .h2-quote-mark {
          font-family: var(--font-display);
          font-size: 5rem;
          color: var(--color-copper);
          line-height: 0.8;
          display: block;
          margin-bottom: 1.25rem;
        }
        .h2-quote p {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.8vw, 2.25rem);
          font-style: italic;
          font-weight: 300;
          line-height: 1.35;
          color: var(--color-dark);
          margin: 0 0 1.75rem;
        }
        .h2-quote-attr {
          font-family: var(--font-body);
          font-size: 0.625rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-copper);
          border-top: 1px solid var(--color-subtle);
          padding-top: 1.25rem;
          display: block;
          width: 8rem;
        }

        /* ── Paths grid ── */
        .h2-paths {
          border-top: 1px solid var(--color-subtle);
          padding: 0 max(2rem, calc((100vw - 1200px) / 2 + 2.5rem));
        }
        .h2-paths-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .h2-path-item {
          padding: 4rem 2.5rem;
          border-right: 1px solid var(--color-subtle);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .h2-path-item:first-child { padding-left: 0; }
        .h2-path-item:last-child { border-right: none; padding-right: 0; }
        .h2-path-num {
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--color-copper);
        }
        .h2-path-title {
          font-family: var(--font-body);
          font-size: 0.625rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-dark);
          margin: 0;
        }
        .h2-path-desc {
          font-family: var(--font-body);
          font-size: 0.875rem;
          line-height: 1.7;
          color: var(--color-dark);
          opacity: 0.6;
          margin: 0;
          font-weight: 300;
          flex: 1;
        }
        .h2-path-arrow {
          font-size: 1rem;
          color: var(--color-dark);
          text-decoration: none;
          opacity: 0.4;
          display: inline-block;
          margin-top: 0.5rem;
          transition: opacity 0.2s, color 0.2s;
        }
        .h2-path-arrow:hover { opacity: 1; color: var(--color-copper); }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .h2-hero {
            justify-content: flex-start;
          }
          .h2-scrim {
            background: linear-gradient(to bottom, transparent 30%, rgba(10,8,6,0.78) 60%, rgba(10,8,6,0.92) 100%);
          }
          .h2-hero-content {
            padding: 6rem 2rem 5rem;
            max-width: 100%;
            text-align: left;
          }
          .h2-actions {
            justify-content: flex-start;
          }
          .h2-phil {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding: 5rem 2rem;
          }
          .h2-phil-right {
            padding-left: 0;
            border-left: none;
            padding-top: 3rem;
            border-top: 1px solid var(--color-subtle);
          }
          .h2-paths-grid {
            grid-template-columns: 1fr 1fr;
          }
          .h2-path-item:nth-child(2) { border-right: none; }
          .h2-path-item:nth-child(3) { padding-left: 0; }
          .h2-path-item:nth-child(3),
          .h2-path-item:nth-child(4) { border-top: 1px solid var(--color-subtle); }
        }
        @media (max-width: 560px) {
          .h2-paths-grid { grid-template-columns: 1fr; }
          .h2-path-item {
            border-right: none;
            border-top: 1px solid var(--color-subtle);
            padding: 2.5rem 0;
          }
          .h2-path-item:nth-child(3) { border-top: 1px solid var(--color-subtle); }
        }
      `}</style>
    </main>
  );
}
