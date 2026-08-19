import Image from "next/image";

export default function ResetPage() {
  return (
    <main className="reset-root">

      <div className="reset-bg" aria-hidden>
        <Image
          src="/images/hero-hand.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="reset-bg-img"
        />
        <div className="reset-bg-veil" />
      </div>

      <div className="reset-stage">
        <div className="reset-card">
          <p className="reset-eyebrow">Pause &middot; Reset &middot; Return</p>
          <h1 className="reset-title">Inviting a<br />Return to Self.</h1>
          <p className="reset-blurb">
            Every good practice honors its pauses &mdash; this site is taking one.
            A breath. A refresh. Back soon.
          </p>

          <div className="reset-breath">
            <p className="reset-invite">While you&rsquo;re here, take one slow breath with me. Or three.</p>
            <div
              className="breath-guide"
              role="img"
              aria-label="A circle that slowly expands and contracts, pacing one calm breath every ten seconds"
            >
              <span className="breath-ring-outer" aria-hidden />
              <span className="breath-ring" aria-hidden />
              <span className="breath-word breath-word-in" aria-hidden>inhale</span>
              <span className="breath-word breath-word-out" aria-hidden>exhale</span>
              <span className="breath-word breath-word-still" aria-hidden>breathe</span>
            </div>
          </div>

          <div className="reset-sig">
            <Image
              src="/images/gp-signature.webp"
              alt="Grilo Preto"
              width={150}
              height={75}
              style={{ objectFit: "contain", objectPosition: "center", opacity: 0.85 }}
            />
          </div>
        </div>
      </div>

      <footer className="reset-meta">
        <div className="reset-meta-links">
          <a
            href="https://www.instagram.com/grilopreto/"
            target="_blank"
            rel="noopener noreferrer"
            className="reset-meta-link"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@grilopretocapoeira"
            target="_blank"
            rel="noopener noreferrer"
            className="reset-meta-link"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
            YouTube
          </a>
        </div>
        <p className="reset-meta-line">Movement Ritual &middot; 910 Santa Fe Dr Unit 8 &middot; Denver, CO</p>
        <p className="reset-meta-line">&copy; 2026 Grilo Preto</p>
      </footer>

      <style>{`
        .reset-root {
          position: relative;
          isolation: isolate;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
        }

        /* ── Background: the photograph, blurred, behind a veil ── */
        .reset-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }
        .reset-bg-img {
          object-fit: cover;
          object-position: 32% 42%;
          filter: grayscale(100%) contrast(1.06) blur(9px);
          transform: scale(1.07);
          animation:
            bg-in 1.4s ease-out both,
            bg-drift 36s ease-in-out 1.4s infinite alternate;
        }
        @keyframes bg-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes bg-drift {
          from { transform: scale(1.07); }
          to   { transform: scale(1.12); }
        }
        .reset-bg-veil {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top,
              rgba(244, 240, 237, 0.9) 0%,
              rgba(244, 240, 237, 0.45) 90px,
              rgba(244, 240, 237, 0) 180px),
            radial-gradient(62% 70% at 50% 44%,
              rgba(244, 240, 237, 0.95) 0%,
              rgba(244, 240, 237, 0.9) 42%,
              rgba(244, 240, 237, 0.68) 68%,
              rgba(244, 240, 237, 0.28) 88%,
              rgba(244, 240, 237, 0.08) 100%);
        }

        /* ── Stage: content floats right of the hand ── */
        .reset-stage {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(2.5rem, 6vh, 4rem) var(--site-gutter);
        }
        .reset-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.75rem;
          width: min(560px, 92%);
        }
        .reset-eyebrow {
          font-family: var(--font-label);
          font-size: var(--text-xs);
          letter-spacing: var(--tracking-widest);
          text-transform: uppercase;
          color: var(--color-text-accent);
          margin: 0;
        }
        .reset-title { margin: 0; }
        .reset-blurb {
          font-size: var(--text-body-lg);
          font-weight: 300;
          line-height: var(--leading-loose);
          color: var(--color-text-secondary);
          max-width: 44ch;
          margin: 0;
        }

        /* ── Breath guide ── */
        .reset-breath {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .reset-invite {
          font-family: var(--font-display);
          font-style: italic;
          font-size: var(--text-md);
          font-weight: 300;
          color: var(--color-text-primary);
          margin: 0;
        }
        .breath-guide {
          position: relative;
          width: 150px;
          height: 150px;
        }
        .breath-ring-outer,
        .breath-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 128px;
          height: 128px;
          margin: -64px 0 0 -64px;
          border-radius: 50%;
        }
        .breath-ring-outer {
          border: 1px solid var(--color-border);
        }
        .breath-ring {
          border: 1px solid var(--color-text-accent);
          animation: breath-cycle 10s ease-in-out infinite;
        }
        .breath-word {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-label);
          font-size: var(--text-xs);
          letter-spacing: var(--tracking-widest);
          color: var(--color-text-primary);
          opacity: 0;
        }
        .breath-word-in  { animation: breath-word-in 10s linear infinite; }
        .breath-word-out { animation: breath-word-out 10s linear infinite; }

        @keyframes breath-cycle {
          0%   { transform: scale(0.62); }
          42%  { transform: scale(1); }
          52%  { transform: scale(1); }
          96%  { transform: scale(0.62); }
          100% { transform: scale(0.62); }
        }
        @keyframes breath-word-in {
          0%   { opacity: 0; }
          8%   { opacity: 0.9; }
          36%  { opacity: 0.9; }
          46%  { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes breath-word-out {
          0%, 52%  { opacity: 0; }
          60%  { opacity: 0.9; }
          88%  { opacity: 0.9; }
          98%  { opacity: 0; }
          100% { opacity: 0; }
        }

        /* ── Signature: draws itself on ── */
        .reset-sig { margin-top: 0.25rem; }
        .reset-sig img {
          clip-path: inset(-8% 105% -8% -5%);
          animation: sig-draw 1.6s ease-in-out 1.4s forwards;
        }
        @keyframes sig-draw {
          to { clip-path: inset(-8% -5% -8% -5%); }
        }

        /* ── Meta bar ── */
        .reset-meta {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: center;
          column-gap: 2.5rem;
          row-gap: 0.75rem;
          border-top: 1px solid var(--color-border);
          margin: 0 var(--site-gutter);
          padding: 1.5rem 0;
        }
        .reset-meta-links {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }
        .reset-meta-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-label);
          font-size: var(--text-xs);
          letter-spacing: var(--tracking-wider);
          text-transform: uppercase;
          color: var(--color-text-secondary);
          transition: color 0.2s;
        }
        .reset-meta-link:hover { color: var(--color-text-primary); }
        .reset-meta-line {
          font-family: var(--font-label);
          font-size: var(--text-xs);
          letter-spacing: var(--tracking-wide);
          color: var(--color-text-secondary);
          margin: 0;
        }

        /* ── Entrance ── */
        .reset-card > *, .reset-meta {
          animation: reset-rise 0.9s var(--easing) both;
        }
        .reset-card > *:nth-child(1) { animation-delay: 0.05s; }
        .reset-card > *:nth-child(2) { animation-delay: 0.12s; }
        .reset-card > *:nth-child(3) { animation-delay: 0.2s; }
        .reset-card > *:nth-child(4) { animation-delay: 0.28s; }
        .reset-card > *:nth-child(5) { animation-delay: 0.36s; }
        .reset-meta { animation-delay: 0.45s; }
        @keyframes reset-rise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: none; }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .reset-card > *, .reset-meta { animation: none; }
          .reset-bg-img { animation: none; }
          .breath-ring { animation: none; transform: scale(0.82); }
          .breath-word-in, .breath-word-out { animation: none; opacity: 0; }
          .breath-word-still { opacity: 0.9; }
          .reset-sig img { animation: none; clip-path: none; }
        }

        /* ── Short desktop viewports: keep it one screen ── */
        @media (min-width: 901px) and (max-height: 800px) {
          .reset-card { gap: 1.25rem; }
          .reset-title { font-size: clamp(34px, 6.5vh, 56px); }
          .breath-guide { width: 116px; height: 116px; }
          .breath-ring-outer, .breath-ring {
            width: 104px;
            height: 104px;
            margin: -52px 0 0 -52px;
          }
          .reset-sig img { width: 126px; height: 63px; }
          .reset-meta { padding: 1.1rem 0; }
        }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .reset-card { width: 100%; }
          .reset-bg-img { object-position: 22% 40%; }
          .reset-bg-veil {
            background:
              linear-gradient(to bottom,
                rgba(244, 240, 237, 0.94) 0%,
                rgba(244, 240, 237, 0.86) 35%,
                rgba(244, 240, 237, 0.64) 70%,
                rgba(244, 240, 237, 0.42) 100%);
          }
          .reset-meta { flex-direction: column; align-items: center; text-align: center; }
        }
      `}</style>
    </main>
  );
}
