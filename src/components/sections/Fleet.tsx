"use client";

import { useState } from "react";
import { HardHat, Wrench, Users } from "lucide-react";

const machines = [
  {
    name: "Ekskavators",
    role: "Rakšana · Planēšana · Demontāža",
    video: "/photos/smallexcavatoronsite.mp4",
  },
  {
    name: "Buldozers",
    role: "Līmeņošana · Grunts pārvietošana",
    video: "/photos/dozersandyworking.mp4",
  },
  {
    name: "Pašizgāzējs",
    role: "Materiālu transports",
    video: "/photos/tractordumping.mp4",
  },
  {
    name: "Ekskavators-iekrāvējs",
    role: "Universāls darbs",
    video: "/photos/fleet.mp4",
  },
];

export default function Fleet() {
  const [active, setActive] = useState(0);
  const current = machines[active];

  return (
    <section
      id="tehnika"
      className="bg-neutral-900 py-16 md:py-20 border-y border-neutral-800"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-10">
          <div className="text-xs tracking-[0.3em] uppercase text-amber-500">
            Tehnika darbībā
          </div>
          <div className="font-mono text-xs text-neutral-500">03 / 06</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.9]">
              Mūsu
              <br />
              <span className="text-amber-500">darbarīki.</span>
            </h2>

            <ul className="mt-12 border-t border-neutral-800">
              {machines.map((m, i) => {
                const isActive = i === active;
                return (
                  <li key={m.name} className="border-b border-neutral-800">
                    <button
                      onClick={() => setActive(i)}
                      className={`w-full text-left py-5 flex items-center justify-between gap-6 group transition-colors ${
                        isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200"
                      }`}
                    >
                      <div className="flex items-baseline gap-6 md:gap-8">
                        <span
                          className={`font-mono text-sm shrink-0 transition-colors ${
                            isActive ? "text-amber-500" : "text-neutral-600"
                          }`}
                        >
                          {`0${i + 1}`}
                        </span>
                        <div>
                          <div className="text-xl md:text-2xl font-semibold tracking-tight">
                            {m.name}
                          </div>
                          <div
                            className={`mt-1 text-sm transition-colors ${
                              isActive ? "text-amber-500/70" : "text-neutral-600"
                            }`}
                          >
                            {m.role}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`text-xl transition-all ${
                          isActive
                            ? "text-amber-500 translate-x-1"
                            : "text-neutral-700"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex items-center gap-6 text-sm text-neutral-500">
              <span className="font-mono">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(machines.length).padStart(2, "0")}
              </span>
              <span>Video kadri no būvlaukumiem</span>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
              <div className="bg-amber-500 text-neutral-950 p-6">
                <HardHat className="size-8 stroke-[1.5]" aria-hidden />
                <h3 className="mt-5 text-lg font-bold tracking-tight leading-tight">
                  Augsti kvalificēti operatori
                </h3>
                <p className="mt-2 text-sm leading-snug text-neutral-950/85">
                  Mūsu tehnikas operatori ir sertificēti, pieredzes bagāti un
                  ar augstu atbildības sajūtu kā pret tehniku, tā arī pret
                  veicamo darbu.
                </p>
              </div>
              <div className="bg-neutral-950 text-neutral-100 p-6 border border-neutral-800">
                <Wrench className="size-8 stroke-[1.5] text-amber-500" aria-hidden />
                <h3 className="mt-5 text-lg font-bold tracking-tight leading-tight">
                  Augstas kvalitātes tehnika
                </h3>
                <p className="mt-2 text-sm leading-snug text-neutral-300">
                  Vadošo būvtehnikas un traktortehnikas zīmolu modeļi. Mūsu
                  tehniskais personāls rūpējas, lai tehnika vienmēr būtu
                  izcilā kārtībā — spējam operatīvi reaģēt arī neparedzētās
                  situācijās.
                </p>
              </div>
              <div className="bg-neutral-950 text-neutral-100 p-6 border border-neutral-800 sm:col-span-2 lg:col-span-1">
                <Users className="size-8 stroke-[1.5] text-amber-500" aria-hidden />
                <h3 className="mt-5 text-lg font-bold tracking-tight leading-tight">
                  Profesionāli tehnikas operatori
                </h3>
                <p className="mt-2 text-sm leading-snug text-neutral-300">
                  Papildu tehnikas nomai piedāvājam arī pieredzējušu tehnikas
                  operatoru pakalpojumus jūsu projektu realizēšanai. Spējam
                  palīdzēt ar ēku demontāžas darbiem, ceļu, komunikāciju un
                  tranšeju rakšanu, upju grunts un stāvmalu tīrīšanu, karjeru
                  atsegšanu un cita veida darbiem.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 self-stretch">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-full overflow-hidden bg-neutral-950">
              <video
                key={current.video}
                src={current.video}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-amber-500">
                      Tagad rāda
                    </div>
                    <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight text-white">
                      {current.name}
                    </div>
                  </div>
                  <div className="bg-amber-500 text-neutral-950 px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase font-semibold">
                    Live · Mute
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
