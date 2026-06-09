import { Database, Plug, Terminal, Workflow } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const HIGHLIGHT_ICONS = {
  "APIs y automatización": Plug,
  "Carga de datos": Database,
  "Mejora continua": Workflow,
  "Soporte funcional": Terminal,
};

function HighlightCard({ item }) {
  const Icon = HIGHLIGHT_ICONS[item.title] ?? Workflow;

  return (
    <article className="rounded-[1.45rem] border border-slate-700/70 bg-ink-900/75 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-2xl border border-slate-700/80 bg-white/5 text-skyglow-400">
          <Icon className="size-4" />
        </span>
        <div>
          <h3 className="font-display text-lg tracking-tight text-slate-100">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
        </div>
      </div>
    </article>
  );
}

export default function ExperienceSection({ summary, items, highlights }) {
  return (
    <section
      id="experiencia"
      className="snap-start snap-always h-[100svh] w-full overflow-y-auto"
    >
      <div className="mx-auto flex min-h-full w-full max-w-[1280px] flex-col justify-center px-4 pb-8 pt-[calc(var(--header-offset)+0.75rem)] sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={summary.eyebrow} title={summary.title} description={summary.text} />
        </Reveal>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="rounded-[1.75rem] border border-slate-700/70 bg-ink-850/82 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:p-6">
            <div className="relative pl-5">
              <span
                aria-hidden="true"
                className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-skyglow-400/60 to-transparent"
              />

              {items.map((item) => (
                <article
                  key={item.title}
                  className="relative rounded-[1.45rem] border border-slate-700/70 bg-ink-900/75 p-5 pl-6 shadow-[0_16px_40px_rgba(0,0,0,0.14)]"
                >
                  <span className="absolute left-[-0.35rem] top-6 size-2.5 rounded-full bg-skyglow-500 shadow-[0_0_0_6px_rgba(94,124,255,0.12)]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-skyglow-400">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-display text-2xl tracking-tight text-slate-100">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-300">{item.role}</p>

                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 size-1.5 rounded-full bg-skyglow-500" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-[1.75rem] border border-slate-700/70 bg-ink-850/82 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:p-6">
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-skyglow-500" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-skyglow-400">
                Impacto del rol
              </p>
            </div>

            <h2 className="mt-4 font-display text-3xl tracking-tight text-slate-100">
              Capacidad de mejora operativa
            </h2>

            <div className="mt-5 grid gap-4">
              {highlights.map((item, index) => (
                <Reveal key={item.title} delay={80 + index * 60}>
                  <HighlightCard item={item} />
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
