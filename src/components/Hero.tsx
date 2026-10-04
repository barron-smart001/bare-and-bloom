import { useEffect, useState } from "react";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

import Button from "./Button";
import { orderMessage, whatsappUrl } from "../lib/whatsapp";
import femaleShoeOne from "../public/images/shoes/female shoes 1.jpeg";
import femaleShoeTwo from "../public/images/shoes/female shoes 2.jpeg";
import femaleShoeThree from "../public/images/shoes/fmale shoes 3.jpeg";
import maleShoeOne from "../public/images/shoes/guys brn.webp";
import faceMask from "../public/images/skin care/face mask.jpeg";
import handCream from "../public/images/skin care/hand cream 1.jpg";
import lipMask from "../public/images/skin care/lip mask.jpeg";

const footwearImages = [
  femaleShoeOne,
  femaleShoeTwo,
  femaleShoeThree,
  maleShoeOne,
];

export default function Hero() {
  const [activeFootwearImage, setActiveFootwearImage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveFootwearImage((currentImage) =>
        (currentImage + 1) % footwearImages.length,
      );
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="overflow-hidden py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] items-center gap-14 lg:grid-cols-[0.95fr_1fr] lg:gap-16">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="reveal">

          {/* Small intro */}
          <div className="text-sm font-medium tracking-[-0.01em] text-coral">
            Beauty and footwear, delivered nationwide
          </div>

          {/* Main heading */}
          <h1 className="mt-5 max-w-[620px] font-serif text-[clamp(48px,7vw,76px)] font-semibold leading-[0.98] tracking-[-0.055em] text-ink">
            Beauty, style and
            <br />
            confidence in one
            <br />
            place.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[520px] text-[15px] leading-8 text-ink/65 sm:text-[17px]">
            Premium skincare and quality footwear at prices that respect your
            pocket. Pick what you love, message us, and we deliver to your door
            anywhere in Nigeria.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={whatsappUrl(orderMessage())}
              variant="clay"
              target="_blank"
            >
              <MessageCircle size={17} />
              Order on WhatsApp
            </Button>

            <Button href="tel:08100975601" variant="outline">
              <Phone size={17} />
              Call Us Now
            </Button>
          </div>

          {/* Bottom note */}
          <p className="mt-5 text-xs text-ink/45 sm:text-sm">
            Shop in person at{" "}
            <strong className="font-semibold text-ink">
              Mount Zion, Calabar
            </strong>{" "}
            · or order from anywhere.
          </p>
        </div>

        {/* =========================
            RIGHT ARTWORK
        ========================== */}
        <div className="reveal mx-auto w-full max-w-[540px]">
          <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(120px,.8fr)] grid-rows-[165px_165px] gap-3">

            {/* =====================
              LARGE FOOTWEAR CARD
            ====================== */}
            <div
              className="
                relative
                row-span-2
                overflow-hidden
                rounded-t-[145px]
                rounded-b-[5px]
                bg-ink
              "
            >
              {footwearImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Bare & Bloom ladies and men's footwear"
                  aria-hidden={index !== activeFootwearImage}
                  className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-in-out motion-reduce:duration-300 ${
                    index === activeFootwearImage
                      ? "scale-[1.02] opacity-100"
                      : "scale-100 opacity-0"
                  }`}
                />
              ))}

              {/* Image shading keeps the card caption legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/10" />

              {/* Text */}
              <div className="absolute bottom-5 left-5 z-10">
                <p className="mb-1 text-[9px] font-bold tracking-[.16em] text-white/80">
                  LADIES + MEN'S FOOTWEAR
                </p>
                <p className="font-serif text-[18px] font-medium italic text-white">
                  The footwear edit
                </p>
              </div>

              <div className="absolute bottom-6 right-5 z-10 flex items-center gap-1.5">
                {footwearImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    aria-label={`Show footwear image ${index + 1}`}
                    aria-current={index === activeFootwearImage ? "true" : undefined}
                    onClick={() => setActiveFootwearImage(index)}
                    className={`h-1.5 rounded-full bg-white transition-all duration-500 ease-in-out motion-reduce:duration-300 ${
                      index === activeFootwearImage
                        ? "w-5 opacity-100"
                        : "w-1.5 opacity-60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* =====================
                TOP RIGHT CARD
            ====================== */}
            <div className="group relative overflow-hidden rounded-2xl bg-cream">
              <img
                src={faceMask}
                alt="Bare & Bloom face mask skincare"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:duration-300"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
            </div>

            {/* =====================
                SPF CARD
            ====================== */}
            <div className="group relative flex items-end overflow-hidden rounded-2xl bg-ink p-5">
              <img
                src={lipMask}
                alt="Bare & Bloom lip mask"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              <span className="relative z-10 text-sm font-semibold text-white">
                Lip mask
              </span>
            </div>

            {/* =====================
                BOTTOM LEFT
            ====================== */}
            <div className="group relative flex items-end overflow-hidden rounded-2xl bg-cream p-4">
              <img
                src={handCream}
                alt="Bare & Bloom hand cream"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <span className="relative z-10 font-serif text-[17px] font-medium text-white">
                Glow
              </span>
            </div>

            {/* =====================
                QUALITY CARD
            ====================== */}
            <div className="flex items-center justify-between rounded-2xl border border-line bg-white px-4 sm:px-6">
              <span className="font-serif text-[17px] text-ink sm:text-[18px]">
                Best quality, fair prices
              </span>

              <Sparkles
                size={20}
                strokeWidth={1.7}
                className="shrink-0 text-coral"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}