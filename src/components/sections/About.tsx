import Video from "@/components/Video";

const services = [
  "Ceļu un pievadu izbūve",
  "Ēku demontāža",
  "Teritoriju labiekārtošana",
  "Būvlaukumu sagatavošana",
  "Dīķu rakšana un tīrīšana",
];

export default function About() {
  return (
    <section
      id="par-mums"
      className="relative isolate py-16 md:py-20 border-y border-neutral-800 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Video
          src="/photos/catgettingloadedafterwork.mp4"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-neutral-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-center justify-between border-b border-neutral-800/60 pb-6 mb-10">
          <div className="text-xs tracking-[0.3em] uppercase text-amber-500">
            Par mums
          </div>
          <div className="font-mono text-xs text-neutral-500">05 / 06</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.9]">
              Strādājam
              <br />
              visā <span className="text-amber-500">Latvijā.</span>
            </h2>

            <div className="mt-12 max-w-xl border-l-2 border-amber-500 pl-6 py-2">
              <div className="text-xs tracking-[0.3em] uppercase text-neutral-500">
                Apraksts
              </div>
              <p className="mt-2 text-neutral-400 italic">
                {/* TODO: pievienot 3–4 teikumus par uzņēmumu — kas dibināja, kopš kad, kāpēc */}
                Apraksts tiks pievienots drīzumā.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
                Pakalpojumi
              </div>
              <ul className="border-t border-neutral-800/60">
                {services.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-4 py-3 border-b border-neutral-800/60"
                  >
                    <span className="font-mono text-xs text-amber-500">
                      {`0${i + 1}`}
                    </span>
                    <span className="text-neutral-200">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
                Kontakti
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+37126535570"
                  className="text-lg font-semibold hover:text-amber-500 transition-colors"
                >
                  +371 26 535 570
                </a>
                <a
                  href="https://instagram.com/zsdolfas"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-semibold hover:text-amber-500 transition-colors"
                >
                  @zsdolfas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
