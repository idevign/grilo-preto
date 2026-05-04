"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Path = "guided" | "in-person" | "personalized";
type Mode = "landing" | "entering" | "content" | "leaving";

const EASE = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
const SERIF = 'var(--font-cormorant), "Cormorant Garamond", Georgia, serif';
const SANS = 'var(--font-dm-sans), "DM Sans", system-ui, sans-serif';

const panels: { id: Path; num: string; title: string; subtitle: string }[] = [
  { id: "guided",       num: "01", title: "RMP+ Guided",       subtitle: "The foundation. Anywhere." },
  { id: "in-person",    num: "02", title: "RMP+ In-Person",    subtitle: "Denver. Mon & Wed. Noon." },
  { id: "personalized", num: "03", title: "RMP+ Personalized", subtitle: "Private. Bespoke. Built for you." },
];

const clipFroms = [
  "inset(0 66.67% 0 0)",
  "inset(0 33.33% 0 33.34%)",
  "inset(0 0 0 66.67%)",
];

/* ── Primitives ── */

function Sec({
  children,
  bg = "#0e0d0b",
  center = false,
}: {
  children: React.ReactNode;
  bg?: string;
  center?: boolean;
}) {
  return (
    <div
      className="rt-section"
      style={{
        background: bg,
        justifyContent: center ? "center" : undefined,
        alignItems: center ? "center" : undefined,
      }}
    >
      {children}
    </div>
  );
}

function SmallLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: SANS, fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6a6560", margin: "0 0 1.5rem", fontWeight: 400 }}>
      {children}
    </p>
  );
}

function Item({ label, value, light = false }: { label: string; value: string; light?: boolean }) {
  return (
    <div>
      <p style={{ fontFamily: SANS, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: light ? "#6a6560" : "#6a6560", margin: "0 0 0.5rem", fontWeight: 400 }}>
        {label}
      </p>
      <p style={{ fontFamily: SANS, fontSize: "15px", color: light ? "#1a1815" : "#ccc7bf", margin: 0, lineHeight: 1.65, fontWeight: 300 }}>
        {value}
      </p>
    </div>
  );
}

function HeroSec({ label, headline, body }: { label: string; headline: string; body: string }) {
  return (
    <Sec>
      <div style={{ padding: "80px", maxWidth: "820px" }}>
        <SmallLabel>{label}</SmallLabel>
        <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(44px, 6vw, 80px)", color: "#ccc7bf", margin: "0 0 2rem", lineHeight: 1.0, fontWeight: 400 }}>
          {headline}
        </h2>
        <p style={{ fontFamily: SANS, fontSize: "15px", lineHeight: 1.8, color: "#6a6560", margin: 0, maxWidth: "480px", fontWeight: 300 }}>
          {body}
        </p>
      </div>
    </Sec>
  );
}

function CtaSec({ href, text }: { href: string; text: string }) {
  return (
    <Sec center>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <a
          href={href}
          style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "32px", color: "#ccc7bf", textDecoration: "underline", textDecorationColor: "rgba(204,199,191,0.25)", textUnderlineOffset: "5px", fontWeight: 300 }}
        >
          {text}
        </a>
        <p style={{ fontFamily: SANS, fontSize: "10px", color: "#6a6560", margin: 0 }}>grilopreto.com</p>
      </div>
    </Sec>
  );
}

/* ── Guided ── */

