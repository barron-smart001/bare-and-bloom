import SectionHeading from "./SectionHeading";

import adminOne from "../public/images/admin/admin pics.jpeg";
import adminTwo from "../public/images/shoes/female shoes 2.jpeg";

const values = [
  ["✦", "Quality", "Products selected with care."],
  ["₦", "Affordable", "Prices that respect your pocket."],
  ["↗", "Nationwide", "Delivery across Nigeria."],
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">

        {/* IMAGE CARD */}
        <div>
          <div className="grid h-[350px] grid-cols-[1.1fr_.9fr] gap-3 sm:h-[460px] sm:gap-4">

            {/* Main image */}
            <div className="relative overflow-hidden rounded-3xl bg-warm">
              <img
                src={adminOne}
                alt="Portrait from Bare & Bloom"
                className="h-full w-full object-cover"
              />

              {/* Small label */}
              <div className="absolute left-3 top-3 rounded-full bg-ink/65 px-3 py-2 text-[9px] font-semibold uppercase tracking-[.14em] text-white backdrop-blur-sm sm:left-4 sm:top-4 sm:px-4">
                Bare & Bloom
              </div>
            </div>

            {/* Secondary image */}
            <div className="relative mt-10 overflow-hidden rounded-3xl bg-warm sm:mt-14">
              <img
                src={adminTwo}
                alt="Bare & Bloom footwear"
                className="h-full w-full object-cover"
              />

              {/* Small label */}
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-ink/65 p-3 backdrop-blur-sm sm:bottom-4 sm:left-4 sm:right-4 sm:p-4">
                <p className="text-[9px] font-medium uppercase tracking-[.14em] text-white/70">
                  Style & comfort
                </p>

                <p className="mt-1 font-serif text-lg leading-tight text-white">
                  Made for your everyday.
                </p>
              </div>
            </div>
          </div>

          {/* Promise card */}
          <div className="relative mx-3 -mt-8 rounded-2xl border border-line bg-white p-5 shadow-soft sm:mx-6 sm:-mt-10 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[.15em] text-coral">
              Our promise
            </p>

            <p className="mt-2 max-w-[360px] font-serif text-2xl font-medium leading-tight text-ink sm:text-3xl">
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

          <p className="max-w-2xl text-sm leading-7 text-muted sm:leading-8">
            Bare &amp; Bloom is a beauty and fashion business focused on
            unisex footwear and premium skincare. The goal is simple: make it
            easier to find quality products at affordable prices, whether you
            shop from Calabar or from anywhere else in Nigeria.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:leading-8">
            Choose what you love, contact us to confirm availability and
            price, and we will help arrange delivery to you.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {values.map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-line bg-white p-4"
              >
                <span className="font-serif text-lg text-coral">
                  {icon}
                </span>

                <strong className="mt-2 block text-xs">
                  {title}
                </strong>

                <span className="mt-1 block text-[11px] leading-5 text-muted">
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