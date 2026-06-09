import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { classNames } from "../lib/classNames";

export default function SkillsSection({ summary, items }) {
  return (
    <section
      id="habilidades"
      className="snap-start snap-always h-[100svh] w-full overflow-y-auto"
    >
      <div className="mx-auto flex min-h-full w-full max-w-[1280px] flex-col justify-center px-4 pb-8 pt-[calc(var(--header-offset)+0.75rem)] sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={summary.eyebrow} title={summary.title} description={summary.text} />
        </Reveal>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((skill, index) => (
            <Reveal
              key={skill.label}
              delay={index * 70}
              className={classNames(
                "h-full rounded-[1.5rem] border border-slate-700/70 bg-ink-850/82 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)]",
                skill.wide && "md:col-span-2 xl:col-span-4"
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-skyglow-400">
                {skill.label}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700/80 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
