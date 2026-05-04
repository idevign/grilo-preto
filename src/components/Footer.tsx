import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "The Movement Practice", href: "/movement-practice" },
  { label: "Capoeira", href: "/capoeira" },
  { label: "About", href: "/about" },
  { label: "Find Your Starting Point", href: "/rmp/starting-point" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#ece9e4",
        padding: "5rem 0 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* ── Top section: two columns ── */}
        <div className="footer-top">

          {/* Left: signature + tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link href="/">
              <Image
                src="/images/gp-signature.webp"
                alt="Grilo Preto"
                width={160}
                height={80}
                style={{ objectFit: "contain", objectPosition: "left center", opacity: 0.8 }}
              />
            </Link>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "var(--text-base)",
                color: "var(--color-mid)",
                margin: 0,
                letterSpacing: "0.01em",
              }}
            >
              Inviting a Return to Self
            </p>
          </div>

          {/* Right: nav links + address + social */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                color: "var(--color-mid)",
                margin: "1.25rem 0 0",
                lineHeight: 1.6,
              }}
            >
              Movement Ritual · 910 Santa Fe Dr Unit 8 · Denver, CO
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1.25rem" }}>
              <a
                href="https://www.instagram.com/grilopreto/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link footer-social-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
                className="footer-link footer-social-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom strip ── */}
        <div
          style={{
            borderTop: "1px solid var(--color-mid)",
            marginTop: "4rem",
            padding: "1.25rem 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            opacity: 0.5,
          }}
        >
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/privacy" className="footer-fine">Privacy Policy</Link>
            <Link href="/terms" className="footer-fine">Terms &amp; Conditions</Link>
          </div>
          <p className="footer-fine" style={{ margin: 0 }}>
            © 2026 Grilo Preto. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .footer-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 640px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .footer-link {
          font-family: var(--font-body);
          font-size: var(--text-base);
          color: var(--color-dark);
          text-decoration: none;
          transition: opacity 0.2s;
          opacity: 0.65;
        }
        .footer-link:hover { opacity: 1; }

        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .footer-fine {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          color: var(--color-dark);
          text-decoration: none;
          letter-spacing: 0.02em;
        }
      `}</style>
    </footer>
  );
}
