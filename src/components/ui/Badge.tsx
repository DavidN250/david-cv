import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full bg-accent-soft text-accent", className)}>
      {children}
    </span>
  );
}
