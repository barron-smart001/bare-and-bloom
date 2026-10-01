import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "clay" | "dark" | "outline" | "whatsapp";
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
    clay: "bg-coral text-white hover:bg-coralDark shadow-sm hover:shadow-lg",
    dark: "bg-ink text-white hover:-translate-y-0.5",
    outline: "border border-ink text-ink hover:bg-ink hover:text-white",
    whatsapp: "bg-[#1FA855] text-white hover:bg-[#178A45] whatsapp-pulse",
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}