function GuidedSections() {
  return (
    <>
      <HeroSec
        label="RMP+ Guided"
        headline="The foundation, in your own space."
        body="Two decades of practice, distilled into something you can return to daily. Three sessions per week. A Daily Ritual. Self-guided. No live sessions. Consistency is the only requirement."
      />

      <Sec>
        <div style={{ padding: "80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", maxWidth: "400px" }}>
            <Item label="Sessions"     value="3 per week, fully programmed" />
            <Item label="Daily Ritual" value="Changes each phase, designed for daily use" />
            <Item label="Platform"     value="Everfit app, iOS and Android" />
          </div>
        </div>
      </Sec>

      <Sec bg="#f0ebe3">
        <div style={{ padding: "80px" }}>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "48px", color: "#1a1815", margin: "0 0 3rem", fontWeight: 400 }}>
            First Wave
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", margin: "0 0 2rem" }}>
            <span style={{ fontFamily: SANS, fontSize: "clamp(80px, 12vw, 140px)", fontWeight: 300, color: "#1a1815", lineHeight: 1 }}>
              $44
            </span>
            <span style={{ fontFamily: SANS, fontSize: "16px", color: "#6a6560", fontWeight: 300 }}>/month</span>
          </div>
          <p style={{ fontFamily: SANS, fontSize: "15px", color: "#1a1815", margin: "0 0 1rem", lineHeight: 1.75, maxWidth: "480px", fontWeight: 300 }}>
            Founding rate. Held permanently for anyone who remains continuously subscribed. When the rate moves, it moves only for those who join after. Waitlist opens May 1st.
          </p>
          <p style={{ fontFamily: SANS, fontSize: "12px", color: "#6a6560", margin: 0 }}>
            From July 2026: $88/month
          </p>
        </div>
      </Sec>

      <CtaSec href="/rmp/guided" text="Join the waitlist" />
    </>
  );
}

/* ── In-Person ── */

function InPersonSections() {
  return (
    <>
      <HeroSec
        label="RMP+ In-Person"
        headline="In-person. Denver. Monday and Wednesday at noon."
        body="This is not a class you drop into. It is a practice you use to explore and refine who you are over time."
      />

      <Sec>
        <div style={{ padding: "80px", maxWidth: "600px" }}>
          <p style={{ fontFamily: SANS, fontSize: "15px", lineHeight: 1.85, color: "#ccc7bf", margin: 0, fontWeight: 300 }}>
            Doors open at 11:50am. That first twenty minutes is not waiting time. It is the beginning of the session. At 12:10pm we open together. The physical demands are real. The precision required is equally real.
          </p>
        </div>
      </Sec>

      <Sec>
        <div style={{ padding: "80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", maxWidth: "480px" }}>
            <Item label="Days and Time"  value="Monday and Wednesday. 12:00pm to 1:15pm" />
            <Item label="Membership"     value="$222/month recommended contribution" />
            <Item label="Location"       value="910 Santa Fe Dr, Studio 8. Denver" />
            <Item label="First session"  value="Complimentary" />
          </div>
        </div>
      </Sec>

      <CtaSec href="/rmp/starting-point" text="Find your starting point" />
    </>
  );
}

/* ── Personalized ── */

function PersonalizedSections() {
  return (
    <>
      <HeroSec
        label="RMP+ Personalized"
        headline="Private. Bespoke. Built entirely around you."
        body="Capable in almost every context. And still carrying something that has not yet been resolved."
      />

      <Sec>
        <div style={{ padding: "80px", maxWidth: "640px" }}>
          <div style={{ borderLeft: "1px solid #2e2c29", paddingLeft: "24px", marginBottom: "2rem" }}>
            <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "22px", color: "#9a9490", margin: 0, lineHeight: 1.55, fontWeight: 300 }}>
              &ldquo;You are not looking to become someone different. You are looking to stop being governed by standards and definitions that were never yours to begin with.&rdquo;
            </p>
          </div>
          <p style={{ fontFamily: SANS, fontSize: "15px", lineHeight: 1.85, color: "#ccc7bf", margin: 0, fontWeight: 300 }}>
            A private engagement built from the ground up. We work through the body because that is where the patterns actually live.
          </p>
        </div>
      </Sec>

      <Sec>
        <div style={{ padding: "80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", maxWidth: "480px" }}>
            <Item label="Format"   value="1:1 or small group (2 max), weekly or biweekly" />
            <Item label="Platform" value="RMP+ Guided included, bespoke curriculum" />
            <Item label="Remote"   value="Video feedback via app, direct feedback" />
            <Item label="Pricing"  value="Starting at $333/month" />
          </div>
        </div>
      </Sec>

      <Sec>
        <div style={{ padding: "80px", maxWidth: "560px" }}>
          <p style={{ fontFamily: SANS, fontSize: "15px", lineHeight: 1.85, color: "#ccc7bf", margin: 0, fontWeight: 300 }}>
            One completed phase of RMP+ Guided or RMP+ In-Person is recommended before applying.
          </p>
        </div>
      </Sec>

      <CtaSec href="/rmp/starting-point" text="Find your starting point" />
    </>
  );
}

