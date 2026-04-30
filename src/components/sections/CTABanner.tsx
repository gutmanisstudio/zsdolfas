import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative bg-neutral-950 border-y border-neutral-900 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(245,158,11,0.18),_transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <div className="text-xs tracking-[0.3em] uppercase text-amber-500 mb-6">
            Sākt darbu
          </div>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.9]">
            Vajag <span className="text-amber-500">tāmi?</span>
          </h3>
          <p className="mt-6 text-neutral-400 max-w-xl text-lg">
            Aizpildi īsu formu — pieprasījums tiks sagatavots un nosūtīts pa
            WhatsApp.
          </p>
        </div>

        <div className="lg:col-span-4 lg:justify-self-end flex flex-col gap-3 w-full lg:w-auto">
          <Link
            href="/pieprasit-tami"
            className="inline-flex items-center justify-between gap-6 px-7 py-5 bg-amber-500 text-neutral-950 font-semibold tracking-wide hover:bg-amber-400 transition-colors text-lg"
          >
            <span>Pieprasīt tāmi</span>
            <span className="text-xl">→</span>
          </Link>
          <a
            href="tel:+37126535570"
            className="inline-flex items-center justify-between gap-6 px-7 py-5 border border-neutral-800 hover:border-amber-500 text-neutral-200 hover:text-amber-500 font-medium tracking-wide transition-colors"
          >
            <span>+371 26 535 570</span>
            <span className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
