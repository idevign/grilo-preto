"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "/images/gp_rmpBG_001_sm.jpg",
  "/images/gp_rmpBG_002_sm.jpg",
  "/images/gp_rmpBG_005_sm.jpg",
  "/images/gp_rmpBG_007_sm.jpg",
];

const chapters = [
  {
    numeral: "I.",
    title: "The Unfolding",
    panels: [
      "Years building a career in software development and design. Conventional success, increasing distance from myself. The kind of life that looks right from the outside and feels increasingly hollow from within. Capoeira found me. Not the other way around. Something broke open. I did not understand it then. I kept returning anyway.",
      "What kept me returning was not pleasure. It was something closer to recognition. The practice had a logic that I could feel before I could name it. The body responds to consistency in ways the mind resists. I was not building skill. I was building a relationship with honesty.",
      "Years passed before I understood what had happened. The practice had reorganized something in me. Not fixed it. Reorganized it. That distinction matters more than it sounds.",
    ],
  },
  {
    numeral: "II.",
    title: "The Becoming",
    panels: [
      "Two decades of practice changes a person in ways that are difficult to name and impossible to fake. The body learns things the mind cannot argue with. Patterns become visible. Some dissolve. Others reveal themselves as load-bearing in ways you did not expect.",
      "Direct study changes you differently than independent study. There is something transmitted in physical proximity that cannot be replicated through video or description. I received things I could not have sought. That is the nature of lineage.",
      "What I carry from those years is not a collection of techniques. It is a standard. A sense of what honest work feels like from the inside. That standard is now what I hold the practice to.",
    ],
  },
  {
    numeral: "III.",
    title: "The Expansion",
    panels: [
      "Teaching began before I felt ready. It always does. What I found was that the practice deepened when I had to articulate it. When someone else's confusion forced me to locate precisely what I actually knew versus what I had simply absorbed.",
      "The students who stayed longest were never the most physically gifted. They were the ones willing to be confused without leaving. Confusion, held with patience, becomes understanding. That process cannot be accelerated. It can only be supported.",
      "I stopped trying to make the practice legible to people who were not ready for it. That clarity made everything better. For the students and for me.",
    ],
  },
  {
    numeral: "IV.",
    title: "The Invitation",
    panels: [
      "This is not for everyone. It is for the person who has already done the obvious things and found them incomplete. Who has developed real capability in their life and still carries something unresolved. Who is ready to be honest about how they move and what that reveals.",
      "The entry point does not matter as much as the intention you bring to it. Guided, in-person, private. The format is a container. What fills it is yours. The practice will meet the quality of your attention with the quality of what it returns.",
      "There is no arrival in this work. There is only the quality of your continued return. That is what the practice is built around. That is what it asks of you.",
    ],
  },
];

export function StorySection() {
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const trackRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // image panel + 3 content panels = 4 items per chapter
    const numPanels = 4;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      chapterRefs.current.forEach((chapterEl, i) => {
        const trackEl = trackRefs.current[i];
        if (!chapterEl || !trackEl) return;

        const getPanelW      = () => trackEl.scrollWidth / numPanels;
        const getCenterOff   = () => (chapterEl.offsetWidth - getPanelW()) / 2;
        // Image starts flush left (x=0). Final position centers the last content panel.
        const getInitialX    = () => 0;
        const getFinalX      = () => -getPanelW() * (numPanels - 1) + getCenterOff();
        const getTravel      = () => getPanelW() * (numPanels - 1) - getCenterOff();

        gsap.fromTo(
          trackEl,
          { x: getInitialX },
          {
            x: getFinalX,
            ease: "none",
            scrollTrigger: {
              trigger: chapterEl,
              start: "top top",
              end: () => `+=${getTravel()}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              onLeave:     () => gsap.to(trackEl, { opacity: 0, duration: 0.4, ease: "power1.in" }),
              onEnterBack: () => gsap.to(trackEl, { opacity: 1, duration: 0.3, ease: "power1.out" }),
            },
          }
        );
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      mm.revert();
    };
  }, []);

  return (
    <section className="story-section">
      {chapters.map((ch, i) => (
        <div
          key={ch.numeral}
          ref={(el) => { chapterRefs.current[i] = el; }}
          className="story-chapter"
        >
          <div
            className="story-track"
            ref={(el) => { trackRefs.current[i] = el; }}
          >
            {/* Image panel — first item in the horizontal track */}
            <div className="story-image-panel">
              <Image
                src={IMAGES[i]}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="story-img"
                /* GSAP pins these panels and drives them with transforms, which
                   stops the browser's lazy-load intersection check from firing —
                   panels would sit blank on screen. Only four images, so load eagerly. */
                loading="eager"
              />
            </div>

            {/* Panel 1: chapter identity + opening */}
            <div className="story-panel">
              <span className="story-numeral">{ch.numeral}</span>
              <h2 className="story-title">{ch.title}</h2>
              <div className="story-divider" />
              <p className="story-body">{ch.panels[0]}</p>
            </div>

            {/* Panel 2: continuation */}
            <div className="story-panel">
              <p className="story-body">{ch.panels[1]}</p>
            </div>

            {/* Panel 3: closing */}
            <div className="story-panel">
              <p className="story-body">{ch.panels[2]}</p>
            </div>
          </div>
        </div>
      ))}

      <style>{`
        .story-section {
          width: 100%;
        }

        /* Each chapter clips its horizontal track */
        .story-chapter {
          height: 100vh;
          overflow: hidden;
        }

        /* Horizontal track driven by GSAP */
        .story-track {
          display: flex;
          flex-direction: row;
          height: 100%;
          will-change: transform;
        }

        /* Image as first track item */
        .story-image-panel {
          width: 50vw;
          height: 100vh;
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
        }

        .story-img {
          object-fit: cover;
          filter: grayscale(100%);
        }

        /* Content panels */
        .story-panel {
          width: 50vw;
          height: 100vh;
          flex-shrink: 0;
          padding: 80px 10vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: var(--color-base);
        }

        /* Typography */
        .story-numeral {
          font-family: var(--font-label);
          font-size: var(--text-xs);
          letter-spacing: var(--tracking-widest);
          text-transform: uppercase;
          color: var(--color-text-secondary);
        }

        .story-title {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(var(--text-lg), 3.5vw, var(--text-xl));
          font-weight: 300;
          color: var(--color-dark);
          margin: 0.5rem 0 0 0;
          line-height: 1.1;
        }

        .story-divider {
          width: 48px;
          height: 1px;
          background-color: var(--color-subtle);
          margin: 28px 0;
        }

        .story-body {
          font-family: var(--font-body);
          font-size: var(--text-base);
          line-height: 1.85;
          color: var(--color-dark);
          margin: 0;
          font-weight: 300;
          max-width: 420px;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .story-section {
            overflow-x: hidden;
          }
          .story-chapter {
            height: auto;
            overflow: visible;
          }
          .story-track {
            flex-direction: column;
            will-change: unset;
          }
          .story-image-panel {
            width: 100%;
            height: 100vh;
          }
          .story-panel {
            width: 100%;
            height: auto;
            padding: 2.5rem 2rem;
          }
          .story-body {
            max-width: 100%;
          }
        }
      `}</style>

      {/* TODO: chapter transition — cross-chapter scroll transition logic goes here */}
    </section>
  );
}
