import Image from "next/image";
import Link from "next/link";
import BlobNav from "@/components/BlobNav";

export default function Home() {
  return (
    <main>
      <BlobNav />

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Image
          src="/images/gp_rmpBG_000.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0.38) 100%)",
          }}
        />

        {/* Text content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            height: "100%",
            minHeight: "92vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 1.5rem 5rem",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "#ffffff",
              margin: "0 0 2.75rem",
              maxWidth: "18ch",
            }}
          >
            Inviting a Return to Self.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.72)",
              margin: 0,
            }}
          >
            Freedom through Discipline&nbsp;&nbsp;·&nbsp;&nbsp;A Sense of Mastery
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section
        style={{
          padding: "6rem 1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            maxWidth: "560px",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
              lineHeight: 1.8,
              color: "var(--color-dark)",
              margin: 0,
              fontWeight: 300,
            }}
          >
            I have lived inside this practice for two decades. Through capoeira
            and movement. Not as techniques to master, but as a way of asking a
            question I kept needing to return to.
          </p>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
              lineHeight: 1.4,
              color: "var(--color-dark)",
              margin: 0,
              fontWeight: 300,
            }}
          >
            What does it mean to truly be free?
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
              lineHeight: 1.8,
              color: "var(--color-dark)",
              margin: 0,
              fontWeight: 300,
            }}
          >
            What I found is that the strength, awareness, and adaptability we
            are looking for was never missing. It was buried. Under routine,
            under performance, under lives shaped more by habit than by choice.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
              lineHeight: 1.8,
              color: "var(--color-dark)",
              margin: 0,
              fontWeight: 300,
            }}
          >
            What I offer is a way back to it.
          </p>
        </div>
      </section>

      {/* ── Practice Cards ── */}
      <section
        style={{
          padding: "2rem 1.5rem 8rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div className="cards-grid">
          <PracticeCard
            title="The Movement Practice"
            description="A physical-first path to self mastery. Two decades of study distilled into one practice."
            href="/movement-practice"
          />
          <PracticeCard
            title="Capoeira"
            description="Train with me in Denver or connect online through YouTube."
            href="/capoeira"
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "8rem 1.5rem",
          textAlign: "center",
          borderTop: "none",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--color-dark)",
            margin: "0 0 2rem",
            letterSpacing: "-0.01em",
          }}
        >
          Find Your Starting Point
        </h2>
        <Link href="/rmp/starting-point" className="cta-link">
          Begin here
        </Link>
      </section>

      <style>{`
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 640px) {
          .cards-grid { grid-template-columns: 1fr; }
        }

        .card-link {
          font-family: var(--font-body);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-dark);
          text-decoration: none;
          border-bottom: 1px solid currentColor;
          padding-bottom: 1px;
          align-self: flex-start;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .card-link:hover { opacity: 1; }

        .cta-link {
          font-family: var(--font-body);
          font-size: 0.875rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-mid);
          text-decoration: none;
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .cta-link:hover {
          color: var(--color-dark);
          border-color: var(--color-dark);
        }
      `}</style>
    </main>
  );
}

function PracticeCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-base)",
        border: "1px solid var(--color-subtle)",
        padding: "3rem 2.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        minHeight: "280px",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
          fontWeight: 400,
          color: "var(--color-dark)",
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          color: "var(--color-dark)",
          margin: 0,
          lineHeight: 1.7,
          opacity: 0.75,
          flexGrow: 1,
        }}
      >
        {description}
      </p>
      <Link href={href} className="card-link">
        Explore
      </Link>
    </div>
  );
}
