export type Category = "footwear" | "skincare";

export type Product = {
  name: string;
  description: string;
  accent: string;
  category: Category;
  image: string;
  imageFit?: "cover" | "contain";
};