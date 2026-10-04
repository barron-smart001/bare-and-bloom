import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { Product } from "../types";
import { orderMessage, whatsappUrl } from "../lib/whatsapp";
import Button from "./Button";

type Props = {
  product: Product;
  categoryLabel: string;
  onView: () => void;
};

const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export default function ProductCard({ product, categoryLabel, onView }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <button
        type="button"
        onClick={onView}
        aria-label={`View ${product.name} details`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-coral"
      >
        <img
          src={product.image}
          alt={`${product.name} product photo`}
          className="h-full w-full object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-ink shadow-sm">
          View product <ArrowUpRight size={13} aria-hidden="true" />
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-coral">
          {categoryLabel}
        </p>
        <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-ink">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-muted">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-ink">
            {product.price != null
              ? naira.format(product.price)
              : "Price confirmed on WhatsApp"}
          </p>
          <button
            type="button"
            onClick={onView}
            className="shrink-0 text-xs font-semibold text-coral underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
          >
            Details
          </button>
        </div>

        <Button
          href={whatsappUrl(orderMessage(product.name))}
          variant="whatsapp"
          target="_blank"
          className="mt-5 w-full text-xs"
        >
          <MessageCircle size={15} aria-hidden="true" />
          Order via WhatsApp
        </Button>
      </div>
    </article>
  );
}
