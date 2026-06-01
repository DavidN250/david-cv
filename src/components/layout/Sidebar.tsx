import { personal } from "../../data/resume";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "works", label: "Works" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const title = useTypewriter(personal.titles);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  return (
    <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-[280px] bg-gray-900 border-r border-gray-800 z-40 overflow-y-auto">
      {/* Profile */}
      <div className="px-8 pt-10 pb-6 border-b border-gray-800">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/30 to-indigo-900/60 flex items-center justify-center text-4xl mb-4 border border-accent/20">
          👨‍💻
        </div>
        <h1 className="text-white font-extrabold text-lg leading-tight">{personal.name}</h1>
        <div className="h-6 mt-1">
          <span className="text-accent text-sm font-medium">
            {title}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="px-4 py-6 flex-1">
        <ul className="space-y-1">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeId === id
                    ? "bg-accent/10 text-accent"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    activeId === id ? "bg-accent" : "bg-gray-600"
                  }`}
                />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom */}
      <div className="px-8 pb-8">
        <div className="space-y-1 mb-5 text-xs text-gray-500">
          <p>📍 {personal.location}</p>
          <p>✉️ {personal.email}</p>
          <p className="text-accent font-medium">{personal.availability}</p>
        </div>
        <div className="flex gap-3 mb-5">
          {Object.entries(personal.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-accent capitalize transition-colors"
            >
              {platform}
            </a>
          ))}
        </div>
        <a
          href={personal.cvUrl}
          download
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-accent text-gray-950 font-bold text-sm rounded-xl hover:bg-accent/90 transition-colors"
        >
          ↓ Download CV
        </a>
      </div>
    </aside>
  );
}
