import { BookOpen, GraduationCap, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function EducationCard({ item, icon: Icon }) {
  return (
    <article className="rounded-[1.45rem] border border-slate-700/70 bg-ink-900/75 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-2xl border border-slate-700/80 bg-white/5 text-skyglow-400">
          <Icon className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-skyglow-400">
            {item.period}
          </p>
          <h3 className="mt-2 font-display text-lg tracking-tight text-slate-100">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{item.subtitle}</p>
        </div>
      </div>
    </article>
  );
}

export default function EducationSection({ education, complementaryEducation }) {
  return (
    <section
      id="educacion"
      className="snap-start snap-always h-[100svh] w-full overflow-y-auto"
    >
      <div className="mx-auto flex min-h-full w-full max-w-[1280px] flex-col justify-center px-4 pb-8 pt-[calc(var(--header-offset)+0.75rem)] sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Educación"
            title="Formación académica y complementaria"
            description="Base técnica formal y aprendizaje continuo en herramientas modernas, automatización e inteligencia artificial."
          />
        </Reveal>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="rounded-[1.75rem] border border-slate-700/70 bg-ink-850/82 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl border border-slate-700/80 bg-white/5 text-skyglow-400">
                <GraduationCap className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-skyglow-400">
                  Educación formal
                </p>
                <h2 className="mt-2 font-display text-3xl tracking-tight text-slate-100">
                  Formación académica
                </h2>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {education.map((item, index) => (
                <Reveal key={item.title} delay={80 + index * 60}>
                  <EducationCard item={item} icon={GraduationCap} />
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-[1.75rem] border border-slate-700/70 bg-ink-850/82 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl border border-slate-700/80 bg-white/5 text-skyglow-400">
                <Sparkles className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-skyglow-400">
                  Complementaria
                </p>
                <h2 className="mt-2 font-display text-3xl tracking-tight text-slate-100">
                  Formación continua
                </h2>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {complementaryEducation.map((item, index) => (
                <Reveal key={item.title} delay={80 + index * 60}>
                  <EducationCard item={item} icon={BookOpen} />
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
