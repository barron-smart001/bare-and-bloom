import SectionHeading from "./SectionHeading";

import adminOne from "../public/images/admin/admin pics.jpeg";
import adminTwo from "../public/images/shoes/guys brn.webp";

const values = [
  ["✦", "Quality", "Products selected with care."],
  ["₦", "Affordable", "Prices that respect your pocket."],
  ["↗", "Nationwide", "Delivery across Nigeria."],
];

export default function About() {
  return (
    <section id="about" className="bg-[#FFF0E6] py-20 sm:py-24">
      <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">

        {/* IMAGE CARD */}
        <div className="relative overflow-hidden rounded-[30px] bg-ink p-4 shadow-soft sm:p-6">

          {/* Decorative shapes */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-coral/90" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/70" />

          {/* Images */}
          <div className="relative z-10 grid min-h-[520px] grid-cols-[1.1fr_.9fr] gap-4 sm:min-h-[600px]">

            {/* Main image */}
            <div className="relative overflow-hidden rounded-[24px] bg-white/10">
              <img
                src={adminOne}
                alt="Bare & Bloom"
                className="h-full w-full object-cover"
              />

              {/* Small label */}
              <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] font-medium uppercase tracking-[.16em] text-white backdrop-blur-md">
                Bare & Bloom
              </div>
            </div>

            {/* Secondary image */}
            <div className="relative mt-14 overflow-hidden rounded-[24px] bg-white/10 sm:mt-20">
              <img
                src={adminTwo}
                alt="Bare & Bloom footwear"
                className="h-full w-full object-cover"
              />

              {/* Small label */}
              <div className="absolute bottom-4 left-4 right-4 rounded-[18px] border border-white/20 bg-black/30 p-3 backdrop-blur-md">
                <p className="text-[9px] uppercase tracking-[.16em] text-white/60">
                  Style & comfort
                </p>

                <p className="mt-1 font-serif text-lg leading-tight text-white">
                  Made for your everyday.
                </p>
              </div>
            </div>
          </div>

          {/* Promise card */}
          <div className="relative z-20 -mt-24 mx-2 rounded-[22px] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl sm:-mt-28 sm:mx-4 sm:p-6">
            <p className="text-[10px] uppercase tracking-[.16em] text-white/50">
              Our promise
            </p>

            <p className="mt-2 max-w-[360px] font-serif text-2xl font-medium leading-tight sm:text-3xl">
              Quality first.
              <br />
              Price-conscious always.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <SectionHeading
            eyebrow="About Bare & Bloom"
            title={
              <>
                Beauty, style and confidence —{" "}
                <span className="italic text-coral">
                  without the stress.
                </span>
              </>
            }
          />

          <p className="max-w-2xl text-sm leading-8 text-ink/65">
            Bare &amp; Bloom is a beauty and fashion business focused on
            unisex footwear and premium skincare. The goal is simple: make it
            easier to find quality products at affordable prices, whether you
            shop from Calabar or from anywhere else in Nigeria.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-ink/65">
            Choose what you love, contact us to confirm availability and
            price, and we will help arrange delivery to you.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {values.map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-ink/10 bg-white/50 p-4"
              >
                <span className="font-serif text-lg text-coral">
                  {icon}
                </span>

                <strong className="mt-2 block text-xs">
                  {title}
                </strong>

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