"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

type Path = "guided" | "in-person" | "personalized";
type Mode = "landing" | "entering" | "content" | "leaving";

const SERIF = 'var(--font-cormorant), "Cormorant Garamond", Georgia, serif';
const SANS  = 'var(--font-dm-sans), "DM Sans", system-ui, sans-serif';

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const panels: { id: Path; num: string; title: string; subtitle: string }[] = [
  { id: "guided",       num: "01", title: "RMP+ Guided",       subtitle: "The foundation. Anywhere." },
  { id: "in-person",    num: "02", title: "RMP+ In-Person",    subtitle: "Denver. Mon & Wed. Noon." },
  { id: "personalized", num: "03", title: "RMP+ Personalized", subtitle: "Private. Bespoke. Built for you." },
];

const clipStarts = [
  "inset(0% 66.67% 0% 0%)",
  "inset(0% 33.33% 0% 33.33%)",
  "inset(0% 0% 0% 66.67%)",
];

const nextPath: Record<Path, Path | null> = {
  "guided": "in-person",
  "in-person": "personalized",
  "personalized": null,
};

/* ── Content primitives ── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: SANS, fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6a6560", margin: "0 0 20px", fontWeight: 400 }}>
      {children}
    </p>
  );
}

function Headline({ children, maxWidth = "700px" }: { children: React.ReactNode; maxWidth?: string }) {
  return (
    <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(44px, 6vw, 78px)", color: "#cdc8bf", margin: 0, lineHeight: 1.0, fontWeight: 400, maxWidth }}>
      {children}
    </h2>
  );
}

function Body({ children, maxWidth = "480px", mt = "32px", color = "#8a857e" }: { children: React.ReactNode; maxWidth?: string; mt?: string; color?: string }) {
  return (
    <p style={{ fontFamily: SANS, fontSize: "15px", color, fontWeight: 300, lineHeight: 1.8, maxWidth, marginTop: mt, marginBottom: 0 }}>
      {children}
    </p>
  );
}

function ItemList({ items, gap = "40px", valueColor = "#cdc8bf" }: { items: { label: string; value: string }[]; gap?: string; valueColor?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap, maxWidth: "440px" }}>
      {items.map(item => (
        <div key={item.label}>
          <p style={{ fontFamily: SANS, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6a6560", margin: "0 0 8px", fontWeight: 400 }}>
            {item.label}
          </p>
          <p style={{ fontFamily: SANS, fontSize: "15px", color: valueColor, fontWeight: 300, margin: 0, lineHeight: 1.6 }}>
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function CtaLink({ href, text }: { href: string; text: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
      <a href={href} style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "34px", color: "#cdc8bf", fontWeight: 400, textDecoration: "underline", textDecorationColor: "#3a3530", textUnderlineOffset: "5px" }}>
        {text}
      </a>
      <p style={{ fontFamily: SANS, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4a4740", margin: 0 }}>
        grilopreto.com
      </p>
    </div>
  );
}

function MobileNext({ path, onEnter }: { path: Path; onEnter: (p: Path, i: number) => void }) {
  const idx = panels.findIndex(p => p.id === path);
  const label = panels[idx].title;
  return (
    <div style={{ padding: "48px 10vw", borderTop: "1px solid #1e1c1a", display: "flex", flexDirection: "column", gap: "16px" }}>
      <p style={{ fontFamily: SANS, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3a3835", margin: 0 }}>Next</p>
      <button
        onClick={() => onEnter(path, idx)}
        style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "22px", color: "#6a6560", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}
      >
        {label}
      </button>
    </div>
  );
}

/* ── Path content ── */

