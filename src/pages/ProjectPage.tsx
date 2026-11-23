import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Code2, Monitor } from "lucide-react";
import { portfolio } from "../data/resume";
import AppShell from "../components/layout/AppShell";
import Badge from "../components/ui/Badge";
import CommentSection from "../components/ui/CommentSection";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate  = useNavigate();
  const project   = portfolio.find((p) => p.slug === slug);

  if (!project) {
    return (
      <AppShell>
        <div className="py-20 px-8 text-center">
          <p className="text-muted text-lg">Project not found.</p>
          <button onClick={() => navigate(-1)} className="mt-4 text-accent hover:underline text-sm">
            ← Go back
          </button>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <article className="py-12 px-8 max-w-3xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm mb-10 font-medium"
        >
          <ArrowLeft size={15} />
          Back to Portfolio
        </button>

        {/* Project banner */}
        <div className="h-52 rounded-2xl bg-linear-to-br from-accent-soft to-primary flex items-center justify-center border border-border mb-8">
          <Monitor size={64} strokeWidth={0.75} className="text-accent" />
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="capitalize">{project.category}</Badge>
          </div>
          <h1 className="font-display text-3xl font-bold text-app-white mb-4 leading-snug">
            {project.title}
          </h1>
          <p className="text-muted text-base leading-relaxed">{project.description}</p>
        </header>

        {/* Links */}
        <div className="flex gap-3 mb-8">
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-muted text-sm font-semibold rounded-full hover:text-accent hover:border-accent transition-colors"
            >
              <Code2 size={14} />
              Source Code
            </a>
          )}
        </div>

        {/* Full description */}
        <section className="mb-8">
          <h2 className="font-display text-app-white font-bold text-lg mb-4">About this project</h2>
          <p className="text-muted leading-relaxed">{project.fullDescription}</p>
        </section>

        {/* Tech stack */}
        <section className="mb-8">
          <h2 className="font-display text-app-white font-bold text-lg mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 bg-surface border border-border text-muted rounded-lg"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Comments */}
        <CommentSection slug={project.slug} />
      </article>
    </AppShell>
  );
}
