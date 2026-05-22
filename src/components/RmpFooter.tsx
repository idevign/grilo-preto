"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "The Practice", href: "/" },
  { label: "Guided", href: "/guided" },
  { label: "In-Person", href: "/in-person" },
  { label: "Personalized", href: "/personalized" },
  { label: "Find Your Starting Point", href: "/starting-point" },
];

function resolveHref(href: string, basePath: string) {
  if (href === "/") return basePath || "/";
  return `${basePath}${href}`;
}

export default function RmpFooter() {
  const pathname = usePathname();
  const basePath = pathname.startsWith("/rmp") ? "/rmp" : "";
  const mainSiteHref = basePath ? "/" : "https://grilopreto.com";

  return (
    <footer className="footer-root">
      <div className="footer-inner">

        <div className="footer-top">
          <div className="footer-left">
            <a href={mainSiteHref}>
              <Image
                src="/images/gp-signature.webp"
                alt="Grilo Preto"
                width={160}
                height={80}
                style={{ objectFit: "contain", objectPosition: "left center", opacity: 0.8 }}
              />
            </a>
            <p className="footer-tagline">Inviting a Return to Self</p>
          </div>

          <div className="footer-right">
            <nav aria-label="RMP footer navigation">
              <ul className="footer-nav">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={resolveHref(link.href, basePath)} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <p className="footer-address">
              Movement Ritual · 910 Santa Fe Dr Unit 8 · Denver, CO
            </p>

            <div className="footer-social-group">
              <a
                href="https://www.instagram.com/grilopreto/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link footer-social"
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
                className="footer-link footer-social"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link href="/privacy" className="footer-fine">Privacy Policy</Link>
            <Link href="/terms" className="footer-fine">Terms &amp; Conditions</Link>
          </div>
          <p className="footer-fine" style={{ margin: 0 }}>
            © 2026 Grilo Preto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
