import type { Metadata } from "next";
import Image from "next/image";
import Fleet from "@/components/sections/Fleet";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Tehnika · ZS DOLFAS",
  description: "Ekskavatori, buldozeri, iekrāvēji un kravas tehnika darbībā.",
};

const tehnikaPhotos = [
  "/tehnika/B1EFE727-1DC5-461D-B6D3-4642806E2CC9.jpeg",
  "/tehnika/DB5F190D-13F3-471A-8A06-90EBC7CF03E1.jpeg",
  "/tehnika/4E2CB0A6-A0BC-45A9-82A3-DD8B90FF7CE0.jpeg",
  "/tehnika/8B4BF351-6258-4C10-89C1-A415F3FAC80C.jpeg",
  "/tehnika/4AD63A2B-E944-49F9-8E57-9571699116C6.jpeg",
];

export default function TehnikaPage() {
  return (
    <main className="bg-neutral-950 pt-20 md:pt-24">
      <Fleet />

      <section className="bg-neutral-950 py-16 md:py-20 border-t border-neutral-900">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex items-center justify-between border-b border-neutral-900 pb-6 mb-10">
            <div className="text-xs tracking-[0.3em] uppercase text-amber-500">
              Tehnikas parks
            </div>
            <div className="font-mono text-xs text-neutral-500">
              {String(tehnikaPhotos.length).padStart(2, "0")} vienības
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <h2 className="lg:col-span-8 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
              Mūsu <span className="text-amber-500">tehnikas parks.</span>
            </h2>
            <p className="lg:col-span-4 text-base text-neutral-400 leading-relaxed">
              Tehnikas vienības darba dienā — ekskavatori, buldozeri, iekrāvēji
              un kravas tehnika.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
            {tehnikaPhotos.map((src, i) => (
              <figure
                key={src}
                className="relative aspect-[3/4] overflow-hidden bg-neutral-900 group"
              >
                <Image
                  src={src}
                  alt={`Tehnika ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] text-white/85 bg-neutral-950/60 backdrop-blur-sm px-2 py-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