function GuidedContent({ onEnter }: { onEnter: (p: Path, i: number) => void }) {
  return (
    <>
      <section className="r3-section" style={{ background: "#0e0d0b" }}>
        <div style={{ padding: "0 10vw" }}>
          <SectionLabel>RMP+ Guided</SectionLabel>
          <Headline>The foundation, in your own space.</Headline>
          <Body>Two decades of practice, distilled into something you can return to daily. Three sessions per week. A Daily Ritual. Self-guided. No live sessions. Consistency is the only requirement.</Body>
        </div>
      </section>

      <section className="r3-section" style={{ background: "#111010" }}>
        <div style={{ padding: "0 10vw" }}>
          <ItemList
            items={[
              { label: "Sessions",     value: "3 per week, fully programmed" },
              { label: "Daily Ritual", value: "Changes each phase, designed for daily use" },
              { label: "Platform",     value: "Everfit. iOS and Android" },
            ]}
          />
        </div>
      </section>

      <section className="r3-section" style={{ background: "#f0ebe3" }}>
        <div style={{ padding: "0 10vw" }}>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "42px", color: "#3a3530", margin: "0 0 0px", fontWeight: 400 }}>
            First Wave
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginTop: "20px" }}>
            <span style={{ fontFamily: SANS, fontWeight: 300, fontSize: "clamp(88px, 13vw, 144px)", color: "#1a1815", lineHeight: 1 }}>$44</span>
            <span style={{ fontFamily: SANS, fontSize: "18px", color: "#5a5550", fontWeight: 300 }}>/month</span>
          </div>
          <Body mt="28px" color="#5a5550">
            Founding rate. Held permanently for anyone who remains continuously subscribed. When the rate moves, it moves only for those who join after. Waitlist opens May 1st.
          </Body>
          <p style={{ fontFamily: SANS, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a958e", marginTop: "16px", marginBottom: 0 }}>
            From July 2026: $88/month
          </p>
        </div>
      </section>

      <section className="r3-section r3-cta-sec" style={{ background: "#0e0d0b" }}>
        <CtaLink href="/rmp/guided" text="Join the waitlist" />
        <div className="r3-mobile-next">
          <MobileNext path="in-person" onEnter={onEnter} />
        </div>
      </section>
    </>
  );
}

function InPersonContent({ onEnter }: { onEnter: (p: Path, i: number) => void }) {
  return (
    <>
      <section className="r3-section" style={{ background: "#0e0d0b" }}>
        <div style={{ padding: "0 10vw" }}>
          <SectionLabel>RMP+ In-Person</SectionLabel>
          <Headline>In-person. Denver. Monday and Wednesday at noon.</Headline>
          <Body>This is not a class you drop into. It is a practice you use to explore and refine who you are over time.</Body>
        </div>
      </section>

      <section className="r3-section" style={{ background: "#111010" }}>
        <div style={{ padding: "0 10vw", maxWidth: "calc(540px + 10vw)" }}>
          <Body mt="0">Doors open at 11:50am. That first twenty minutes is not waiting time. It is the beginning of the session. At 12:10pm we open together. The physical demands are real. The precision required is equally real.</Body>
        </div>
      </section>

      <section className="r3-section" style={{ background: "#0e0d0b" }}>
        <div style={{ padding: "0 10vw" }}>
          <ItemList
            gap="48px"
            items={[
              { label: "Days and Time", value: "Monday and Wednesday. 12:00pm to 1:15pm" },
              { label: "Membership",    value: "$222/month recommended contribution" },
              { label: "Location",      value: "910 Santa Fe Dr, Studio 8. Denver" },
              { label: "First session", value: "Complimentary" },
            ]}
          />
        </div>
      </section>

      <section className="r3-section r3-cta-sec" style={{ background: "#111010" }}>
        <CtaLink href="/rmp/starting-point" text="Find your starting point" />
        <div className="r3-mobile-next">
          <MobileNext path="personalized" onEnter={onEnter} />
        </div>
      </section>
    </>
  );
}

