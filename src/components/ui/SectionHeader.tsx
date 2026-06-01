interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="text-center">
      <p className="font-mono text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">// {label}</p>
      <h2 className="font-display text-4xl font-bold text-app-white">{title}</h2>
      <div className="mt-4 w-12 h-1 bg-accent mx-auto rounded-full" />
    </div>
  );
}
