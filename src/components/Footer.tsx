export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-block size-2 bg-amber-500 rounded-sm" />
          <span className="font-semibold">
            ZS <span className="text-amber-500">DOLFAS</span>
          </span>
          <span className="ml-3 text-sm text-neutral-500">
            Latvija
          </span>
        </div>

        <div className="text-sm text-neutral-500">
          © {new Date().getFullYear()} ZS DOLFAS · Visas tiesības aizsargātas
        </div>
      </div>
    </footer>
  );
}
