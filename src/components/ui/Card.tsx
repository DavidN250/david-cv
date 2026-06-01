import { cn } from "../../lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-secondary border border-border rounded-2xl flex flex-col",
        hover && "hover:border-accent transition-colors duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
