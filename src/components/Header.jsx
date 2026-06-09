import { classNames } from "../lib/classNames";

export default function Header({ navigation, activeSection }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-3 lg:px-6">
      <div className="mx-auto flex h-14 w-full max-w-[1280px] items-center gap-2 rounded-[24px] border border-slate-700/70 bg-ink-850/82 px-3 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur sm:h-16 sm:gap-3 sm:rounded-[28px] sm:px-4">
        <a href="#perfil" className="flex-none">
          <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-300 sm:text-sm sm:tracking-[0.3em]">
            Sony Montoya
          </span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="ml-auto flex min-w-0 flex-1 items-center justify-start gap-2 overflow-x-auto rounded-full px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={classNames(
                  "whitespace-nowrap rounded-full border px-3 py-2 text-xs font-medium transition-all sm:px-4 sm:text-sm",
                  isActive
                    ? "border-skyglow-400/40 bg-skyglow-500/14 text-white shadow-[0_0_0_1px_rgba(94,124,255,0.12)]"
                    : "border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-100"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
