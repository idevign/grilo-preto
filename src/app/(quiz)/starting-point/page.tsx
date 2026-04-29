"use client";

import Link from "next/link";
import { useState, useRef } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const questions = [
  {
    text: "How would you describe your current relationship to physical practice?",
    options: [
      "I have no consistent practice right now",
      "I move occasionally but without structure or intention",
      "I have a practice but feel stuck or plateaued",
      "I am consistent and looking to go deeper",
    ],
  },
  {
    text: "When you imagine yourself in this work, what feels most true?",
    options: [
      "Moving on my own time, in my own space",
      "Being in a room with other people doing the same work",
      "Having someone understand my specific situation and build something for me",
      "I'm not sure yet",
    ],
  },
  {
    text: "How do you work best?",
    options: [
      "I do well with a clear structure I can follow independently",
      "I need the energy of a group to show up consistently",
      "I need direct feedback and a relationship to go deep",
      "Some combination",
    ],
  },
  {
    text: "Are you based in Denver or able to get there regularly?",
    options: ["Yes", "No"],
  },
  {
    text: "What is the most honest description of where you are?",
    options: [
      "I'm curious but haven't committed to anything yet",
      "I'm ready to begin something real",
      "I've been circling this for a while and I'm done circling",
      "I know what I want, I just need to find the right container",
    ],
  },
];

// Points per answer: [guided, inPerson, personalized]
const scoreMap: [number, number, number][][] = [
  [[2, 0, 0], [1, 0, 0], [0, 0, 2], [0, 1, 1]],
  [[2, 0, 0], [0, 2, 0], [0, 0, 2], [1, 0, 0]],
  [[2, 0, 0], [0, 2, 0], [0, 0, 2], [1, 1, 1]],
  [[0, 2, 0], [1, 0, 0]],
  [[2, 0, 0], [1, 1, 0], [0, 0, 2], [0, 0, 2]],
];

type Path = "guided" | "inPerson" | "personalized";

function computeResult(answers: number[]): Path {
  const t = { guided: 0, inPerson: 0, personalized: 0 };
  answers.forEach((a, q) => {
    const [g, ip, p] = scoreMap[q][a];
    t.guided += g; t.inPerson += ip; t.personalized += p;
  });
  if (t.personalized > t.guided && t.personalized > t.inPerson) return "personalized";
  if (t.inPerson > t.guided) return "inPerson";
  return "guided";
}

