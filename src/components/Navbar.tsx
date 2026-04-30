"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Pakalpojumi", href: "/pakalpojumi" },
  { label: "Tehnika", href: "/tehnika" },
  { label: "Darbi", href: "/darbi" },
  { label: "Par mums", href: "/par-mums" },
  { label: "Kontakti", href: "/kontakti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 h-16 md:h-20 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="ZS DOLFAS"
            onClick={() => {
              setOpen(false);
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/photos/logo.jpg"
              alt="ZS DOLFAS"
              width={64}
              height={64}
              priority
              className="h-10 sm:h-12 md:h-14 w-auto object-contain mix-blend-lighten"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/pieprasit-tami"
              className="text-[11px] sm:text-xs md:text-sm tracking-wider uppercase font-medium px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-amber-500 text-neutral-950 hover:bg-amber-400 transition-colors whitespace-nowrap"
            >
              Pieprasīt tāmi
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
              aria-expanded={open}
              className="md:hidden size-10 flex items-center justify-center text-neutral-100 hover:text-amber-500 transition-colors"
            >
              <span className="sr-only">Izvēlne</span>
              <div className="relative w-5 h-4">
                <span
                  className={`absolute left-0 right-0 h-px bg-current transition-all duration-300 ${
                    open ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 top-1/2 h-px bg-current transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-px bg-current transition-all duration-300 ${
                    open ? "top-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 z-40 bg-neutral-950 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col pt-24 pb-10 px-6">
          <ul className="flex flex-col gap-2 border-t border-neutral-900">
            {links.map((l, i) => (
              <li key={l.href} className="border-b border-neutral-900">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-5 text-2xl font-semibold tracking-tight text-neutral-100 hover:text-amber-500 transition-colors"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-amber-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {l.label}
                  </span>
                  <span className="text-neutral-600">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3">
            <Link
              href="/pieprasit-tami"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-4 px-5 py-4 bg-amber-500 text-neutral-950 font-semibold tracking-wide hover:bg-amber-400 transition-colors"
            >
              <span>Pieprasīt tāmi</span>
              <span className="text-lg">→</span>
            </Link>
            <a
              href="tel:+37126535570"
              className="flex items-center justify-between gap-4 px-5 py-4 border border-neutral-800 text-neutral-100 font-medium"
            >
              <span>+371 26 535 570</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
