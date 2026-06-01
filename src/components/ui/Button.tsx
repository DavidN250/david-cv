import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  asChild?: boolean;
  href?: string;
}

export default function Button({ variant = "primary", className, children, href, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    outline: "border border-border text-app-white hover:border-accent hover:text-accent",
    ghost: "text-muted hover:text-app-white hover:bg-surface",
  };

  if (href) {
    return (
      <a href={href} className={cn(base, variants[variant], className)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
