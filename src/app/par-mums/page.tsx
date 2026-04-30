import type { Metadata } from "next";
import About from "@/components/sections/About";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Par mums · ZS DOLFAS",
  description: "Strādājam visā Latvijā.",
};

export default function ParMumsPage() {
  return (
    <main className="bg-neutral-950 pt-20 md:pt-24">
      <About />
      <CTABanner />
    </main>
  );
}
