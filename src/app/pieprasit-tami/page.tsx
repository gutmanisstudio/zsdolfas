import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Pieprasīt tāmi · ZS DOLFAS",
  description:
    "Aizpildi formu un atsūti pieprasījumu uz WhatsApp — atrunāsim termiņus un cenu.",
};

export default function QuotePage() {
  return (
    <main className="min-h-svh bg-neutral-950">
      <div className="mx-auto max-w-3xl px-6 md:px-10 pt-28 md:pt-32 pb-24">
        <Link
          href="/"
          className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          ← Atpakaļ
        </Link>

        <div className="mt-10">
          <div className="text-xs tracking-[0.3em] uppercase text-amber-500">
            Pieprasīt tāmi
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
            Pastāsti par darbu.
          </h1>
          <p className="mt-6 text-neutral-400 max-w-xl">
            Aizpildi laukus un nospied <strong className="text-neutral-200">Sūtīt uz WhatsApp</strong> —
            tavi dati tiks ielādēti gatavā ziņā un Tu varēsi pārbaudīt pirms
            sūtīšanas.
          </p>
        </div>

        <QuoteForm />
      </div>
    </main>
  );
}
