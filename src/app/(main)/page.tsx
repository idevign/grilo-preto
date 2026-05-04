import Link from "next/link";
// import HeroLensCanvas from "@/components/HeroLensCanvas";

const PATHS = [
  {
    num: "01",
    title: "Movement Practice",
    desc: "Functional movement, mobility, and embodied awareness.",
    href: "/movement-practice",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  },
  {
    num: "02",
    title: "Capoeira",
    desc: "The art of movement, music, and liberation.",
    href: "/capoeira",
    img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80",
  },
  {
    num: "03",
    title: "Journal",
    desc: "Reflections, lessons, and ongoing practice.",
    href: "/journal",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
  },
  {
    num: "04",
    title: "About",
    desc: "Two decades of practice. One invitation to begin.",
    href: "/about",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
];

export default function Home() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="h2-hero">

        <div className="h2-scrim" />

        <div className="h2-hero-content">
          <h1 className="h2-heading">
            Inviting a<br />Return to Self.
          </h1>
          <h2 className="h2-eyebrow">Rooted in tradition. Applied to life.</h2>
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
              <div className="h2-path-bg">
                <img src={p.img} alt="" aria-hidden="true" />
              </div>
              <div className="h2-path-scrim" />
              <div className="h2-path-content">
                <span className="h2-path-num">{p.num}</span>
                <h3 className="h2-path-title">{p.title}</h3>
                <p className="h2-path-desc">{p.desc}</p>
                <Link href={p.href} className="h2-path-arrow" aria-label={`Go to ${p.title}`}>
                  &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        /* ── Shared ── */
        .h2-eyebrow {
          font-family: var(--font-body);
          font-size: var(--text-base);
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--color-copper);
          margin: 0;
          text-shadow: 0 1px 3px rgba(0,0,0,0.6);
        }
        .h2-label {
          font-family: var(--font-body);
          font-size: var(--text-xs);
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
          justify-content: flex-start;
          overflow: hidden;
          background: url('/images/hero-hand.jpg') center / cover no-repeat;
        }

        .h2-scrim {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(to left, transparent 20%, rgba(10,8,6,0.75) 55%, rgba(10,8,6,0.88) 100%);
          pointer-events: none;
        }

        .h2-hero-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 7rem 2rem 7rem max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem));
          max-width: 660px;
          text-align: left;
        }
        .h2-heading {
          font-family: var(--font-hero);
          font-size: clamp(var(--text-2xl), 7.5vw, var(--text-4xl));
          font-weight: 700;
          font-style: italic;
          line-height: 0.95;
          letter-spacing: -0.01em;
          color: #f0ebe3;
          margin: 0;
        }
        .h2-sub {
          font-family: var(--font-body);
          font-size: var(--text-base);
          line-height: 1.8;
          color: rgba(240, 235, 227, 0.85);
          margin: 0;
          max-width: 36ch;
          font-weight: 300;
        }
        .h2-actions {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 2.5rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        .h2-btn-primary {
          font-family: var(--font-body);
          font-size: var(--text-xs);
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
          font-size: var(--text-xs);
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
          padding: 8rem max(2rem, calc((100vw - 1200px) / 2 + 1.5rem));
        }
        .h2-phil-left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .h2-phil-heading {
          font-family: var(--font-display);
          font-size: clamp(var(--text-lg), 3.5vw, var(--text-xl));
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
          font-size: var(--text-base);
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
          font-size: var(--text-3xl);
          color: var(--color-copper);
          line-height: 0.8;
          display: block;
          margin-bottom: 1.25rem;
        }
        .h2-quote p {
          font-family: var(--font-display);
          font-size: clamp(var(--text-md), 2.8vw, var(--text-lg));
          font-style: italic;
          font-weight: 300;
          line-height: 1.35;
          color: var(--color-dark);
          margin: 0 0 1.75rem;
        }
        .h2-quote-attr {
          font-family: var(--font-body);
          font-size: var(--text-xs);
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
          padding: 0 max(2rem, calc((100vw - 1200px) / 2 + 1.5rem));
          overflow: hidden;
        }
        .h2-paths-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .h2-path-item {
          padding: 7rem 2.5rem;
          border-right: 1px solid var(--color-subtle);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          position: relative;
          overflow: hidden;
        }
        .h2-path-item:last-child { border-right: none; }
        .h2-path-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .h2-path-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .h2-path-scrim {
          position: absolute;
          inset: 0;
          background: rgba(10, 8, 6, 0.55);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }
        .h2-path-item:hover .h2-path-bg,
        .h2-path-item:hover .h2-path-scrim {
          opacity: 1;
        }
        .h2-path-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }
        .h2-path-item:hover .h2-path-title {
          transform: scale(1.12);
          color: #f0ebe3;
        }
        .h2-path-item:hover .h2-path-desc {
          opacity: 0;
        }
        .h2-path-item:hover .h2-path-num {
          color: var(--color-copper);
        }
        .h2-path-item:hover .h2-path-arrow {
          opacity: 1;
          color: #f0ebe3;
        }
        .h2-path-num {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          letter-spacing: 0.08em;
          color: var(--color-copper);
        }
        .h2-path-title {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-dark);
          margin: 0;
          transform-origin: left center;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .h2-path-desc {
          font-family: var(--font-body);
          font-size: var(--text-base);
          line-height: 1.7;
          color: var(--color-dark);
          opacity: 0.6;
          margin: 0;
          font-weight: 300;
          flex: 1;
          transition: opacity 0.25s ease;
        }
        .h2-path-arrow {
          font-size: var(--text-base);
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
          .h2-scrim {
            background: linear-gradient(to bottom, transparent 30%, rgba(10,8,6,0.78) 60%, rgba(10,8,6,0.92) 100%);
          }
          .h2-hero-content {
            padding: 6rem 2rem 5rem;
            max-width: 100%;
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
          .h2-path-item:nth-child(3),
          .h2-path-item:nth-child(4) { border-top: 1px solid var(--color-subtle); }
        }
        @media (max-width: 560px) {
          .h2-paths-grid { grid-template-columns: 1fr; }
          .h2-path-item {
            border-right: none;
            border-top: 1px solid var(--color-subtle);
            padding: 4rem 2rem;
          }
          .h2-path-item:first-child { border-top: none; }
        }
      `}</style>
    </main>
  );
}
