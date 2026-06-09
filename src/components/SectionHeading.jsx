import { classNames } from "../lib/classNames";

export default function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <div className={classNames("max-w-3xl space-y-3", className)}>
      <div className="flex items-center gap-3">
        <span className="h-5 w-1 rounded-full bg-skyglow-500" aria-hidden="true" />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-skyglow-400">{eyebrow}</p>
      </div>
      <h2 className="font-display text-3xl leading-tight tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
