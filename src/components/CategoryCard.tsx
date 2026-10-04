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
    if (images.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % images.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  return (
    <article
      className={[
        "group relative min-h-[390px] overflow-hidden rounded-[28px] border border-ink/10 p-7 sm:p-9",
        isFootwear ? "bg-[#FFE7E2]" : "bg-[#EEE7FF]",
      ].join(" ")}
    >
      {/* Soft decorative circle */}
      <div
        className={[
          "absolute -right-20 -top-20 h-72 w-72 rounded-full transition-transform duration-500 group-hover:scale-110",
          isFootwear ? "bg-[#F4C95D]" : "bg-[#D9C7FF]",
        ].join(" ")}
      />

      {/* Content */}
      <div className="relative z-20 max-w-[380px]">
        <span className="text-[10px] font-bold uppercase tracking-[.15em] text-coral">
          {number} / {isFootwear ? "Footwear" : "Skincare"}
        </span>

        <h3 className="mt-3 font-serif text-4xl font-semibold tracking-[-.03em]">
          {title}
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-7 text-ink/65">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/65 px-3 py-2 text-[10px] font-semibold"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href="#products"
          className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-ink transition group-hover:text-coral"
        >
          Explore collection
          <ArrowUpRight size={15} />
        </a>
      </div>

      {/* REAL PRODUCT IMAGE */}
      <div
        className={[
          "absolute bottom-0 right-0 z-10 h-[220px] w-[260px] overflow-hidden",
          "transition-transform duration-500 group-hover:scale-[1.04]",
          isFootwear
            ? "rounded-tl-[80px]"
            : "rounded-tl-[100px]",
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`Show image ${index + 1}`}
                aria-pressed={index === activeImage}
                onClick={() => setActiveImage(index)}
                className={`h-1.5 rounded-full bg-white transition-all duration-500 ease-in-out ${
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