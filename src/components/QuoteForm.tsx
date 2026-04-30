"use client";

import { useState } from "react";

const WA_NUMBER = "37126535570";

const serviceOptions = [
  "Ceļu un pievadu izbūve",
  "Ēku demontāža",
  "Teritoriju labiekārtošana",
  "Būvlaukumu sagatavošana",
  "Dīķu rakšana / tīrīšana",
  "Cits",
];

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Sveiki! Vēlos pieprasīt tāmi.",
      "",
      `Vārds: ${name}`,
      `Telefons: ${phone}`,
      `Pakalpojums: ${service}`,
      location ? `Atrašanās vieta: ${location}` : "",
      "",
      details ? `Apraksts: ${details}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 transition-colors";

  return (
    <form onSubmit={onSubmit} className="mt-12 flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2">
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-500">
            Vārds
          </span>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            placeholder="Jānis Bērziņš"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-500">
            Telefons
          </span>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldClass}
            placeholder="+371 …"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-xs tracking-[0.2em] uppercase text-neutral-500">
          Pakalpojums
        </span>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={fieldClass}
        >
          {serviceOptions.map((o) => (
            <option key={o} value={o} className="bg-neutral-900">
              {o}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-xs tracking-[0.2em] uppercase text-neutral-500">
          Atrašanās vieta <span className="text-neutral-700">(novads / pilsēta)</span>
        </span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={fieldClass}
          placeholder="Piem., Ogres novads"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-xs tracking-[0.2em] uppercase text-neutral-500">
          Apraksts <span className="text-neutral-700">(neobligāti)</span>
        </span>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={5}
          className={fieldClass}
          placeholder="Īss apraksts par darbu, termiņi, ja zināmi…"
        />
      </label>

      <button
        type="submit"
        className="mt-4 inline-flex items-center justify-center gap-3 px-7 py-4 bg-amber-500 text-neutral-950 font-medium tracking-wide hover:bg-amber-400 transition-colors"
      >
        Sūtīt uz WhatsApp
        <span className="text-xl">→</span>
      </button>

      <p className="text-xs text-neutral-600 mt-2">
        Spiežot pogu, atvērsies WhatsApp ar sagatavotu ziņu. Pārbaudi un
        apstiprini sūtīšanu pats.
      </p>
    </form>
  );
}
