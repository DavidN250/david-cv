import { Code2, ArrowDown } from "lucide-react";
import { personal } from "../../data/resume";
import { useTypewriter } from "../../hooks/useTypewriter";
import Button from "../ui/Button";

export default function Hero() {
  const title = useTypewriter(personal.titles);

  return (
    /* Mobile only — desktop identity lives in ProfileCard */
    <section
      id="hero"
      className="md:hidden relative min-h-screen flex items-center justify-center bg-app-black overflow-hidden pt-14"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(129,140,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(129,140,248,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-soft rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-sm mx-auto">
        <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-accent-soft to-primary border border-border flex items-center justify-center mx-auto mb-6">
          <Code2 size={44} className="text-accent" strokeWidth={1.25} />
        </div>
        <h1 className="font-display text-4xl font-bold text-app-white mb-2">{personal.name}</h1>
        <div className="h-8 flex items-center justify-center mb-6">
          <span className="font-mono text-base font-medium text-muted">
            {title}<span className="animate-pulse text-accent">|</span>
          </span>
        </div>
        <p className="text-muted text-sm leading-relaxed mb-8">{personal.tagline}</p>
        <div className="flex flex-col gap-3">
          <Button href={personal.cvUrl} variant="primary">Download CV</Button>
          <Button href="#about" variant="outline">View My Work</Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-subtle hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
