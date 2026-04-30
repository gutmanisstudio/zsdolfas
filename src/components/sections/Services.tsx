import Image from "next/image";
import Link from "next/link";

const services = [
  { n: "01", title: "Ceļu un pievadu izbūve", photo: "service-roads.jpg" },
  { n: "02", title: "Ēku demontāža", photo: "service-demolition.jpg" },
  { n: "03", title: "Teritoriju labiekārtošana", photo: "service-landscaping.jpg" },
  { n: "04", title: "Būvlaukumu sagatavošana", photo: "service-sitework.jpg" },
  { n: "05", title: "Dīķu rakšana un tīrīšana", photo: "service-ponds.jpg" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900">
          {services.map((s) => (
            <article
              key={s.n}
              className="group bg-neutral-950 relative overflow-hidden aspect-[4/5]"
            >
              <Image
                src={`/photos/${s.photo}`}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/40 to-neutral-950/10" />
              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                <span className="font-mono text-xs text-amber-500">{s.n}</span>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-tight">
                  {s.title}
                </h3>
              </div>
            </article>
          ))}
          <article className="bg-neutral-950 aspect-[4/5] flex flex-col justify-between p-5 md:p-6 border border-neutral-900">
            <span className="font-mono text-xs text-neutral-600">06</span>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-500">
                Cits jautājums?
              </div>
              <Link
                href="/pieprasit-tami"
                className="mt-2 inline-flex items-center gap-2 text-xl md:text-2xl font-semibold tracking-tight text-amber-500 hover:text-amber-400 transition-colors"
              >
                Sazinies →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
