type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.13em] text-coral">
          <span className="h-px w-7 bg-current" />
          {eyebrow}
        </div>
        <h2 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-[-.04em] sm:text-5xl">
          {title}
        </h2>
      </div>
      {description && (
          <p className="max-w-md text-sm leading-7 text-muted">{description}</p>
      )}
    </div>
  );
}