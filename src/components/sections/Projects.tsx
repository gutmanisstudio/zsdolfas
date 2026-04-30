import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    href: "/darbi/no-buvlaukuma",
    title: "No būvlaukuma",
    desc: "Tehnika darbībā un kadri no aktīviem objektiem.",
    cover: "/workinprogress/B1EFE727-1DC5-461D-B6D3-4642806E2CC9.jpeg",
    n: "01",
  },
  {
    href: "/darbi/pabeigti",
    title: "Pabeigti darbi",
    desc: "Skati uz objektiem pēc pabeigšanas.",
    cover: "/scenary-finished-work-iguess/BE96D8A4-9100-4271-A8D5-4D8F0746FAB7.jpeg",
    n: "02",
  },
];

export default function Projects() {
  return (
    <section id="darbi" className="bg-neutral-950 py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-center justify-between border-b border-neutral-900 pb-6 mb-10">
          <div className="text-xs tracking-[0.3em] uppercase text-amber-500">
            Galerija
          </div>
          <div className="font-mono text-xs text-neutral-500">04 / 06</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
          <h2 className="lg:col-span-8 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
            Darbi <span className="text-amber-500">divos skatos.</span>
          </h2>
          <p className="lg:col-span-4 text-base text-neutral-400 leading-relaxed">
            Skaties tehniku darbībā vai pabeigtus objektus — izvēlies pēc
            noskaņas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-neutral-900"
            >
              <Image
                src={c.cover}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/10" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-amber-500">
                    {c.n}
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-300">
                    Galerija
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300 max-w-md">
                    {c.desc}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-500 border-b border-amber-500/40 pb-1 group-hover:border-amber-500 transition-colors">
                    Skatīt galeriju
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
