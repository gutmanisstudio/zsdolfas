import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden isolate">
      <div className="absolute inset-0 z-0 animate-hero-image">
        <Image
          src="/photos/hero.jpg"
          alt="ZS DOLFAS tehnika būvlaukumā"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_50%]"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-neutral-950 via-neutral-950/70 via-50% to-neutral-950/10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/20" />

      <div className="relative z-20 h-svh min-h-[680px] mx-auto max-w-[1600px] px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28 pt-32">
        <div className="max-w-3xl">
          <div
            className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-amber-500 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="inline-block w-8 h-px bg-amber-500" />
            Strādājam visā Latvijā
          </div>
          <h1
            className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-semibold tracking-tight leading-[0.9] animate-fade-in-up"
            style={{ animationDelay: "0.65s" }}
          >
            ZS <span className="text-amber-500">DOLFAS</span>
          </h1>
          <p
            className="mt-6 text-base md:text-lg text-neutral-100 font-medium animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            Strādājam ar privātpersonām un uzņēmumiem.
          </p>
          <p
            className="mt-4 max-w-xl text-sm md:text-base text-neutral-300 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            Ceļu un pievadu izbūve · Ēku demontāža · Teritoriju
            labiekārtošana · Būvlaukumu sagatavošana · Dīķu rakšana ·
            Komunikāciju izbūve.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <Link
              href="/pieprasit-tami"
              className="px-7 py-4 bg-amber-500 text-neutral-950 font-medium tracking-wide hover:bg-amber-400 transition-colors"
            >
              Pieprasīt tāmi
            </Link>
            <Link
              href="/pakalpojumi"
              className="px-7 py-4 border border-neutral-700 hover:border-neutral-500 text-neutral-100 font-medium tracking-wide transition-colors backdrop-blur-sm bg-neutral-950/30"
            >
              Mūsu pakalpojumi
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
