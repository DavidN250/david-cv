import { useState } from "react";
import { Monitor } from "lucide-react";
import { portfolio } from "../../data/resume";
import type { Project } from "../../types";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const filters = ["all", "fullstack", "frontend", "backend"] as const;
type Filter = (typeof filters)[number];

export default function Works() {
  const [active, setActive] = useState<Filter>("all");
  const filtered: Project[] = active === "all" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <section id="works" className="py-24 bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="My work" title="Portfolio" />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
                active === f
                  ? "bg-accent text-white"
                  : "bg-surface text-muted hover:text-app-white hover:bg-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <Card key={project.title} className="overflow-hidden group">
              <div className="h-36 bg-linear-to-br from-accent-soft to-primary flex items-center justify-center border-b border-border">
                <Monitor size={44} strokeWidth={1} className="text-accent-soft" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-app-white font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <Badge className="capitalize ml-2 shrink-0">{project.category}</Badge>
                </div>
                <p className="text-muted text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-surface text-muted px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="mt-auto text-sm text-accent font-medium hover:underline">
                  View Project →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
