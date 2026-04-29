"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function RmpGuided() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section style={{ padding: "5rem 1.5rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.1,
            color: "var(--color-dark)",
            margin: "0 0 1.25rem",
          }}
        >
          RMP⁺ Guided
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-mid)",
            margin: 0,
          }}
        >
          Launching summer 2026. First Wave founding rate opens May 1st.
        </p>
      </section>

      {/* ── Waitlist ── */}
      <section
        style={{
          padding: "0 1.5rem 10rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            borderTop: "1px solid var(--color-subtle)",
            paddingTop: "4rem",
            maxWidth: "560px",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {/* Context */}
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
            The foundation of the practice, available anywhere. Three sessions
            per week plus a daily movement ritual. $44/month for First Wave
            members. $88/month after.
          </p>

          {/* Form / confirmation */}
          {status === "success" ? (
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "1.25rem",
                fontWeight: 300,
                color: "var(--color-dark)",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              You&rsquo;re on the list. We&rsquo;ll be in touch before May 1st.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "submitting"}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "var(--color-dark)",
                    backgroundColor: "transparent",
                    border: "1px solid var(--color-subtle)",
                    padding: "0.75rem 1rem",
                    outline: "none",
                    flex: "1 1 240px",
                    minWidth: 0,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-mid)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-subtle)")}
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-base)",
                    backgroundColor: "var(--color-dark)",
                    border: "1px solid var(--color-dark)",
                    padding: "0.75rem 1.5rem",
                    cursor: status === "submitting" ? "default" : "pointer",
                    opacity: status === "submitting" ? 0.6 : 1,
                    transition: "opacity 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {status === "submitting" ? "Sending…" : "Join the Waitlist"}
                </button>
              </div>

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "var(--color-copper)",
                    margin: 0,
                  }}
                >
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
