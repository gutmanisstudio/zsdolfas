"use client";

import Image from "next/image";

type Props = {
  photos: string[];
  alt: string;
};

export default function GalleryGrid({ photos, alt }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
      {photos.map((src, i) => (
        <figure
          key={src}
          className="relative aspect-[4/5] overflow-hidden bg-neutral-900 group"
        >
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute top-3 left-3">
            <span className="font-mono text-[10px] text-white/85 bg-neutral-950/60 backdrop-blur-sm px-2 py-1">
              {String(i + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </span>
          </div>
        </figure>
      ))}
    </div>
  );
}
