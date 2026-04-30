import Link from "next/link";

const BASE = "#f5f3f0";
const COPPER = "#b87333";

const BLOBS = [
  {
    num: "01",
    lines: ["About"],
    href: "/about",
    image: "/images/hero.jpg",
    bg: null,
    bgPos: "60% center",
    color: "#ffffff",
    z: 2,
    top: 118, left: 8, width: 252, height: 288,
    borderRadius: "35% 68% 62% 38% / 40% 74% 58% 40%",
    labelSize: "2rem",
  },
  {
    num: "02",
    lines: ["Practice"],
    href: "/movement-practice",
    image: "/images/gp_rmpBG_000.jpg",
    bg: null,
    bgPos: "center 30%",
    color: "#ffffff",
    z: 4,
    top: 0, left: 208, width: 258, height: 332,
    borderRadius: "46% 54% 68% 32% / 50% 46% 78% 70%",
    labelSize: "2rem",
  },
  {
    num: "03",
    lines: ["Capoeira"],
    href: "/capoeira",
    // Swap image to "/images/gp-rings.jpg" once the portrait rings photo is added
    image: null,
    bg: "#b2a99a",
    bgPos: "center",
    color: "#2a2520",
    z: 2,
    top: 110, left: 418, width: 258, height: 292,
    borderRadius: "68% 35% 38% 62% / 74% 40% 40% 58%",
    labelSize: "2rem",
  },
  {
    num: "04",
    lines: ["Journal"],
    href: "/journal",
    image: null,
    bg: "#2e2822",
    bgPos: "center",
    color: "#f5f3f0",
    z: 1,
    top: 290, left: 62, width: 262, height: 288,
    borderRadius: "40% 74% 52% 38% / 44% 80% 50% 40%",
    labelSize: "2rem",
  },
  {
    num: "05",
    lines: ["Find Your", "Starting Point"],
    href: "/rmp/starting-point",
    image: null,
    bg: "#524e4a",
    bgPos: "center",
    color: "#f5f3f0",
    z: 1,
    top: 292, left: 362, width: 258, height: 286,
    borderRadius: "74% 40% 38% 52% / 80% 44% 40% 50%",
    labelSize: "1.625rem",
  },
];

export default function BlobNav() {
  return (
    <section className="bn-section">
      <div className="bn-cluster">
        {BLOBS.map((b) => (
          <Link
            key={b.href}
            href={b.href}
            className="bn-blob"
            style={{
              top: b.top,
              left: b.left,
              width: b.width,
              height: b.height,
              borderRadius: b.borderRadius,
              color: b.color,
              zIndex: b.z,
            }}
          >
            {/* Background layer -- scales independently on hover */}
            <span
              className="bn-bg"
              style={{
                backgroundColor: b.bg ?? undefined,
                backgroundImage: b.image
                  ? `linear-gradient(rgba(10,9,8,0.42), rgba(10,9,8,0.32)), url('${b.image}')`
                  : undefined,
                backgroundPosition: b.bgPos,
              }}
            />

            {/* Copper overlay -- fades in on hover */}
            <span className="bn-copper" />

            {/* Text content sits above both layers */}
            <span className="bn-content">
              <span className="bn-num">{b.num}</span>
              <span className="bn-label" style={{ fontSize: b.labelSize }}>
                {b.lines.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </span>
              <span className="bn-dash" />
            </span>
          </Link>
        ))}
      </div>

      <style>{`
        .bn-section {
          min-height: 100vh;
          background-color: ${BASE};
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 3rem 1.5rem;
        }
        .bn-cluster {
          position: relative;
          width: 680px;
          height: 582px;
          transform-origin: center center;
          flex-shrink: 0;
        }

        /* Blob container */
        .bn-blob {
          position: absolute;
          display: flex;
          align-items: stretch;
          text-decoration: none;
          overflow: hidden;
          box-shadow: 0 0 0 5px ${BASE};
          transition: transform 0.34s cubic-bezier(0.34, 1.38, 0.64, 1),
                      box-shadow 0.34s ease;
        }
        .bn-blob:hover {
          transform: scale(1.04);
          z-index: 10 !important;
          box-shadow: 0 0 0 5px ${BASE}, 0 12px 40px rgba(0, 0, 0, 0.16);
        }

        /* Background image/color layer */
        .bn-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          will-change: transform;
          transition: transform 0.55s ease;
        }
        .bn-blob:hover .bn-bg {
          transform: scale(1.07);
        }

        /* Copper tint overlay */
        .bn-copper {
          position: absolute;
          inset: 0;
          background-color: ${COPPER};
          opacity: 0;
          mix-blend-mode: multiply;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .bn-blob:hover .bn-copper {
          opacity: 0.28;
        }

        /* Text wrapper */
        .bn-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 2rem 2.75rem;
          flex: 1;
        }
        .bn-num {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          color: inherit;
          opacity: 0.6;
          margin-bottom: 0.5rem;
        }
        .bn-label {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 300;
          line-height: 1.15;
          color: inherit;
          display: flex;
          flex-direction: column;
        }
        .bn-dash {
          display: block;
          width: 1.75rem;
          height: 1px;
          background: currentColor;
          opacity: 0.45;
          margin-top: 0.875rem;
        }

        @media (max-width: 760px) {
          .bn-cluster {
            transform: scale(0.72);
            margin: -82px -96px;
          }
        }
        @media (max-width: 480px) {
          .bn-cluster {
            transform: scale(0.5);
            margin: -146px -170px;
          }
        }
      `}</style>
    </section>
  );
}
