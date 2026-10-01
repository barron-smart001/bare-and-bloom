import { MessageCircle, Phone, Sparkles } from "lucide-react";

import Button from "./Button";
import { orderMessage, whatsappUrl } from "../lib/whatsapp";

export default function Hero() {
  return (
    <section className="overflow-hidden py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] items-center gap-14 lg:grid-cols-[0.95fr_1fr] lg:gap-16">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="reveal">

          {/* Small intro */}
          <div className="text-sm font-medium tracking-[-0.01em] text-coral">
            Skincare and footwear, delivered nationwide
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
            Premium skincare and trendy heels, flats and sandals at prices
            that respect your pocket. Pick what you love, message us, and
            we deliver to your door anywhere in Nigeria.
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
          <div className="grid grid-cols-[1.48fr_.72fr] grid-rows-[165px_165px] gap-3">

            {/* =====================
                LARGE HEEL CARD
            ====================== */}
            <div
              className="
                relative
                row-span-2
                overflow-hidden
                rounded-t-[145px]
                rounded-b-[5px]
                bg-[#c7785c]
              "
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#d99a86] via-[#cd8065] to-[#bb674b]" />

              {/* Subtle decorative circle */}
              <div className="absolute -right-16 top-24 h-44 w-44 rounded-full bg-white/5" />

              {/* Text */}
              <div className="absolute bottom-5 left-5">
                <p className="font-serif text-[18px] font-medium italic text-white">
                  The heel edit
                </p>
              </div>
            </div>

            {/* =====================
                TOP RIGHT CARD
            ====================== */}
            <div className="flex items-center justify-center rounded-[22px] bg-[#efddcf]">
              <div className="h-14 w-14 rounded-full border border-[#e7cfc1] bg-[#faf7f3]" />
            </div>

            {/* =====================
                SPF CARD
            ====================== */}
            <div className="flex items-end rounded-[22px] bg-[#2b292c] p-5">
              <span className="text-sm font-semibold text-white">
                SPF daily
              </span>
            </div>

            {/* =====================
                BOTTOM LEFT
            ====================== */}
            <div className="flex items-end rounded-[22px] bg-[#edcbbb] p-4">
              <span className="font-serif text-[17px] font-medium text-coral">
                Glow
              </span>
            </div>

            {/* =====================
                QUALITY CARD
            ====================== */}
            <div className="flex items-center justify-between rounded-[22px] border border-[#e8c9b9] bg-[#fffdf9] px-5 sm:px-6">
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