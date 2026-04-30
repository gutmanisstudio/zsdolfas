import type { Metadata } from "next";
import Fleet from "@/components/sections/Fleet";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Tehnika · ZS DOLFAS",
  description: "Ekskavatori, buldozeri, iekrāvēji un kravas tehnika darbībā.",
};

export default function TehnikaPage() {
  return (
    <main className="bg-neutral-950 pt-20 md:pt-24">
      <Fleet />
      <CTABanner />
    </main>
  );
}
