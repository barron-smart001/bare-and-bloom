import SectionHeading from "./SectionHeading";

const values = [
  ["✦", "Quality", "Products selected with care."],
  ["₦", "Affordable", "Prices that respect your pocket."],
  ["↗", "Nationwide", "Delivery across Nigeria."],
];

export default function About() {
  return (
    <section id="about" className="bg-[#FFF0E6] py-20 sm:py-24">
      <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div className="relative min-h-[390px] overflow-hidden rounded-[28px] bg-ink p-8 shadow-soft sm:min-h-[470px]">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-coral" />
          <div className="absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-gold/70" />

          <div className="absolute inset-x-7 bottom-7 rounded-[22px] border border-white/15 bg-white/10 p-6 text-white backdrop-blur-md sm:inset-x-9 sm:bottom-9">
            <p className="text-[10px] uppercase tracking-[.16em] text-white/50">
              Our promise
            </p>
            <p className="mt-2 font-serif text-3xl font-medium leading-tight sm:text-4xl">
              Quality first.
              <br />
              Price-conscious always.
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About Bare & Bloom"
            title={
              <>
                Beauty, style and confidence —{" "}
                <span className="italic text-coral">without the stress.</span>
              </>
            }
          />

          <p className="max-w-2xl text-sm leading-8 text-ink/65">
            Bare &amp; Bloom is a beauty and fashion business focused on unisex
            footwear and premium skincare. The goal is simple: make it easier to
            find quality products at affordable prices, whether you shop from
            Calabar or from anywhere else in Nigeria.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-ink/65">
            Choose what you love, contact us to confirm availability and price,
            and we will help arrange delivery to you.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {values.map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-ink/10 bg-white/50 p-4"
              >
                <span className="font-serif text-lg text-coral">{icon}</span>
                <strong className="mt-2 block text-xs">{title}</strong>
                <span className="mt-1 block text-[11px] leading-5 text-ink/55">
                  {description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}