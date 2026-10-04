import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "clay" | "dark" | "outline" | "outlineLight" | "whatsapp";
  className?: string;
  target?: string;
};

export default function Button({
  href,
  children,
  variant = "clay",
  className = "",
  target,
}: ButtonProps) {
  const variants = {
    clay: "bg-coral text-white shadow-sm hover:bg-coralDark hover:shadow-md",
    dark: "bg-ink text-white hover:-translate-y-0.5",
    outline: "border border-line text-ink hover:border-ink hover:bg-ink hover:text-white",
    outlineLight: "border border-white/60 text-white hover:bg-white hover:text-ink",
    whatsapp: "bg-[#1FA855] text-white hover:bg-[#178A45]",
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}