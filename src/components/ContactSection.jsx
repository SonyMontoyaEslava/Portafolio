import { Languages, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function InfoCard({ icon: Icon, label, children }) {
  return (
    <article className="rounded-[1.45rem] border border-slate-700/70 bg-ink-900/75 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-2xl border border-slate-700/80 bg-white/5 text-skyglow-400">
          <Icon className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-skyglow-400">{label}</p>
          <div className="mt-2 text-sm leading-6 text-slate-300">{children}</div>
        </div>
      </div>
    </article>
  );
}

export default function ContactSection({ contact, footerNote, footerLinks }) {
  const year = new Date().getFullYear();

  return (
    <section
      id="contacto"
      className="snap-start snap-always h-[100svh] w-full overflow-y-auto"
    >
      <div className="mx-auto flex min-h-full w-full max-w-[1280px] flex-col justify-center px-4 pb-8 pt-[calc(var(--header-offset)+0.75rem)] sm:px-6 lg:px-8">
        <Reveal className="rounded-[1.75rem] border border-slate-700/70 bg-ink-850/82 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:p-6">
          <SectionHeading eyebrow={contact.eyebrow} title={contact.title} description={contact.text} />

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-skyglow-400/45 hover:text-white"
                >
                  <Mail className="size-4 text-skyglow-400" />
                  <span>{contact.email}</span>
                </a>
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-skyglow-400/45 hover:text-white"
                >
                  <Phone className="size-4 text-skyglow-400" />
                  <span>{contact.phone}</span>
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <InfoCard icon={MapPin} label="Ubicación">
                <p>{contact.location}</p>
              </InfoCard>

              <InfoCard icon={Languages} label="Idiomas">
                <div className="flex flex-wrap gap-2">
                  {contact.languages.map((item) => (
                    <span
                      key={item.label}
                      className="rounded-full border border-slate-700/80 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {item.label}: {item.value}
                    </span>
                  ))}
                </div>
              </InfoCard>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 border-t border-slate-700/70 pt-4">
          <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              {footerNote ? <p>{footerNote}</p> : null}
              <p>© {year} Sony Montoya Eslava</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {footerLinks?.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-slate-700/70 px-3 py-1.5 transition hover:border-skyglow-400/45 hover:text-slate-100"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={link.label}
                    className="rounded-full border border-slate-700/70 px-3 py-1.5 text-slate-400"
                  >
                    {link.label}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
