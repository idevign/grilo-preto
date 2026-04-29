export default function PrivacyPolicy() {
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
        Privacy Policy
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
        This privacy policy describes how Grilo Preto collects, uses, and protects information
        submitted through this website.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <PolicySection heading="Information We Collect">
          We collect email addresses submitted through the waitlist form on this site. We do not
          collect any other personal information unless you contact us directly.
        </PolicySection>

        <PolicySection heading="How We Use Your Information">
          Email addresses collected through the waitlist are used solely to notify you when RMP⁺
          Guided opens for enrollment. We do not sell, share, or distribute your information to
          third parties.
        </PolicySection>

        <PolicySection heading="Cookies">
          This site does not use tracking cookies or third-party analytics.
        </PolicySection>

        <PolicySection heading="Contact">
          For any questions regarding this privacy policy, contact us directly.
        </PolicySection>

        <PolicySection heading="Changes">
          We may update this policy occasionally. Continued use of the site constitutes acceptance
          of any changes.
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
