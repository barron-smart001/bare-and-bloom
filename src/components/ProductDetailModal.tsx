import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, X } from "lucide-react";
import type { Product } from "../types";
import { orderMessage, whatsappUrl } from "../lib/whatsapp";
import Button from "./Button";

type Props = {
  product: Product;
  categoryLabel: string;
  onClose: () => void;
};

const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export default function ProductDetailModal({ product, categoryLabel, onClose }: Props) {
  const images = product.images?.length ? product.images : [product.image];
  const [activeImage, setActiveImage] = useState(0);
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const showImage = (step: number) => {
    setActiveImage((current) => (current + step + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/55 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-detail-title"
        className="relative my-auto grid w-full max-w-4xl overflow-hidden rounded-3xl border border-line bg-cream shadow-2xl md:grid-cols-[1.05fr_.95fr]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
        >
          <X size={18} />
        </button>

        <div className="relative flex flex-col justify-center bg-warm p-5 sm:p-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/60">
            <img
              src={images[activeImage]}
              alt={`${product.name}, image ${activeImage + 1}`}
              className="h-full w-full object-contain p-4"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => showImage(-1)}
                  aria-label="Previous product image"
                  className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink shadow-sm"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => showImage(1)}
                  aria-label="Next product image"
                  className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink shadow-sm"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-3 flex justify-center gap-2" aria-label="Product images">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show product image ${index + 1}`}
                  aria-current={index === activeImage ? "true" : undefined}
                  className={`h-14 w-14 overflow-hidden rounded-lg border-2 bg-white transition ${
                    index === activeImage ? "border-coral" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-contain p-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center p-6 pt-16 sm:p-9 sm:pt-16">
          <p className="text-[10px] font-bold uppercase tracking-[.15em] text-coral">
            {categoryLabel}
          </p>
          <h2
            id="product-detail-title"
            className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl"
          >
            {product.name}
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">{product.description}</p>
          <p className="mt-6 border-t border-line pt-5 text-base font-semibold text-ink">
            {product.price != null
              ? naira.format(product.price)
              : "Message us to confirm today's price and availability."}
          </p>
          <Button
            href={whatsappUrl(orderMessage(product.name))}
            variant="whatsapp"
            target="_blank"
            className="mt-6 w-full sm:w-fit"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Order on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
