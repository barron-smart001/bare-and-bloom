import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "../types";

type Props = {
  number: string;
  category: Category;
  title: string;
  description: string;
  items: string[];
  images: string[];
  imageAlt: string;
};

export default function CategoryCard({
  number,
  category,
  title,
  description,
  items,
  images,
  imageAlt,
}: Props) {
  const isFootwear = category === "footwear";
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (images.length <= 1 || prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % images.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  return (
    <article
      className={[
        "group relative min-h-[410px] overflow-hidden rounded-3xl border border-line bg-cream p-6 sm:p-8",
      ].join(" ")}
    >
      {/* Content */}
      <div className="relative z-20 max-w-[68%]">
        <span className="text-[10px] font-bold uppercase tracking-[.15em] text-coral">
          {number} / {isFootwear ? "Footwear" : "Skincare"}
        </span>

        <h3 className="mt-3 font-serif text-3xl font-semibold tracking-[-.03em] text-ink sm:text-4xl">
          {title}
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-6 text-muted sm:leading-7">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-white/80 px-3 py-2 text-[10px] font-semibold text-ink"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href="#products"
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-ink transition hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
        >
          Explore collection
          <ArrowUpRight size={15} />
        </a>
      </div>

      {/* REAL PRODUCT IMAGE */}
      <div
        className={[
          "absolute bottom-0 right-0 z-10 h-[210px] w-[44%] min-w-[150px] overflow-hidden",
          "transition-transform duration-500 group-hover:scale-[1.04]",
          "rounded-tl-[72px]",
        ].join(" ")}
      >
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={imageAlt}
            aria-hidden={index !== activeImage}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Soft image overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/70 via-transparent to-transparent" />

        {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`Show image ${index + 1}`}
                aria-pressed={index === activeImage}
                onClick={() => setActiveImage(index)}
                className={`h-1.5 rounded-full bg-white shadow-sm transition-all duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral ${
                  index === activeImage ? "w-5 opacity-100" : "w-1.5 opacity-60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}