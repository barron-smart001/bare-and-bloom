import { useCallback, useState } from "react";
import { products } from "../data/products";
import type { Product, ProductFilter } from "../types";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import SectionHeading from "./SectionHeading";

const filters: { value: ProductFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ladies-footwear", label: "Ladies' Footwear" },
  { value: "mens-footwear", label: "Men's Footwear" },
  { value: "skincare", label: "Skincare" },
];

const categoryLabels: Record<Exclude<ProductFilter, "all">, string> = {
  "ladies-footwear": "Ladies' footwear",
  "mens-footwear": "Men's footwear",
  skincare: "Skincare",
};

export default function Shop() {
  const [filter, setFilter] = useState<ProductFilter>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const closeProduct = useCallback(() => setSelectedProduct(null), []);
  const visibleProducts = products.filter(
    (product) => filter === "all" || product.category === filter,
  );

  return (
    <section id="shop" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <SectionHeading
          eyebrow="The collection"
          title={
            <>
              Find your next <br className="hidden sm:block" />
              favourite.
            </>
          }
          description="Browse ladies' and men's footwear alongside skincare essentials. Message us to confirm current prices and availability."
        />

        <div
          className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
          aria-label="Filter products"
        >
          {filters.map(({ value, label }) => {
            const active = value === filter;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(value)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 ${
                  active
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-cream text-muted hover:border-coral hover:text-ink"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <p className="mb-4 text-center text-xs text-muted" aria-live="polite">
          {visibleProducts.length} {visibleProducts.length === 1 ? "item" : "items"}
        </p>

        <div
          id="products"
          className="grid scroll-mt-28 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              categoryLabel={categoryLabels[product.category]}
              onView={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          categoryLabel={categoryLabels[selectedProduct.category]}
          onClose={closeProduct}
        />
      )}
    </section>
  );
}