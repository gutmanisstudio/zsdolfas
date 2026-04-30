import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Kontakti · ZS DOLFAS",
  description: "Sazinies ar ZS DOLFAS — telefons, WhatsApp, Instagram.",
};

export default function KontaktiPage() {
  return (
    <main className="bg-neutral-950 pt-20 md:pt-24">
      <Contact />
    </main>
  );
}
