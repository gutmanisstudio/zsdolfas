import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Darbi · ZS DOLFAS",
  description: "Atskats uz darba dienām Latvijā.",
};

export default function DarbiPage() {
  return (
    <main className="bg-neutral-950 pt-20 md:pt-24">
      <Projects />
      <CTABanner />
    </main>
  );
}
