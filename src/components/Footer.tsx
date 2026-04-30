import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="inline-block size-2 bg-amber-500 rounded-sm" />
              <span className="text-lg font-semibold">
                ZS <span className="text-amber-500">DOLFAS</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-sm">
              Strādājam ar privātpersonām un uzņēmumiem visā Latvijā kopš
              1999. gada.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Kontakti
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+37126535570"
                className="text-neutral-200 hover:text-amber-500 transition-colors"
              >
                +371 26 535 570
              </a>
              <a
                href="https://instagram.com/zsdolfas"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-200 hover:text-amber-500 transition-colors"
              >
                @zsdolfas
              </a>
              <Link
                href="/pieprasit-tami"
                className="text-neutral-200 hover:text-amber-500 transition-colors"
              >
                Pieprasīt tāmi →
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Rekvizīti
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div>
                <dt className="text-neutral-500">Nosaukums</dt>
                <dd className="text-neutral-200">ZS &ldquo;Dolfas&rdquo;</dd>
              </div>
              <div>
                <dt className="text-neutral-500">Adrese</dt>
                <dd className="text-neutral-200">
                  Raiskuma pagasts, Cēsu novads, LV-4146
                </dd>
              </div>
              <div>
                <dt className="text-neutral-500">Reģ. Nr.</dt>
                <dd className="text-neutral-200 font-mono">LV54101031271</dd>
              </div>
              <div>
                <dt className="text-neutral-500">Banka</dt>
                <dd className="text-neutral-200">AS &ldquo;SEB banka&rdquo;</dd>
              </div>
              <div>
                <dt className="text-neutral-500">SWIFT / BIC</dt>
                <dd className="text-neutral-200 font-mono">UNLALV2X</dd>
              </div>
              <div>
                <dt className="text-neutral-500">Konts</dt>
                <dd className="text-neutral-200 font-mono break-all">
                  LV75UNLA0004012643851
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-900 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} ZS DOLFAS · Visas tiesības
            aizsargātas
          </div>
          <div className="font-mono">Raiskuma pagasts · Latvija</div>
        </div>
      </div>
    </footer>
  );
}
