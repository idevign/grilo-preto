"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { EASE } from "@/components/animations";
import { StorySection } from "@/components/StorySection";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  return (
    <main>

      {/* ── Hero ── */}
      <section className="hero-section hero-media">
        <Image
          src="/images/gp_rmpBG_003_sm.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-media-img"
        />
        <div className="hero-content">
          <h1
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.9s ${EASE} 0.1s, transform 0.9s ${EASE} 0.1s`,
            }}
          >
            About Grilo
          </h1>
          <h2
            className="hero-eyebrow"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.35s, transform 0.8s ${EASE} 0.35s`,
            }}
          >
            Mestre. Movement Teacher.
          </h2>
          <p
            className="hero-blurb"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.8s ${EASE} 0.6s, transform 0.8s ${EASE} 0.6s`,
            }}
          >
            Two decades inside a practice that asks for all of you. This is the story behind it.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <StorySection />

    </main>
  );
}
