import type { Product } from "../types";

// Ladies' footwear
import heelOne from "../public/images/shoes/female shoes 1.jpeg";
import heelTwo from "../public/images/shoes/female shoes 2.jpeg";
// Men's footwear
// import heelThree from "../public/images/shoes/guys shoe.jpg";
// import heelFour from "../public/images/shoes/guys shoe 2.jpg";
// import heelFive from "../public/images/shoes/guys brn.webp";

import faceMask from "../public/images/skin care/face mask.jpeg";
import eyeMask from "../public/images/skin care/eye  mask.jpeg";
import handCream from "../public/images/skin care/hand cream 1.jpg";
import faceWipes from "../public/images/skin care/face wipes 2.jpg";
import pimplePatch from "../public/images/skin care/pimples patch.jpeg";
import sunscreen from "../public/images/skin care/sunscreen.jpg";
import lipmask from "../public/images/skin care/lip mask.jpeg";

export const products: Product[] = [
  {
    name: "Brown Luxury Ladies Slide",
    description:
      "A stylish brown slide with a classy finish, perfect for everyday outings and casual looks.",
    category: "ladies-footwear",
    image: heelOne,
  },

  {
    name: "Black Designer Ladies Slide",
    description:
      "A classy black slide with a stylish patterned finish, perfect for casual outings and everyday wear.",
    category: "ladies-footwear",
    image: heelTwo,
  },





  {
    name: "Face Masks",
    description: "A simple skincare essential for a fresh, cared-for routine.",
    category: "skincare",
    image: faceMask,
  },

  {
    name: "Eye Masks",
    description:
      "Small self-care essentials for your everyday beauty routine.",
    category: "skincare",
    image: eyeMask,
  },

  {
    name: "Hand Cream",
    description:
      "A nourishing everyday essential for softer, cared-for hands.",
    category: "skincare",
    image: handCream,
  },

  {
    name: "Face Wipes",
    description:
      "Convenient cleansing care for busy days and quick routines.",
    category: "skincare",
    image: faceWipes,
  },

  {
    name: "Pimple Patches",
    description: "A practical skincare essential for your routine.",
    category: "skincare",
    image: pimplePatch,
  },

  {
    name: "Sunscreen",
    description:
      "An everyday skincare essential for your daily routine.",
    category: "skincare",
    image: sunscreen,
  },

  {
    name: "Lip Mask",
    description:
      "A nourishing lip care essential for soft, smooth lips.",
    category: "skincare",
    image: lipmask,
  },
];