import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { products } from "../data/products";
import type { Category } from "../types";
import { orderMessage, whatsappUrl } from "../lib/whatsapp";
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
                className="flex h-44 items-end p-5"
                style={{ background: product.accent }}
              >
                <span className="font-serif text-2xl font-semibold">
                  {product.name}
                </span>
              </div>

              <div className="p-5">
                <p className="min-h-[72px] text-sm leading-6 text-ink/60">
                  {product.description}
                </p>

                <a
                  href={whatsappUrl(orderMessage(product.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-coral py-3 text-xs font-bold text-white transition hover:bg-coralDark"
                >
                  <MessageCircle size={15} />
                  Order via WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}