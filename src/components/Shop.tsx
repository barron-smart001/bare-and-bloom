import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { products } from "../data/products";
import type { Category } from "../types";
import { orderMessage, whatsappUrl } from "../lib/whatsapp";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

export default function Shop() {
  const [category, setCategory] = useState<Category>("footwear");

  const filtered = products.filter((product) => product.category === category);

  return (
    <section id="shop" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <SectionHeading
          eyebrow="The collection"
          title={
            <>
              Choose what <br className="hidden sm:block" />
              feels like you.
            </>
          }
          description="Tap a category to browse the current collection. When you're ready, order directly through WhatsApp."
        />

        <div className="mb-8 flex justify-center gap-2">
          {(["footwear", "skincare"] as Category[]).map((item) => {
            const active = item === category;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={[
                  "rounded-full px-5 py-3 text-xs font-bold capitalize transition",
                  active
                    ? "bg-coral text-white"
                    : "border border-ink/10 bg-white text-ink/70 hover:bg-gold/20",
                ].join(" ")}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div id="products" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[26px] border border-ink/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div
                className="relative h-44 overflow-hidden border-b border-ink/5"
                style={{ background: product.accent }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={[
                    "h-full w-full transition duration-300 group-hover:scale-105",
                    product.imageFit === "contain"
                      ? "object-contain p-3"
                      : "object-cover",
                  ].join(" ")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20" />
                <span className="absolute bottom-4 left-5 rounded-full bg-white/80 px-3 py-1 font-serif text-xl font-semibold text-ink shadow-sm backdrop-blur-sm">
                  {product.name}
                </span>
              </div>

              <div className="p-5">
                <p className="min-h-[72px] text-sm leading-6 text-ink/60">
                  {product.description}
                </p>

                <Button
                  href={whatsappUrl(orderMessage(product.name))}
                  variant="whatsapp"
                  target="_blank"
                  className="mt-4 w-full text-xs"
                >
                  <MessageCircle size={15} />
                  Order via WhatsApp
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}