function PersonalizedContent({ onEnter }: { onEnter: (p: Path, i: number) => void }) {
  return (
    <>
      <section className="r3-section" style={{ background: "#0e0d0b" }}>
        <div style={{ padding: "0 10vw" }}>
          <SectionLabel>RMP+ Personalized</SectionLabel>
          <Headline>Private. Bespoke. Built entirely around you.</Headline>
          <Body>Capable in almost every context. And still carrying something that has not yet been resolved.</Body>
        </div>
      </section>

      <section className="r3-section" style={{ background: "#111010" }}>
        <div style={{ padding: "0 10vw", maxWidth: "calc(540px + 10vw)" }}>
          <blockquote style={{ borderLeft: "1px solid #2a2826", paddingLeft: "28px", margin: "0 0 28px" }}>
            <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "22px", color: "#9a9490", fontWeight: 400, lineHeight: 1.55, margin: 0 }}>
              You are not looking to become someone different. You are looking to stop being governed by standards and definitions that were never yours to begin with.
            </p>
          </blockquote>
          <Body mt="0">A private engagement built from the ground up. We work through the body because that is where the patterns actually live.</Body>
        </div>
      </section>

      <section className="r3-section" style={{ background: "#0e0d0b" }}>
        <div style={{ padding: "0 10vw" }}>
          <ItemList
            gap="48px"
            items={[
              { label: "Format",   value: "1:1 or small group (2 max), weekly or biweekly" },
              { label: "Platform", value: "RMP+ Guided included, bespoke curriculum" },
              { label: "Remote",   value: "Video feedback via app, direct feedback" },
              { label: "Pricing",  value: "Starting at $333/month" },
            ]}
          />
        </div>
      </section>

      <section className="r3-section" style={{ background: "#111010" }}>
        <div style={{ padding: "0 10vw" }}>
          <Body mt="0" maxWidth="480px">One completed phase of RMP+ Guided or RMP+ In-Person is recommended before applying.</Body>
        </div>
      </section>

      <section className="r3-section r3-cta-sec" style={{ background: "#0e0d0b" }}>
        <CtaLink href="/rmp/starting-point" text="Find your starting point" />
      </section>
    </>
  );
}

/* ── Landing panel ── */

function LandingPanel({ panel, index, onEnter }: { panel: typeof panels[0]; index: number; onEnter: (p: Path, i: number) => void }) {
  return (
    <div className="r3-panel">
      <div className="r3-noise" />
      <span className="r3-panel-num">{panel.num}</span>
      <div className="r3-panel-center">
        <div className="r3-panel-info">
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "20px", color: "#cdc8bf", margin: "0 0 8px", fontWeight: 400, textAlign: "center" }}>
            {panel.title}
          </p>
          <p style={{ fontFamily: SANS, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6a6560", margin: "0 0 28px", textAlign: "center" }}>
            {panel.subtitle}
          </p>
        </div>
        <button className="r3-threshold" onClick={() => onEnter(panel.id, index)}>
          <span className="r3-threshold-text">enter</span>
        </button>
      </div>
    </div>
  );
}

/* ── Nav ── */

function Nav({ mode, activePath, onEnter, onReturn }: { mode: Mode; activePath: Path | null; onEnter: (p: Path, i: number) => void; onReturn: () => void }) {
  const inContent = mode === "content" || mode === "leaving";
  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "20px 28px", zIndex: 200, pointerEvents: "none" }}>
        <button
          onClick={onReturn}
          style={{ fontFamily: SERIF, fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#cdc8bf", background: "none", border: "none", cursor: "pointer", padding: 0, pointerEvents: "auto" }}
        >
          Grilo Preto
        </button>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px", pointerEvents: "auto" }}>
          {panels.map((p, i) => (
            <button
              key={p.id}
              onClick={() => onEnter(p.id, i)}
              style={{
                fontFamily: SANS,
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: inContent && activePath === p.id ? "#c9baa0" : "#6a6560",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "color 0.2s",
              }}
            >
              {p.id === "guided" ? "Guided" : p.id === "in-person" ? "In-Person" : "Personalized"}
            </button>
          ))}
        </div>
      </div>
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "0 28px 20px", zIndex: 200, pointerEvents: "none" }}>
        <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "11px", color: "#3a3835" }}>
          Inviting a return to self.
        </span>
        <span style={{ fontFamily: SANS, fontSize: "10px", color: "#3a3835" }}>grilopreto.com</span>
      </div>
    </>
  );
}

