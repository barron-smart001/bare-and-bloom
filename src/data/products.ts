import type { Product } from "../types";

// Shoes
import heelOne from "../public/images/shoes/female shoes 1.jpeg";
import heelTwo from "../public/images/shoes/female shoes 2.jpeg";
import heelThree from "../public/images/shoes/guys shoe.jpg";
import heelFour from "../public/images/shoes/guys shoe 2.jpg";
import heelFive from "../public/images/shoes/guys brn.webp";

import faceMask from "../public/images/skin care/face mask.jpeg";
import eyeMask from "../public/images/skin care/eye  mask.jpeg";
import handCream from "../public/images/skin care/hand cream 1.jpg";
import faceWipes from "../public/images/skin care/face wipes 2.jpg";
import pimplePatch from "../public/images/skin care/pimples patch.jpeg";
import sunscreen from "../public/images/skin care/sunscreen.jpg";

export const products: Product[] = [
  {
    name: "Brown Luxury Ladies Slide",
    description:
      "A stylish brown slide with a classy finish, perfect for everyday outings and casual looks.",
    accent: "#FF5A5F",
    category: "footwear",
    image: heelOne,
    imageFit: "cover",
  },

  {
    name: "Black Designer Ladies Slide",
    description:
      "A classy black slide with a stylish patterned finish, perfect for casual outings and everyday wear.",
    accent: "#F4C95D",
    category: "footwear",
    image: heelTwo,
    imageFit: "cover",
  },

  {
    name: "Classic Black Men's Slide",
    description:
      "A clean and comfortable black slide made for everyday wear, casual outings and relaxed looks.",
    accent: "#D9C7FF",
    category: "footwear",
    image: heelThree,
    imageFit: "cover",
  },

  {
    name: "Premium Black Men's Slide",
    description:
      "A simple but stylish black slide with a comfortable feel and a clean finish.",
    accent: "#EEE7FF",
    category: "footwear",
    image: heelFour,
    imageFit: "cover",
  },

  {
    name: "Brown Pattern Men's Slide",
    description:
      "A smart brown slide with a textured finish that adds extra style to your everyday outfit.",
    accent: "#D9C7FF",
    category: "footwear",
    image: heelFive,
    imageFit: "cover",
  },

  {
    name: "Face Masks",
    description: "A simple skincare essential for a fresh, cared-for routine.",
    accent: "#EEE7FF",
    category: "skincare",
    image: faceMask,
    imageFit: "cover",
  },

  {
    name: "Eye Masks",
    description:
      "Small self-care essentials for your everyday beauty routine.",
    accent: "#D9C7FF",
    category: "skincare",
    image: eyeMask,
    imageFit: "cover",
  },

  {
    name: "Hand Cream",
    description:
      "A nourishing everyday essential for softer, cared-for hands.",
    accent: "#F4C95D",
    category: "skincare",
    image: handCream,
    imageFit: "cover",
  },

  {
    name: "Face Wipes",
    description:
      "Convenient cleansing care for busy days and quick routines.",
    accent: "#EEE7FF",
    category: "skincare",
    image: faceWipes,
    imageFit: "cover",
  },

  {
    name: "Pimple Patches",
    description: "A practical skincare essential for your routine.",
    accent: "#FF5A5F",
    category: "skincare",
    image: pimplePatch,
    imageFit: "cover",
  },

  {
    name: "Sunscreen",
    description:
      "An everyday skincare essential for your daily routine.",
    accent: "#F4C95D",
    category: "skincare",
    image: sunscreen,
    imageFit: "cover",
  },
];