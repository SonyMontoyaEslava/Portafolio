import Container from "./Container";

export default function Footer({ note, links }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-700/70 bg-ink-900/55 py-4">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{note}</p>
          <p>© {year} Sony Montoya Eslava</p>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
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
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