/* ── Page ── */

export default function RmpThree() {
  const [mode, setMode]             = useState<Mode>("landing");
  const [activePath, setActivePath] = useState<Path | null>(null);
  const [pendingPath, setPendingPath] = useState<Path>("guided");
  const [clickedIndex, setClickedIndex] = useState(0);

  const overlayRef  = useRef<HTMLDivElement>(null);
  const landingRef  = useRef<HTMLDivElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const lenisRef    = useRef<Lenis | null>(null);
  const gsapCtxRef  = useRef<ReturnType<typeof gsap.context> | null>(null);
  const modeRef     = useRef(mode);
  modeRef.current   = mode;

  /* ── Lenis setup ── */
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1 });
    lenisRef.current = lenis;
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  /* ── Horizontal scroll ScrollTrigger ── */
  useEffect(() => {
    if (mode !== "content") return;
    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    if (!wrapper || !track) return;
    if (window.innerWidth <= 768) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapper);

    gsapCtxRef.current = ctx;
    return () => {
      ctx.revert();
      gsapCtxRef.current = null;
    };
  }, [mode, activePath]);

  /* ── Escape to landing ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modeRef.current === "content") returnToLanding();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const enterPath = useCallback((path: Path, index: number) => {
    const current = modeRef.current;

    /* Direct path switch while in content */
    if (current === "content") {
      const content = contentRef.current;
      if (!content) return;
      gsap.to(content, {
        opacity: 0,
        duration: 0.15,
        onComplete: () => {
          setActivePath(path);
          gsap.fromTo(content, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        },
      });
      return;
    }

    if (current !== "landing") return;

    setPendingPath(path);
    setClickedIndex(index);
    setMode("entering");
  }, []);

  /* ── Run enter animation once mode = entering ── */
  useEffect(() => {
    if (mode !== "entering") return;
    const overlay  = overlayRef.current;
    const landing  = landingRef.current;
    if (!overlay || !landing) return;

    gsap.set(overlay, { clipPath: clipStarts[clickedIndex], display: "block" });

    gsap.to(overlay, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.set(landing, { opacity: 0 });
        setActivePath(pendingPath);
        setMode("content");
      },
    });
  }, [mode, clickedIndex, pendingPath]);

  /* ── Slide in content after activePath set + mode = content ── */
  useEffect(() => {
    if (mode !== "content") return;
    const content = contentRef.current;
    const overlay = overlayRef.current;
    if (!content) return;

    gsap.fromTo(
      content,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          if (overlay) gsap.set(overlay, { display: "none" });
        },
      }
    );
  }, [mode, activePath]);

  const returnToLanding = useCallback(() => {
    if (modeRef.current !== "content") return;
    const content = contentRef.current;
    const landing = landingRef.current;
    if (!content || !landing) return;

    setMode("leaving");

    gsap.to(content, {
      x: 40,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setActivePath(null);
        setMode("landing");
        gsap.set(landing, { opacity: 0 });
        gsap.to(landing, { opacity: 1, duration: 0.4, ease: "power1.out" });
        if (content) {
          gsap.set(content, { x: 0, opacity: 1 });
        }
        lenisRef.current?.scrollTo(0, { immediate: true });
      },
    });
  }, []);

  const showLanding = mode === "landing" || mode === "entering";
  const showContent = (mode === "content" || mode === "leaving") && activePath !== null;

  return (
    <div style={{ background: "#0e0d0b", minHeight: "100dvh" }}>

      {/* Landing grid */}
      <div
        ref={landingRef}
        style={{
          display: showLanding ? "flex" : "none",
          position: "fixed",
          inset: 0,
          gap: "1px",
          background: "#1e1c1a",
        }}
      >
        {panels.map((panel, i) => (
          <LandingPanel key={panel.id} panel={panel} index={i} onEnter={enterPath} />
        ))}
      </div>

      {/* Clip-path expansion overlay */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          background: "#111010",
          zIndex: 50,
          display: "none",
        }}
      />

      {/* Content */}
      {showContent && (
        <div ref={contentRef} style={{ willChange: "transform, opacity" }}>
          {/* Desktop: pinned horizontal track */}
          <div ref={wrapperRef} className="r3-wrapper">
            <div ref={trackRef} className="r3-track">
              {activePath === "guided"       && <GuidedContent      onEnter={enterPath} />}
              {activePath === "in-person"    && <InPersonContent    onEnter={enterPath} />}
              {activePath === "personalized" && <PersonalizedContent onEnter={enterPath} />}
            </div>
          </div>
        </div>
      )}

      {/* Fixed nav — always rendered */}
      <Nav mode={mode} activePath={activePath} onEnter={enterPath} onReturn={returnToLanding} />

      <style>{`
        :root {
          --r3-bg:       #0e0d0b;
          --r3-surface:  #111010;
          --r3-text:     #cdc8bf;
          --r3-muted:    #6a6560;
          --r3-faint:    #1e1c1a;
          --r3-accent:   #c9baa0;
          --r3-cream-bg: #f0ebe3;
          --r3-cream-tx: #1a1815;
          --r3-border:   #2a2826;
        }

        /* ── Landing ── */
        .r3-panel {
          flex: 1;
          position: relative;
          background: #111010;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.4s ease;
          overflow: hidden;
        }
        .r3-panel:hover { background: #181614; }
        .r3-noise {
          background-image: ${NOISE};
          background-size: 180px;
          opacity: 0.03;
          pointer-events: none;
          position: absolute;
          inset: 0;
        }
        .r3-panel-num {
          position: absolute;
          top: 20px;
          left: 20px;
          font-family: ${SANS};
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2a2826;
          transition: opacity 0.4s ease;
          z-index: 2;
        }
        .r3-panel:hover .r3-panel-num { opacity: 0; }
        .r3-panel-center {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 20px;
        }
        .r3-panel-info {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .r3-panel:hover .r3-panel-info {
          opacity: 1;
          transform: translateY(0);
        }
        .r3-threshold {
          width: 88px;
          height: 30px;
          border: 1px solid #2a2826;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s ease;
        }
        .r3-threshold:hover { border-color: #5a5550; }
        .r3-threshold-text {
          font-family: ${SANS};
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6a6560;
          transition: color 0.2s ease;
        }
        .r3-threshold:hover .r3-threshold-text { color: #cdc8bf; }

        /* ── Content layout — desktop ── */
        .r3-wrapper {
          width: 100%;
          overflow: hidden;
        }
        .r3-track {
          display: flex;
          flex-direction: row;
          will-change: transform;
        }
        .r3-section {
          width: 100vw;
          min-width: 100vw;
          height: 100vh;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .r3-cta-sec {
          justify-content: center;
          flex-direction: column;
        }
        .r3-mobile-next { display: none; }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .r3-track {
            flex-direction: column;
          }
          .r3-section {
            width: 100%;
            min-width: 100%;
            height: auto;
            min-height: 100dvh;
          }
          .r3-cta-sec {
            padding-bottom: 0;
          }
          .r3-mobile-next {
            display: block;
            width: 100%;
          }
          .r3-panel-info {
            opacity: 1;
            transform: translateY(0);
          }
          .r3-panel-num { opacity: 0; }
        }

        /* ── Scrollbar ── */
        .r3-wrapper { scrollbar-width: none; }
        .r3-wrapper::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
