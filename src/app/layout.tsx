import type { Metadata } from "next";
import { Lora, DM_Mono } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const DESCRIPTION =
  "Grilo Preto — Mestre de Capoeira and movement teacher in Denver. Two decades of practice, taught as a path of movement, culture, and self-mastery.";

export const metadata: Metadata = {
  metadataBase: new URL("https://grilopreto.com"),
  title: {
    default: "Grilo Preto — Inviting a Return to Self",
    template: "%s · Grilo Preto",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Grilo Preto — Inviting a Return to Self",
    description: DESCRIPTION,
    url: "/",
    siteName: "Grilo Preto",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/hero-hand.jpg", width: 2560, height: 1440, alt: "Grilo Preto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grilo Preto — Inviting a Return to Self",
    description: DESCRIPTION,
    images: ["/images/hero-hand.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lora.variable} ${dmMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/keu6kxj.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