/* ── Landing panel ── */

function Panel({
  panel,
  index,
  onEnter,
}: {
  panel: typeof panels[0];
  index: number;
  onEnter: (path: Path, index: number) => void;
}) {
  return (
    <div className="rt-panel">
      <span className="rt-panel-num">{panel.num}</span>
      <div className="rt-panel-inner">
        <div className="rt-panel-info">
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(17px, 1.4vw, 22px)", color: "#ccc7bf", margin: "0 0 0.5rem", fontWeight: 400, textAlign: "center" }}>
            {panel.title}
          </p>
          <p style={{ fontFamily: SANS, fontSize: "11px", letterSpacing: "0.08em", color: "#6a6560", margin: "0 0 2rem", textAlign: "center" }}>
            {panel.subtitle}
          </p>
        </div>
        <button className="rt-threshold" onClick={() => onEnter(panel.id, index)}>
          <span className="rt-threshold-text">enter</span>
        </button>
      </div>
    </div>
  );
}

/* ── Nav overlay ── */

function Nav({
  activePath,
  onEnter,
  onReturn,
}: {
  activePath: Path;
  onEnter: (path: Path, index: number) => void;
  onReturn: () => void;
}) {
  const labels: Record<Path, string> = { guided: "Guided", "in-person": "In-Person", personalized: "Personalized" };
  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "1.5rem 2rem", zIndex: 100, pointerEvents: "none" }}>
        <button
          onClick={onReturn}
          style={{ fontFamily: SANS, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ccc7bf", background: "none", border: "none", cursor: "pointer", padding: 0, pointerEvents: "auto" }}
        >
          Grilo Preto
        </button>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem", pointerEvents: "auto" }}>
          {panels.map((p, i) => (
            <button
              key={p.id}
              onClick={() => onEnter(p.id, i)}
              style={{ fontFamily: SANS, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: activePath === p.id ? "#c9baa0" : "#6a6560", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.2s" }}
            >
              {labels[p.id]}
            </button>
          ))}
        </div>
      </div>
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "0 2rem 1.5rem", zIndex: 100, pointerEvents: "none" }}>
        <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "11px", color: "#3a3835" }}>
          Inviting a return to self.
        </span>
        <span style={{ fontFamily: SANS, fontSize: "10px", color: "#3a3835" }}>grilopreto.com</span>
      </div>
    </>
  );
}

/* ── Page ── */

