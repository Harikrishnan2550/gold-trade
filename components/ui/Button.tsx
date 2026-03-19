import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
}: Props) {
  if (variant === "outline") {
    return (
      <button
        className={cn(
          "border border-white/20 px-8 py-3 rounded-premium",
          "hover:border-gold hover:text-gold transition",

          className,
        )}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={cn(
        "bg-gold text-black px-8 py-3 rounded-premium",
        "hover:shadow-gold hover:-translate-y-1 transition",

        className,
      )}
    >
      {children}
    </button>
  );
}
