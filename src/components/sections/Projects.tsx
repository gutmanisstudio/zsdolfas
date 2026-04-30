"use client";

import Image from "next/image";
import { useRef } from "react";

const shots = [
  "/photos/galleryshot1.jpg",
  "/photos/galleryshot2.jpg",
  "/photos/galleryshot3.jpg",
  "/photos/galleryshot5.jpg",
];

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("figure");
    const step = card ? card.getBoundingClientRect().width + 12 : 600;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="darbi" className="bg-neutral-950 py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-center justify-between border-b border-neutral-900 pb-6 mb-10">
          <div className="text-xs tracking-[0.3em] uppercase text-amber-500">
            Galerija
          </div>
          <div className="font-mono text-xs text-neutral-500">04 / 06</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
          <h2 className="lg:col-span-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.9]">
            No
            <br />
            <span className="text-amber-500">būvlaukuma.</span>
          </h2>
          <div className="lg:col-span-4 flex items-end justify-end gap-3">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Iepriekšējais"
              className="size-12 md:size-14 border border-neutral-800 hover:border-amber-500 hover:text-amber-500 text-neutral-300 transition-colors flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Nākamais"
              className="size-12 md:size-14 border border-neutral-800 hover:border-amber-500 hover:text-amber-500 text-neutral-300 transition-colors flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none px-6 md:px-10 pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {shots.map((src, i) => (
          <figure
            key={src}
            className="relative shrink-0 snap-start w-[80vw] sm:w-[55vw] md:w-[42vw] lg:w-[32vw] xl:w-[26vw] aspect-[4/3] overflow-hidden group"
          >
            <Image
              src={src}
              alt={`Kadrs no būvlaukuma ${i + 1}`}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 35vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <div className="font-mono text-xs text-white/80 bg-neutral-950/60 backdrop-blur-sm px-2 py-1">
                {String(i + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
