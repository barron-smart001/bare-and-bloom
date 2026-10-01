type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Bare & Bloom home">
      <span
        className={[
          "grid h-9 w-9 place-items-center rounded-full font-serif text-base italic",
          light ? "bg-white text-ink" : "bg-ink text-cream",
        ].join(" ")}
      >
        B
      </span>
      <span className="text-[21px] font-bold tracking-[-0.04em]">
        Bare <span className="font-serif italic text-coral">&amp; Bloom</span>
      </span>
    </a>
  );
}