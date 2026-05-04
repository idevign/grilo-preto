"use client";

import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "https://picsum.photos/seed/10/900/1200",
  "https://picsum.photos/seed/23/900/1200",
  "https://picsum.photos/seed/37/900/1200",
  "https://picsum.photos/seed/52/900/1200",
];

const chapters = [
  {
    numeral: "I.",
    title: "The Unfolding",
    paragraphs: [
      "Years building a career in software development and design. Conventional success, increasing distance from myself. The kind of life that looks right from the outside and feels increasingly hollow from within. Capoeira found me. Not the other way around. Something broke open. I did not understand it then. I kept returning anyway.",
      "The practice asked things of me that no other context had. Precision. Presence. Honesty about where I actually was, not where I wanted to be. Every session was a mirror. Some days that was clarifying. Many days it was confronting. I stayed.",
    ],
  },
  {
    numeral: "II.",
    title: "The Becoming",
    paragraphs: [
      "Two decades of practice changes a person in ways that are difficult to name and impossible to fake. The body learns things the mind cannot argue with. Patterns become visible. Some dissolve. Others reveal themselves as load-bearing in ways you did not expect.",
      "I trained under Mestre Acordeon, the late Mestre Ra, and Mestra Suelly. I studied directly with Ido Portal and his senior students. Each context gave me something distinct. None of it resolved into a system. All of it compounded into a way of seeing.",
    ],
  },
  {
    numeral: "III.",
    title: "The Expansion",
    paragraphs: [
      "Teaching began before I felt ready. It always does. What I found was that the practice deepened when I had to articulate it. When someone else's confusion forced me to locate precisely what I actually knew versus what I had simply absorbed.",
      "The curriculum took years to arrive at its current form. Not because I was slow, but because I refused to codify something I had not yet lived all the way through. What I offer now is the synthesis. Not a fitness method. Not a capoeira class. Something that uses the body as the territory for real development.",
    ],
  },
  {
    numeral: "IV.",
    title: "The Invitation",
    paragraphs: [
      "This is not for everyone. It is for the person who has already done the obvious things and found them incomplete. Who has developed real capability in their life and still carries something unresolved. Who is ready to be honest about how they move and what that reveals.",
      "The practice is rigorous. It is also patient. It meets you where you are honest, not where you are comfortable. If that distinction means something to you, you are probably in the right place.",
    ],
  },
];


export function StorySection() {
  const [active, setActive] = useState(0);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = chapterRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="story-section">

      {/* Left panel: sticky image with crossfade */}
      <div className="story-left" aria-hidden="true">
        {IMAGES.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            className="story-img"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Right panel: scrolling chapters */}
      <div className="story-right">
        {chapters.map((ch, i) => (
          <div
            key={ch.numeral}
            ref={(el) => { chapterRefs.current[i] = el; }}
            className="story-chapter"
          >
            {/* Mobile-only per-chapter image */}
            <div className="story-chapter-img-wrap" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMAGES[i]} alt="" className="story-chapter-img" />
            </div>

            <div className="story-chapter-body">
              <span className="story-numeral">{ch.numeral}</span>
              <h2 className="story-title">{ch.title}</h2>
              <div className="story-divider" />
              {ch.paragraphs.map((para, j) => (
                <p key={j} className="story-body">{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .story-section {
          display: flex;
          align-items: flex-start;
          width: 100%;
        }

        .story-left {
          position: sticky;
          top: 0;
          width: 50vw;
          height: 100vh;
          overflow: hidden;
          flex-shrink: 0;
        }

        .story-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: opacity 600ms ease-in-out;
        }

        .story-right {
          width: 50vw;
          background-color: var(--color-base);
        }

        .story-chapter {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 120px 6vw 160px 10vw;
        }

        .story-chapter-img-wrap {
          display: none;
        }

        .story-chapter-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
        }

        .story-chapter-body {
          display: flex;
          flex-direction: column;
        }

        .story-numeral {
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--color-mid);
        }

        .story-title {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(2rem, 3.5vw, 3rem);
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
          font-size: clamp(1rem, 1.8vw, 1.0625rem);
          line-height: 1.85;
          color: var(--color-dark);
          margin: 0 0 1.5rem 0;
          font-weight: 300;
          max-width: 460px;
        }
        .story-body:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .story-section {
            flex-direction: column;
          }
          .story-left {
            display: none;
          }
          .story-right {
            width: 100%;
          }
          .story-chapter {
            min-height: auto;
            padding: 0 0 4rem 0;
          }
          .story-chapter-img-wrap {
            display: block;
            position: relative;
            isolation: isolate;
            width: 100%;
            height: 50vw;
            overflow: hidden;
            margin-bottom: 2.5rem;
          }
          .story-chapter-body {
            padding: 0 2rem;
          }
          .story-body {
            max-width: 100%;
          }
        }
      `}</style>

      {/* TODO: chapter transition — cross-chapter scroll transition logic goes here (parallax, clip-path reveals, etc.) */}
    </section>
  );
}
