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
          margin: "0 0 4rem",
          letterSpacing: "0.02em",
        }}
      >
        Last updated: January 2026
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <PolicySection heading="1. Information We Collect">
          Placeholder — description of what personal data is collected when you visit this site or
          engage with our services, including contact forms, email subscriptions, and payment
          processing.
        </PolicySection>

        <PolicySection heading="2. How We Use Your Information">
          Placeholder — explanation of how collected information is used: to respond to enquiries,
          process bookings, deliver programs, and improve the site experience.
        </PolicySection>

        <PolicySection heading="3. Sharing of Information">
          Placeholder — we do not sell personal data. This section will describe any third-party
          services used (e.g. payment processors, email platforms) and their role.
        </PolicySection>

        <PolicySection heading="4. Cookies">
          Placeholder — description of cookies used on this site, how to manage them, and what
          happens if you disable them.
        </PolicySection>

        <PolicySection heading="5. Data Retention">
          Placeholder — how long we retain personal data and the criteria used to determine
          retention periods.
        </PolicySection>

        <PolicySection heading="6. Your Rights">
          Placeholder — your rights regarding your personal data, including the right to access,
          correct, or delete information we hold about you.
        </PolicySection>

        <PolicySection heading="7. Contact">
          Placeholder — how to reach us with privacy-related questions or requests.
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
