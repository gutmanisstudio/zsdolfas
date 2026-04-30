import type { Metadata } from "next";
import Services from "@/components/sections/Services";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Pakalpojumi · ZS DOLFAS",
  description:
    "Ceļu un pievadu izbūve, ēku demontāža, teritoriju labiekārtošana, būvlaukumu sagatavošana, dīķu rakšana un tīrīšana.",
};

export default function PakalpojumiPage() {
  return (
    <main className="bg-neutral-950 pt-20 md:pt-24">
      <Services />
      <CTABanner />
    </main>
  );
}
