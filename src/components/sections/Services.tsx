import Image from "next/image";
import Link from "next/link";

const services = [
  {
    n: "01",
    eyebrow: "Ceļi un pievadi",
    title: "Ceļu un pievadu izbūve",
    photo: "service-roads.jpg",
    desc: "Grants ceļu būvniecība un remonts, grāvju rakšana.",
  },
  {
    n: "02",
    eyebrow: "Demontāža",
    title: "Ēku demontāža",
    photo: "service-demolition.jpg",
    desc: "Ēku un to pamatu konstrukciju demontāža, būvgružu novešana.",
  },
  {
    n: "03",
    eyebrow: "Labiekārtošana",
    title: "Teritoriju labiekārtošana",
    photo: "service-territory.jpg",
    desc: "Aizaugušu teritoriju attīrīšana, planēšana, apzaļumošana.",
  },
  {
    n: "04",
    eyebrow: "Būvlaukumi",
    title: "Būvlaukumu sagatavošana",
    photo: "service-sitework.jpg",
    desc: "Zemes virskārtas norakšana, būvbedres rakšana, minerālmateriālu slāņa izbūve.",
  },
  {
    n: "05",
    eyebrow: "Dīķi un grāvji",
    title: "Dīķu rakšana un tīrīšana",
    photo: "service-ponds.jpg",
    desc: "Dīķu rakšana, labošana, tīrīšana.",
  },
  {
    n: "06",
    eyebrow: "Ūdens un kanalizācija",
    title: "Komunikāciju izbūve",
    photo: "service-communications.jpg",
    desc: "Ūdens un kanalizācijas sistēmu un to pieslēgumu izbūve.",
  },
];

export default function Services() {
  return (
    <section id="pakalpojumi" className="bg-neutral-950 py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-center justify-between border-b border-neutral-900 pb-6 mb-10">
          <div className="text-xs tracking-[0.3em] uppercase text-amber-500">
            Pakalpojumi
          </div>
          <div className="font-mono text-xs text-neutral-500">02 / 06</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12">
          <h2 className="lg:col-span-8 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
            Ko <span className="text-amber-500">piedāvājam.</span>
          </h2>
          <Link
            href="/pieprasit-tami"
            className="lg:col-span-4 lg:justify-self-end inline-flex items-center gap-3 px-6 py-3.5 border border-neutral-700 hover:border-amber-500 text-neutral-100 hover:text-amber-500 font-medium tracking-wide transition-colors w-fit"
          >
            Pieprasīt tāmi
            <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => (
            <Link
              key={s.n}
              href="/pieprasit-tami"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-800 hover:border-amber-500/40 transition-colors"
            >
              {/* Background image */}
              <Image
                src={`/photos/${s.photo}`}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              {/* Strong bottom gradient — covers ~65% of card */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 via-40% to-transparent to-65%" />

              {/* Number badge top-left */}
              <div className="absolute top-4 left-4">
                <span className="font-mono text-[10px] tracking-wider text-amber-500 bg-neutral-950/80 backdrop-blur-sm px-2.5 py-1.5 border border-amber-500/30 rounded-md">
                  {s.n} / 06
                </span>
              </div>

              {/* Content stack — bottom-aligned */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col gap-3">
                <span className="text-[10px] tracking-[0.25em] uppercase text-amber-500/90 font-medium">
                  {s.eyebrow}
                </span>

                <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-tight text-white">
                  {s.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-300/85">
                  {s.desc}
                </p>

                <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-amber-500">
                  <span className="border-b border-amber-500/40 pb-0.5 group-hover:border-amber-500 transition-colors">
                    Pieprasīt tāmi
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-500">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
