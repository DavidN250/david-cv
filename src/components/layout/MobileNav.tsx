import { useState } from "react";
import { personal } from "../../data/resume";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { asset } from "../../lib/utils";

const navLinks = [
  { id: "hero",    label: "Home" },
  { id: "about",   label: "About" },
  { id: "resume",  label: "Resume" },
  { id: "works",   label: "Works" },
  { id: "blog",    label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  return (
    <header className="md:hidden fixed top-0.5 left-0 right-0 z-50 bg-primary backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-5 h-14">
        <a href="#hero" className="text-app-white font-extrabold text-lg">
          {personal.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 p-1 text-muted hover:text-app-white"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="bg-primary border-t border-border px-5 py-4">
          <ul className="space-y-1">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeId === id ? "text-accent bg-accent-soft" : "text-muted hover:text-app-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-border">
            <a
              href={asset(personal.cvUrl)}
              download
              className="block text-center py-2.5 bg-accent text-app-white font-bold text-sm rounded-xl"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