const results: Record<Path, { label: string; paragraph: string; href: string }> = {
  guided: {
    label: "RMP⁺ Guided",
    paragraph:
      "You are looking for something real but want to move at your own pace, in your own space. The foundation of the practice is available to you anywhere. Start there.",
    href: "/rmp/guided",
  },
  inPerson: {
    label: "RMP⁺ In-Person",
    paragraph:
      "You know you need more than a screen. The room matters to you. Other people in the work with you matters. That is what the in-person sessions offer.",
    href: "/rmp/in-person",
  },
  personalized: {
    label: "RMP⁺ Personalized",
    paragraph:
      "You have been here before. You know what general programs feel like and you are done with them. The work that is built entirely around you is what comes next.",
    href: "/rmp/personalized",
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

type Screen = "intro" | "quiz" | "result";

export default function StartingPoint() {
  const [screen, setScreen]     = useState<Screen>("intro");
  const [current, setCurrent]   = useState(0);
  const [answers, setAnswers]   = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [visible, setVisible]   = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function fadeTo(fn: () => void) {
    setVisible(false);
    setTimeout(() => { fn(); setVisible(true); }, 260);
  }

  function handleBegin() {
    fadeTo(() => { setScreen("quiz"); setCurrent(0); setAnswers([]); setSelected(null); });
  }

  function advanceWith(answerIndex: number) {
    const next = [...answers, answerIndex];
    if (current < questions.length - 1) {
      fadeTo(() => { setAnswers(next); setCurrent(current + 1); setSelected(null); });
    } else {
      fadeTo(() => { setAnswers(next); setScreen("result"); });
    }
  }

  function handleSelect(i: number) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setSelected(i);
    timerRef.current = setTimeout(() => advanceWith(i), 400);
  }

  function handleRestart() {
    if (timerRef.current) clearTimeout(timerRef.current);
    fadeTo(() => { setScreen("intro"); setCurrent(0); setAnswers([]); setSelected(null); });
  }

  const result = answers.length === questions.length ? computeResult(answers) : "guided";

  return (
    <main style={{ height: "100dvh", display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Minimal header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 1.5rem",
          flexShrink: 0,
        }}
      >
        <Link href="/" style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "1.125rem",
          fontWeight: 400,
          color: "var(--color-dark)",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}>
          Grilo Preto
        </Link>
        <Link
          href="/"
          className="quiz-return-link"
          style={{ opacity: screen === "result" ? 1 : 0, pointerEvents: screen === "result" ? "auto" : "none", transition: "opacity 0.26s ease" }}
        >
          Return to site
        </Link>
      </header>

      {/* Centered content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.26s ease",
        }}
      >
        <div style={{ width: "100%", maxWidth: "560px", padding: "0 1.5rem" }}>
          {screen === "intro" && <IntroScreen onBegin={handleBegin} />}
          {screen === "quiz" && (
            <QuizScreen
              question={questions[current]}
              selected={selected}
              onSelect={handleSelect}
            />
          )}
          {screen === "result" && (
            <ResultScreen result={results[result]} onRestart={handleRestart} />
          )}
        </div>
      </div>

      {/* Bottom step counter — always present to preserve centering, hidden on non-quiz screens */}
      <div
        style={{
          flexShrink: 0,
          padding: "1.25rem 1.5rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
          opacity: screen === "quiz" ? 1 : 0,
          transition: "opacity 0.26s ease",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-mid)",
            margin: 0,
          }}
        >
          {current + 1} / {questions.length}
        </p>
        <div
          style={{
            width: "80px",
            height: "1px",
            backgroundColor: "var(--color-subtle)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              backgroundColor: "var(--color-copper)",
              width: `${(current / questions.length) * 100}%`,
              transition: "width 0.4s ease",
            }}
          />
        </div>
      </div>

      <style>{`
        .quiz-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }
        .quiz-option {
          all: unset;
          display: block;
          width: 100%;
          box-sizing: border-box;
          padding: 1rem 1.25rem;
          border: 1px solid var(--color-subtle);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 300;
          line-height: 1.5;
          color: var(--color-dark);
          cursor: pointer;
          transition: border-color 0.15s, background-color 0.15s, color 0.15s;
          text-align: left;
        }
        .quiz-option:hover {
          border-color: var(--color-mid);
        }
        .quiz-option.selected {
          background-color: var(--color-dark);
          border-color: var(--color-dark);
          color: var(--color-base);
        }
        .quiz-begin {
          all: unset;
          font-family: var(--font-body);
          font-size: 0.8125rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-dark);
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 2px;
          cursor: pointer;
          transition: border-color 0.2s;
          margin-top: 2.5rem;
        }
        .quiz-begin:hover { border-color: var(--color-dark); }
        .quiz-result-link {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-dark);
          text-decoration: none;
          border-bottom: 1px solid var(--color-subtle);
          padding-bottom: 2px;
          transition: border-color 0.2s;
        }
        .quiz-result-link:hover { border-color: var(--color-dark); }
        .quiz-restart {
          all: unset;
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          color: var(--color-mid);
          cursor: pointer;
          transition: color 0.2s;
          margin-top: 1.5rem;
        }
        .quiz-restart:hover { color: var(--color-dark); }
        .quiz-return-link {
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-mid);
          text-decoration: none;
          transition: color 0.2s;
        }
        .quiz-return-link:hover { color: var(--color-dark); }
      `}</style>
    </main>
  );
}

// ─── Screens ─────────────────────────────────────────────────────────────────

function IntroScreen({ onBegin }: { onBegin: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.6875rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-mid)",
          margin: "0 0 1.75rem",
        }}
      >
        Find Your Starting Point
      </p>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(1rem, 1.8vw, 1.0625rem)",
          lineHeight: 1.85,
          color: "var(--color-dark)",
          fontWeight: 300,
          margin: 0,
          maxWidth: "44ch",
        }}
      >
        This is not a test. There are no right answers. What follows is five
        questions designed to help you find where to begin.
      </p>
      <button className="quiz-begin" onClick={onBegin}>Begin</button>
    </div>
  );
}

function QuizScreen({
  question, selected, onSelect,
}: {
  question: typeof questions[0];
  selected: number | null;
  onSelect: (i: number) => void;
}) {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
          fontWeight: 300,
          color: "var(--color-dark)",
          lineHeight: 1.35,
          margin: "0 0 2rem",
        }}
      >
        {question.text}
      </h2>
      <div className="quiz-options">
        {question.options.map((opt, i) => (
          <button
            key={i}
            className={`quiz-option${selected === i ? " selected" : ""}`}
            onClick={() => onSelect(i)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultScreen({
  result, onRestart,
}: {
  result: typeof results[Path];
  onRestart: () => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.6875rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-mid)",
          margin: "0 0 1.5rem",
        }}
      >
        Your entry point is
      </p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 300,
          color: "var(--color-dark)",
          lineHeight: 1.1,
          margin: "0 0 2rem",
        }}
      >
        {result.label}
      </h2>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.9375rem, 1.6vw, 1rem)",
          lineHeight: 1.8,
          color: "var(--color-dark)",
          fontWeight: 300,
          margin: "0 0 2.5rem",
          maxWidth: "40ch",
        }}
      >
        {result.paragraph}
      </p>
      <Link href={result.href} className="quiz-result-link">
        Explore {result.label}
      </Link>
      <button className="quiz-restart" onClick={onRestart}>
        Start again
      </button>
    </div>
  );
}
