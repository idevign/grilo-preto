"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "The Practice", href: "/" },
  { label: "Guided", href: "/guided" },
  { label: "In-Person", href: "/in-person" },
  { label: "Personalized", href: "/personalized" },
  { label: "About", href: "/about" },
  { label: "Find Your Starting Point", href: "/starting-point" },
];

function resolveHref(href: string, basePath: string) {
  if (href === "/") return basePath || "/";
  return `${basePath}${href}`;
}

function isActive(href: string, pathname: string) {
  // Normalize: strip /rmp prefix if present so checks are consistent
  const normalized = pathname.startsWith("/rmp")
    ? pathname.slice(4) || "/"
    : pathname;
  if (href === "/") return normalized === "/";
  return normalized === href || normalized.startsWith(href + "/");
}

export default function RmpNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // In dev, pages live at /rmp/*; on the subdomain they live at /*
  const basePath = pathname.startsWith("/rmp") ? "/rmp" : "";

  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-subtle)",
        backgroundColor: "var(--color-base)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1.25rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href={basePath || "/"}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: "var(--color-copper)",
            textDecoration: "none",
          }}
        >
          RMP⁺
        </Link>

        {/* Desktop links */}
        <ul
          className="rmp-nav-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <li key={link.href}>
                <Link
                  href={resolveHref(link.href, basePath)}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "var(--color-dark)",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                    opacity: active ? 1 : 0.7,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.opacity = "1"; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.opacity = "0.7"; }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rmp-nav-toggle"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--color-dark)",
          }}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: "1px solid var(--color-subtle)", padding: "1rem 1.5rem 1.5rem" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {links.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <li key={link.href}>
                  <Link
                    href={resolveHref(link.href, basePath)}
                    onClick={() => setOpen(false)}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      color: "var(--color-dark)",
                      textDecoration: "none",
                      opacity: active ? 1 : 0.7,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .rmp-nav-desktop { display: none !important; }
          .rmp-nav-toggle  { display: block !important; }
        }
      `}</style>
    </header>
  );
}
