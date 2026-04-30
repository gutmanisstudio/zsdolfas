import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="kontakti"
      className="relative bg-amber-500 text-neutral-950 py-16 md:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-center justify-between border-b border-neutral-900/20 pb-6 mb-10">
          <div className="text-xs tracking-[0.3em] uppercase text-neutral-900/70">
            Kontakti
          </div>
          <div className="font-mono text-xs text-neutral-900/70">06 / 06</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12">
          <h2 className="lg:col-span-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.9]">
            Sazinies
            <br />
            ar mums.
          </h2>
          <Link
            href="/pieprasit-tami"
            className="lg:col-span-4 lg:justify-self-end inline-flex items-center gap-3 px-6 py-3.5 bg-neutral-950 text-amber-500 font-medium tracking-wide hover:bg-neutral-800 transition-colors w-fit"
          >
            Pieprasīt tāmi
            <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a
            href="tel:+37126535570"
            className="group bg-neutral-950 text-white p-8 md:p-10 hover:bg-neutral-800 transition-colors"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs text-amber-500">01</span>
              <div className="text-xs tracking-[0.3em] uppercase text-neutral-500">
                Zvani
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-semibold tracking-tight">
              +371 26 535 570
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              Tieši pa tālruni — ātrākais veids
            </div>
          </a>

          <a
            href="https://instagram.com/zsdolfas"
            target="_blank"
            rel="noreferrer"
            className="group bg-neutral-950 text-white p-8 md:p-10 hover:bg-neutral-800 transition-colors"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs text-amber-500">02</span>
              <div className="text-xs tracking-[0.3em] uppercase text-neutral-500">
                Instagram
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-semibold tracking-tight">
              @zsdolfas
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              Sekot darbiem — IG profils
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