export default function RmpTwo() {
  const [mode, setMode]                   = useState<Mode>("landing");
  const [activePath, setActivePath]       = useState<Path | null>(null);
  const [pendingPath, setPendingPath]     = useState<Path>("guided");
  const [clickedIndex, setClickedIndex]   = useState(0);
  const [overlayExpanded, setOverlayExpanded] = useState(false);
  const [contentVisible, setContentVisible]   = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Landing panel enter */
  const enterPath = useCallback(
    (path: Path, index: number) => {
      if (mode === "content") {
        setContentVisible(false);
        setTimeout(() => {
          setActivePath(path);
          setTimeout(() => setContentVisible(true), 30);
        }, 260);
        return;
      }
      setPendingPath(path);
      setClickedIndex(index);
      setOverlayExpanded(false);
      setMode("entering");
    },
    [mode]
  );

  /* Return to landing */
  const returnToLanding = useCallback(() => {
    if (mode !== "content") return;
    setMode("leaving");
  }, [mode]);

  /* Expand overlay then show content */
  useEffect(() => {
    if (mode !== "entering") return;
    const rafId = requestAnimationFrame(() => setOverlayExpanded(true));
    const timerId = setTimeout(() => {
      setActivePath(pendingPath);
      setMode("content");
      setTimeout(() => setContentVisible(true), 30);
    }, 430);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, [mode, pendingPath]);

  /* Slide out content then reset */
  useEffect(() => {
    if (mode !== "leaving") return;
    setContentVisible(false);
    const id = setTimeout(() => {
      setActivePath(null);
      setMode("landing");
    }, 320);
    return () => clearTimeout(id);
  }, [mode]);

  /* Escape to landing */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mode === "content") setMode("leaving");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mode]);

  /* Wheel -> horizontal scroll */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  });

  const showLanding = mode === "landing" || mode === "entering";
  const showContent = (mode === "content" || mode === "leaving") && activePath !== null;

  return (
    <div style={{ position: "fixed", inset: 0, background: "#0e0d0b", overflow: "hidden" }}>

      {/* Landing grid */}
      {showLanding && (
        <div style={{ display: "flex", width: "100%", height: "100%", gap: "1px", background: "#232220" }}>
          {panels.map((panel, i) => (
            <Panel key={panel.id} panel={panel} index={i} onEnter={enterPath} />
          ))}
        </div>
      )}

      {/* Expand overlay */}
      {mode === "entering" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#131210",
            clipPath: overlayExpanded ? "inset(0 0 0 0)" : clipFroms[clickedIndex],
            transition: `clip-path 0.4s ${EASE}`,
            zIndex: 20,
          }}
        />
      )}

      {/* Content */}
      {showContent && (
        <>
          <Nav activePath={activePath!} onEnter={enterPath} onReturn={returnToLanding} />
          <div
            ref={scrollRef}
            className="rt-scroll"
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              transform: contentVisible ? "translateX(0)" : "translateX(100vw)",
              transition: `transform 0.35s ${EASE}`,
            }}
          >
            {activePath === "guided"       && <GuidedSections />}
            {activePath === "in-person"    && <InPersonSections />}
            {activePath === "personalized" && <PersonalizedSections />}
          </div>
        </>
      )}

      <style>{`
        .rt-panel {
          flex: 1;
          position: relative;
          background: #131210;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: background 0.3s ease;
        }
        .rt-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.04;
          pointer-events: none;
          z-index: 0;
        }
        .rt-panel:hover { background: #161412; }
        .rt-panel-num {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          font-family: ${SANS};
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #2e2c29;
          z-index: 2;
          transition: opacity 0.25s ease;
        }
        .rt-panel:hover .rt-panel-num { opacity: 0; }
        .rt-panel-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1.5rem;
        }
        .rt-panel-info {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .rt-panel:hover .rt-panel-info {
          opacity: 1;
          transform: translateY(0);
        }
        .rt-threshold {
          width: 80px;
          height: 32px;
          border: 1px solid #2e2c29;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s ease;
        }
        .rt-threshold:hover { border-color: #6a6560; }
        .rt-threshold-text {
          font-family: ${SANS};
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6a6560;
          transition: color 0.2s ease;
        }
        .rt-threshold:hover .rt-threshold-text { color: #ccc7bf; }
        .rt-scroll {
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: none;
        }
        .rt-scroll::-webkit-scrollbar { display: none; }
        .rt-section {
          width: 100vw;
          min-width: 100vw;
          height: 100dvh;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        @media (max-width: 768px) {
          .rt-panel-info {
            opacity: 1;
            transform: translateY(0);
          }
          .rt-panel-num { opacity: 0; }
          .rt-scroll {
            flex-direction: column;
            overflow-x: hidden;
            overflow-y: auto;
          }
          .rt-section {
            width: 100%;
            min-width: 100%;
            height: auto;
            min-height: 100dvh;
          }
        }
      `}</style>
    </div>
  );
}
