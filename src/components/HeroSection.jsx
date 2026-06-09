import {
  Briefcase,
  Database,
  Mail,
  MapPin,
  Phone,
  Plug,
  Terminal,
  Workflow,
} from "lucide-react";
import Reveal from "./Reveal";

const ACTION_ICON = {
  Correo: Mail,
  Teléfono: Phone,
  Experiencia: Briefcase,
};

const CAPABILITY_ICON = {
  "Integración de APIs": Plug,
  "Entornos Linux": Terminal,
  Automatización: Workflow,
  "Carga masiva de datos": Database,
};

const SUMMARY_POINTS = [
  "Integración de APIs para conectar sistemas y automatizar procesos.",
  "Optimización operativa con foco en reducir tareas manuales.",
  "Desarrollo y mantenimiento de soluciones internas con buenas prácticas.",
];

export default function HeroSection({ hero, capabilities = [] }) {
  return (
    <Reveal>
      <div className="grid items-stretch gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-5">
        {/* Presentación */}
        <div className="rounded-[1.75rem] border border-slate-700/70 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(9,14,26,0.96))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-7">
          <div className="flex items-center gap-3">
            <span className="h-5 w-1 rounded-full bg-skyglow-500" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-skyglow-400 sm:text-sm">
              {hero.eyebrow}
            </p>
          </div>

          <h1 className="mt-3 font-display text-3xl leading-tight tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
            {hero.name}
          </h1>

          <p className="mt-2 text-base text-slate-300 sm:text-lg">{hero.role}</p>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-ink-850/82 px-3 py-1.5 text-xs text-slate-300 sm:text-sm">
            <MapPin className="size-4 text-skyglow-400" />
            <span>{hero.location}</span>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-[0.95rem] sm:leading-7">
            {hero.intro}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {hero.actions.map((action) => {
              const Icon = ACTION_ICON[action.label] ?? Briefcase;
              const isPrimary = action.label === "Correo";

              return (
                <a
                  key={action.label}
                  href={action.href}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 ${
                    isPrimary
                      ? "border border-skyglow-400/35 bg-skyglow-500/15 text-white hover:border-skyglow-400/60"
                      : "border border-slate-700/80 bg-white/5 text-slate-200 hover:border-skyglow-400/45 hover:text-white"
                  }`}
                >
                  <Icon className="size-4 text-skyglow-400" />
                  <span>{action.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Resumen + capacidades */}
        <div className="grid content-start gap-4">
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-ink-850/82 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-skyglow-400">
              Resumen ejecutivo
            </p>
            <h2 className="mt-1 font-display text-lg tracking-tight text-slate-100 sm:text-xl">
              Desarrollo orientado a automatización
            </h2>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
              {SUMMARY_POINTS.map((point) => (
                <li key={point} className="flex gap-2">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-skyglow-500"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {capabilities.length > 0 ? (
            <div className="rounded-[1.75rem] border border-slate-700/70 bg-ink-850/82 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-skyglow-400">
                Capacidades clave
              </p>

              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {capabilities.map((item) => {
                  const Icon = CAPABILITY_ICON[item.title] ?? Workflow;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-2.5 rounded-2xl border border-slate-700/70 bg-white/5 px-3 py-2"
                    >
                      <span className="grid size-8 shrink-0 place-items-center rounded-xl border border-slate-700/80 bg-white/5 text-skyglow-400">
                        <Icon className="size-4" />
                      </span>
                      <span className="text-xs font-medium text-slate-200 sm:text-sm">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
