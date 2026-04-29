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
        Terms &amp; Conditions
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.8125rem",
          color: "var(--color-mid)",
          margin: "0 0 4rem",
          letterSpacing: "0.02em",
        }}
      >
        Last updated: January 2026
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <PolicySection heading="1. Acceptance of Terms">
          Placeholder — by accessing and using this site, you accept these terms in full. If you
          disagree with any part, you must not use this site or its services.
        </PolicySection>

        <PolicySection heading="2. Services">
          Placeholder — description of the services offered through Grilo Preto, including online
          programs, in-person classes, and one-to-one sessions, and the terms under which they are
          provided.
        </PolicySection>

        <PolicySection heading="3. Bookings and Payments">
          Placeholder — terms governing bookings, payment methods accepted, and what happens in the
          event of a failed or disputed payment.
        </PolicySection>

        <PolicySection heading="4. Cancellations and Refunds">
          Placeholder — our cancellation policy, the notice period required, and circumstances
          under which refunds are issued or withheld.
        </PolicySection>

        <PolicySection heading="5. Intellectual Property">
          Placeholder — all content on this site, including text, imagery, and program materials,
          is the property of Grilo Preto. Unauthorised reproduction or distribution is prohibited.
        </PolicySection>

        <PolicySection heading="6. Limitation of Liability">
          Placeholder — to the extent permitted by law, Grilo Preto is not liable for any indirect
          or consequential loss arising from use of this site or participation in its programs.
        </PolicySection>

        <PolicySection heading="7. Governing Law">
          Placeholder — these terms are governed by the laws of the State of Colorado, United
          States.
        </PolicySection>

        <PolicySection heading="8. Contact">
          Placeholder — how to reach us with questions about these terms.
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
          color: "var(--color-mid)",
          margin: 0,
          lineHeight: 1.8,
          fontWeight: 300,
        }}
      >
        {children}
      </p>
    </div>
  );
}
