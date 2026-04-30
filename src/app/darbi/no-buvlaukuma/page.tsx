import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "No būvlaukuma · ZS DOLFAS",
  description: "Kadri no aktīviem būvlaukumiem un darba dienām.",
};

const wipPhotos = [
  "/workinprogress/0A03FCDA-E60C-4701-9325-13A49220B9A7.jpeg",
  "/workinprogress/37F32448-1BB6-4FBE-862B-779718337772.jpeg",
  "/workinprogress/847151FC-9E18-43B7-A23D-E11C1A3E91F2.jpeg",
  "/workinprogress/B1EFE727-1DC5-461D-B6D3-4642806E2CC9.jpeg",
  "/workinprogress/DB5F190D-13F3-471A-8A06-90EBC7CF03E1.jpeg",
  "/workinprogress/8690408D-BE8A-487A-9993-9DDAA5F67F6F.jpeg",
  "/workinprogress/9CBDFD4A-322B-4C9A-AA34-3DC1D6299768.jpeg",
  "/workinprogress/A1BB7DCE-9255-4E0C-9CEA-F9CE16708C9C.jpeg",
  "/workinprogress/E71DA809-EE1D-4CE4-B3FA-83AE79C8AFA7.jpeg",
  "/workinprogress/FC1DE4A1-C994-4BD7-BE78-BEF9E1414152.jpeg",
  "/workinprogress/72B41503-43C2-4E68-87C9-28D1F193FAF0.jpeg",
];

export default function NoBuvlaukumaPage() {
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
              No
              <br />
              <span className="text-amber-500">būvlaukuma.</span>
            </h1>
            <p className="lg:col-span-4 text-base text-neutral-400 leading-relaxed">
              Kadri no aktīviem objektiem — tehnika darbībā, darba dienas
              ritms, posmi pa ceļam uz pabeigtu rezultātu.
            </p>
          </div>

          <GalleryGrid photos={wipPhotos} alt="No būvlaukuma" />

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/darbi/pabeigti"
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-neutral-800 hover:border-amber-500 hover:text-amber-500 text-neutral-100 font-medium tracking-wide transition-colors"
            >
              Skatīt pabeigtus darbus
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
