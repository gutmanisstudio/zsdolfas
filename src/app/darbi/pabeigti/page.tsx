import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Pabeigti darbi · ZS DOLFAS",
  description: "Pabeigtu objektu un projektu skati.",
};

const finishedPhotos = [
  "/scenary-finished-work-iguess/BE96D8A4-9100-4271-A8D5-4D8F0746FAB7.jpeg",
  "/scenary-finished-work-iguess/61AA3D0E-34CF-4580-AE68-25ECEA469D1D.jpeg",
  "/scenary-finished-work-iguess/3BF52563-5D38-4781-80AF-4D8E97370E4A.jpeg",
  "/scenary-finished-work-iguess/E139B15F-3C5D-4F43-8D9F-DCF8ABE91E66.jpeg",
  "/scenary-finished-work-iguess/89564B24-B0C3-45AC-88D7-1188A7E5B12F.jpeg",
  "/scenary-finished-work-iguess/06F3176F-C25E-4923-8649-44F8A170D80D.jpeg",
  "/scenary-finished-work-iguess/09A58ABE-F484-4215-B373-3AC9B49718FB.jpeg",
  "/scenary-finished-work-iguess/3B5B13BD-9100-4FA9-BDAE-4192B79505AB.jpeg",
  "/scenary-finished-work-iguess/781DC8D1-D3AE-4875-9208-3E99786026D1.jpeg",
];

export default function PabeigtiPage() {
  return (
    <main className="bg-neutral-950 pt-20 md:pt-24">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex items-center justify-between border-b border-neutral-900 pb-6 mb-10">
            <div className="text-xs tracking-[0.3em] uppercase text-amber-500">
              Galerija
            </div>
            <Link
              href="/darbi"
              className="font-mono text-xs text-neutral-500 hover:text-amber-500 transition-colors"
            >
              ← Atpakaļ uz darbiem
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-10">
            <h1 className="lg:col-span-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.9]">
              Pabeigti
              <br />
              <span className="text-amber-500">darbi.</span>
            </h1>
            <p className="lg:col-span-4 text-base text-neutral-400 leading-relaxed">
              Skati uz objektiem pēc pabeigšanas — dīķi, ceļi, sakārtotas
              teritorijas.
            </p>
          </div>

          <GalleryGrid photos={finishedPhotos} alt="Pabeigti darbi" />

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/darbi/no-buvlaukuma"
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-neutral-800 hover:border-amber-500 hover:text-amber-500 text-neutral-100 font-medium tracking-wide transition-colors"
            >
              Skatīt no būvlaukuma
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
