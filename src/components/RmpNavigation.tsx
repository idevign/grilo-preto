"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Guided", href: "/guided" },
  { label: "In-Person", href: "/in-person" },
  { label: "Personalized", href: "/personalized" },
  { label: "Grilo", href: "/", mainSite: true },
  { label: "Find Your Starting Point", href: "/starting-point" },
];

function resolveHref(href: string, basePath: string) {
  if (href === "/") return basePath || "/";
  return `${basePath}${href}`;
}

function isActive(href: string, pathname: string) {
  const normalized = pathname.startsWith("/rmp")
    ? pathname.slice(4) || "/"
    : pathname;
  if (href === "/") return normalized === "/";
  return normalized === href || normalized.startsWith(href + "/");
}

export default function RmpNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const basePath = pathname.startsWith("/rmp") ? "/rmp" : "";
  const mainSiteHref = basePath ? "/" : "https://grilopreto.com";

  return (
    <header className="nav-header">
      <nav className="nav-inner">
        <Link href={basePath || "/"} className="nav-brand nav-brand--accent">
          RMP⁺
        </Link>

        <ul className="nav-links nav-desktop">
          {links.map((link) => {
            const active = !link.mainSite && isActive(link.href, pathname);
            return (
              <li key={link.href}>
                {link.mainSite ? (
                  <a href={mainSiteHref} className="nav-link">
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={resolveHref(link.href, basePath)}
                    className={active ? "nav-link active" : "nav-link"}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="nav-toggle"
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

      {open && (
        <div className="nav-mobile-panel">
          <ul className="nav-mobile-links">
            {links.map((link) => {
              const active = !link.mainSite && isActive(link.href, pathname);
              return (
                <li key={link.href}>
                  {link.mainSite ? (
                    <a href={mainSiteHref} onClick={() => setOpen(false)} className="nav-link">
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={resolveHref(link.href, basePath)}
                      onClick={() => setOpen(false)}
                      className={active ? "nav-link active" : "nav-link"}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
