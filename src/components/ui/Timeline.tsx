interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

export default function Timeline({ title, subtitle, period, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border last:hidden" />
      <div className="absolute left-0 top-1.5 w-2.5 h-2.5 bg-accent rounded-full -translate-x-1/2 ring-4 ring-secondary" />
      <span className="font-mono inline-block text-xs font-medium text-accent bg-accent-soft px-3 py-1 rounded-full mb-2">
        {period}
      </span>
      <h4 className="font-display text-app-white font-bold text-base">{title}</h4>
      <p className="text-muted text-sm font-medium mb-1">{subtitle}</p>
      <p className="text-subtle text-sm leading-relaxed">{description}</p>
    </div>
  );
}
