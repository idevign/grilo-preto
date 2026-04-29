export default function TermsAndConditions() {
  return (
    <main style={{ padding: "5rem 1.5rem 10rem", maxWidth: "720px", margin: "0 auto" }}>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "var(--color-dark)",
          margin: "0 0 0.5rem",
          lineHeight: 1.15,
        }}
      >
        Terms and Conditions
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.8125rem",
          color: "var(--color-mid)",
          margin: "0 0 3rem",
          letterSpacing: "0.02em",
        }}
      >
        Last updated: April 2026
      </p>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9375rem",
          color: "var(--color-dark)",
          margin: "0 0 3rem",
          lineHeight: 1.8,
          fontWeight: 300,
        }}
      >
        By accessing and using grilopreto.com and rmp.grilopreto.com you agree to the following
        terms.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <PolicySection heading="Use of the Site">
          This site is for informational purposes. Content may not be reproduced, distributed, or
          used without express written permission from Grilo Preto.
        </PolicySection>

        <PolicySection heading="Membership and Payments">
          RMP⁺ memberships are billed monthly. Cancellation is available after the first month.
          Founding rates are held permanently for continuously subscribed First Wave members. Rates
          are subject to change for new subscribers.
        </PolicySection>

        <PolicySection heading="Limitation of Liability">
          Participation in any physical practice carries inherent risk. Grilo Preto is not liable
          for any injury resulting from participation in RMP⁺ sessions, whether in-person or
          online. Participants are responsible for consulting a medical professional before
          beginning any new physical practice.
        </PolicySection>

        <PolicySection heading="Intellectual Property">
          All content on this site including curriculum, videos, and written materials is the
          intellectual property of Grilo Preto. Unauthorized reproduction is prohibited.
        </PolicySection>

        <PolicySection heading="Contact">
          For any questions regarding these terms, contact us directly.
        </PolicySection>
      </div>
    </main>
  );
}

function PolicySection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ borderTop: "1px solid var(--color-subtle)", paddingTop: "2rem" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.25rem",
          fontWeight: 400,
          fontStyle: "italic",
          color: "var(--color-dark)",
          margin: "0 0 1rem",
          lineHeight: 1.3,
        }}
      >
        {heading}
      </h2>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9375rem",
          color: "var(--color-dark)",
          margin: 0,
          lineHeight: 1.8,
          fontWeight: 300,
          opacity: 0.85,
        }}
      >
        {children}
      </p>
    </div>
  );
}
