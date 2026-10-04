export type Category = "footwear" | "skincare";
export type ProductCategory = "ladies-footwear" | "mens-footwear" | "skincare";
export type ProductFilter = "all" | ProductCategory;

export type Product = {
  name: string;
  description: string;
  category: ProductCategory;
  image: string;
  images?: string[];
  price?: number;
};