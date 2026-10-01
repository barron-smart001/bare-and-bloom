import { ArrowUpRight } from "lucide-react";
import type { Category } from "../types";

type Props = {
  number: string;
  category: Category;
  title: string;
  description: string;
  items: string[];
};

export default function CategoryCard({
  number,
  category,
  title,
  description,
  items,
}: Props) {
  const isFootwear = category === "footwear";

  return (
    <article
      className={[
        "group relative min-h-[390px] overflow-hidden rounded-[28px] border border-ink/10 p-7 sm:p-9",
        isFootwear ? "bg-[#FFE7E2]" : "bg-[#EEE7FF]",
      ].join(" ")}
    >
      <div
        className={[
          "absolute -right-20 -top-20 h-72 w-72 rounded-full",
          isFootwear ? "bg-[#F4C95D]" : "bg-[#D9C7FF]",
        ].join(" ")}
      />

      <div className="relative z-10 max-w-[380px]">
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
          Explore collection <ArrowUpRight size={15} />
        </a>
      </div>

      {isFootwear ? (
        <div className="absolute bottom-2 right-4 h-44 w-64">
          <div className="absolute bottom-5 right-3 h-[66px] w-[205px] rotate-[-9deg] rounded-[70%_25%_35%_55%] bg-gradient-to-br from-[#514340] to-[#1F1B1D] shadow-2xl">
            <div className="absolute -bottom-2 right-[-5px] h-4 w-28 rounded-full bg-[#151315]" />
            <div className="absolute -top-5 left-10 h-11 w-24 rotate-[-2deg] rounded-t-[70px] border-[11px] border-b-0 border-[#80605A]" />
          </div>
        </div>
      ) : (
        <div className="absolute bottom-4 right-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#F9DFD2] to-[#FF5A5F] shadow-2xl">
          <div className="absolute inset-5 rounded-full border border-white/55" />
          <div className="grid h-full place-items-center font-serif text-2xl italic text-white">
            BB
          </div>
        </div>
      )}
    </article>
  );
}