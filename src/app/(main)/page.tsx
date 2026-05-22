import Link from "next/link";

const PATHS = [
  { num: "01", title: "Movement Practice", desc: "Functional movement, mobility, and embodied awareness.", href: "/movement-practice" },
  { num: "02", title: "Capoeira", desc: "The art of movement, music, and liberation.", href: "/capoeira" },
  { num: "03", title: "Journal", desc: "Reflections, lessons, and ongoing practice.", href: "/journal" },
  { num: "04", title: "About", desc: "Two decades of practice. One invitation to begin.", href: "/about" },
];

export default function Home() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-content" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
          <h1>Inviting a<br />Return to Self.</h1>
          <h2 className="hero-eyebrow">Rooted in tradition. Applied to life.</h2>
          <p className="hero-blurb">
            A path of movement, culture, and self-mastery. Capoeira. The Movement Practice. A way of life.
          </p>
          <div className="home-hero-actions">
            <Link href="/movement-practice" className="home-btn-primary">Explore the Practice</Link>
            <Link href="/rmp/starting-point" className="home-btn-text">Find your starting point &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="page-section home-phil">
        <div className="home-phil-left">
          <p className="section-label">The Practice</p>
          <h2>Freedom through<br /><em>Discipline.</em></h2>
          <p className="body-prose">
            I have lived inside this practice for two decades. Through capoeira and movement. Not as
            techniques to master, but as a way of asking a question I kept needing to return to: what
            does it mean to truly be free?
          </p>
          <Link href="/about" className="link-cta" style={{ marginTop: "1rem" }}>Our story &rarr;</Link>
        </div>
        <div className="home-phil-right">
          <blockquote className="home-editorial-quote">
            <span className="home-quote-mark">&ldquo;</span>
            <p>Discipline creates freedom.<br />Freedom reveals who you are.</p>
            <footer>Grilo Preto</footer>
          </blockquote>
        </div>
      </section>

      {/* ── Paths grid ── */}
      <section className="home-paths-section">
        <div className="home-paths-grid">
          {PATHS.map((p) => (
            <div key={p.href} className="home-path-item">
              <div className="home-path-bg-img" />
              <div className="home-path-content">
                <span className="home-path-num">{p.num}</span>
                <h3 className="home-path-title">{p.title}</h3>
                <p className="home-path-desc">{p.desc}</p>
                <Link href={p.href} className="home-path-arrow" aria-label={`Go to ${p.title}`}>&rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        /* ── Hero actions ── */
        .home-hero-actions {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        .home-btn-primary {
          font-family: var(--font-label);
          font-size: var(--text-xs);
          letter-spacing: var(--tracking-widest);
          text-transform: uppercase;
          color: var(--color-text-inverse);
          background: var(--color-text-primary);
          text-decoration: none;
          padding: 0.9rem 2rem;
          transition: background 0.2s;
          white-space: nowrap;
        }
        .home-btn-primary:hover { background: var(--color-text-accent); }
        .home-btn-text {
          font-family: var(--font-label);
          font-size: var(--text-xs);
          letter-spacing: var(--tracking-widest);
          text-transform: uppercase;
          color: var(--color-text-primary);
          text-decoration: none;
          opacity: 0.55;
          transition: opacity 0.2s;
        }
        .home-btn-text:hover { opacity: 1; }

        /* ── Philosophy ── */
        .home-phil {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
        }
        .home-phil-left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .home-phil-right {
          display: flex;
          align-items: center;
          padding-left: 3rem;
          border-left: 1px solid var(--color-border);
        }
        .home-editorial-quote { margin: 0; padding: 0; border: none; }
        .home-quote-mark {
          font-family: var(--font-display);
          font-size: var(--text-3xl);
          color: var(--color-text-accent);
          line-height: 0.8;
          display: block;
          margin-bottom: 1.25rem;
        }
        .home-editorial-quote p {
          font-family: var(--font-display);
          font-size: clamp(var(--text-md), 2.8vw, var(--text-lg));
          font-style: italic;
          font-weight: 300;
          line-height: 1.35;
          margin: 0 0 1.75rem;
        }
        .home-editorial-quote footer {
          font-family: var(--font-label);
          font-size: var(--text-xs);
          letter-spacing: var(--tracking-widest);
          text-transform: uppercase;
          color: var(--color-text-accent);
          border-top: 1px solid var(--color-border);
          padding-top: 1.25rem;
          display: block;
          width: 8rem;
        }

        /* ── Paths grid ── */
        .home-paths-section {
          border-top: 1px solid var(--color-border);
          padding: 0 var(--site-gutter);
          overflow: hidden;
        }
        .home-paths-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .home-path-item {
          padding: 7rem 2.5rem;
          border-right: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          position: relative;
          overflow: hidden;
        }
        .home-path-item:last-child { border-right: none; }
        .home-path-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }
        .home-path-num {
          font-family: var(--font-label);
          font-size: var(--text-xs);
          letter-spacing: var(--tracking-widest);
          color: var(--color-text-accent);
        }
        .home-path-title {
          font-family: var(--font-label);
          font-size: var(--text-xs);
          font-weight: 400;
          letter-spacing: var(--tracking-widest);
          text-transform: uppercase;
          color: var(--color-text-primary);
          margin: 0;
          transition: color 0.3s;
        }
        .home-path-desc {
          font-size: var(--text-base);
          line-height: 1.7;
          color: var(--color-text-primary);
          opacity: 0.6;
          margin: 0;
          font-weight: 300;
          flex: 1;
        }
        .home-path-arrow {
          font-size: var(--text-base);
          text-decoration: none;
          opacity: 0.4;
          display: inline-block;
          margin-top: 0.5rem;
          transition: opacity 0.2s;
        }
        .home-path-arrow:hover { opacity: 1; }

        @media (max-width: 900px) {
          .home-phil { grid-template-columns: 1fr; gap: 3rem; }
          .home-phil-right { padding-left: 0; border-left: none; padding-top: 3rem; border-top: 1px solid var(--color-border); }
          .home-paths-grid { grid-template-columns: 1fr 1fr; }
          .home-path-item:nth-child(2) { border-right: none; }
          .home-path-item:nth-child(3),
          .home-path-item:nth-child(4) { border-top: 1px solid var(--color-border); }
        }
        @media (max-width: 560px) {
          .home-paths-grid { grid-template-columns: 1fr; }
          .home-path-item { border-right: none; border-top: 1px solid var(--color-border); padding: 4rem 2rem; }
          .home-path-item:first-child { border-top: none; }
        }
      `}</style>
    </main>
  );
}
