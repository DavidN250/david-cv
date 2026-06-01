import { User, FileText, Eye, BookOpen, Send, Menu, Sun, Moon } from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const NAV = [
  { id: "about",   label: "About",   Icon: User },
  { id: "resume",  label: "Resume",  Icon: FileText },
  { id: "works",   label: "Works",   Icon: Eye },
  { id: "blog",    label: "Blog",    Icon: BookOpen },
  { id: "contact", label: "Contact", Icon: Send },
];

interface Props {
  onOpenDrawer: () => void;
  onToggleDark: () => void;
  dark: boolean;
}

export default function IconNav({ onOpenDrawer, onToggleDark, dark }: Props) {
  const activeId = useScrollSpy(NAV.map((n) => n.id));

  return (
    <aside className="hidden md:flex flex-col items-center w-18 shrink-0 h-full rounded-2xl bg-secondary">
      {/* Logo mark */}
      <div className="mt-6 mb-4 shrink-0">
        <span className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-white font-extrabold text-sm select-none">
          D
        </span>
      </div>

      {/* Hamburger — open drawer */}
      <button
        onClick={onOpenDrawer}
        title="Menu"
        aria-label="Open menu"
        className="mb-1 w-9 h-9 flex items-center justify-center rounded-xl text-subtle hover:text-muted hover:bg-surface transition-colors shrink-0"
      >
        <Menu size={18} strokeWidth={1.5} />
      </button>

      {/* Dark mode toggle */}
      <button
        onClick={onToggleDark}
        title={dark ? "Switch to light mode" : "Switch to dark mode"}
        aria-label="Toggle colour scheme"
        className="mb-5 w-9 h-9 flex items-center justify-center rounded-xl text-subtle hover:text-muted hover:bg-surface transition-colors shrink-0"
      >
        {dark ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
      </button>

      {/* Thin divider */}
      <div className="w-px h-5 bg-border mb-5 shrink-0" />

      {/* Nav */}
      <nav className="flex-1 flex flex-col items-center justify-center gap-1 w-full px-2">
        {NAV.map(({ id, label, Icon }) => {
          const active = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              title={label}
              className={`relative flex flex-col items-center gap-1.5 py-3 w-full rounded-xl transition-colors duration-200 ${
                active
                  ? "text-accent bg-accent-soft"
                  : "text-subtle hover:text-muted hover:bg-surface"
              }`}
            >
              <Icon size={18} strokeWidth={active ? 2 : 1.5} />
              <span className="text-[9px] font-black tracking-widest uppercase leading-none">
                {label}
              </span>
            </a>
          );
        })}
      </nav>

      <div className="mb-5 w-px h-8 bg-border shrink-0" />
    </aside>
  );
}
