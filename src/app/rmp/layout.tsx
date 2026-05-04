import type { Metadata } from "next";
import RmpFooter from "@/components/RmpFooter";
import RmpNavigation from "@/components/RmpNavigation";

export const metadata: Metadata = {
  title: "RMP⁺ · Grilo Preto",
  description: "The Ritual Movement Practice",
};

export default function RmpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="noise-overlay" />
      <RmpNavigation />
      {children}
      <RmpFooter />
    </>
  );
}
