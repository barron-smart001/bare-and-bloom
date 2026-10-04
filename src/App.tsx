import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import SectionHeading from "./components/SectionHeading";

import CategoryCard from "./components/CategoryCard";
import femaleShoeOne from "./public/images/shoes/female shoes 1.jpeg";
import femaleShoeTwo from "./public/images/shoes/female shoes 2.jpeg";
import femaleShoeThree from "./public/images/shoes/fmale shoes 3.jpeg";
import maleShoeOne from "./public/images/shoes/guys brn.webp";
import faceMask from "./public/images/skin care/face mask.jpeg";
import eyeMask from "./public/images/skin care/eye  mask.jpeg";
import handCream from "./public/images/skin care/hand cream 1.jpg";
import faceWipes from "./public/images/skin care/face wipes 2.jpg";
import pimplePatch from "./public/images/skin care/pimples patch.jpeg";
import sunscreen from "./public/images/skin care/sunscreen.jpg";

import Shop from "./components/Shop";
import About from "./components/About";
import HowToOrder from "./components/HowToOrder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <TrustStrip />

        <section className="py-20 sm:py-24">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <SectionHeading
              eyebrow="What we offer"
              title={
                <>
                  Beautiful essentials.
                  <br />
                  <span className="italic text-coral">Made simple.</span>
                </>
              }
              description="Bare & Bloom focuses on two things: women's and men's footwear and premium skincare, with quality and affordability at the centre."
            />

            <div className="grid gap-5 md:grid-cols-2">
             <CategoryCard
  number="01"
  category="footwear"
  title="Step into style."
  description="Quality footwear selected to bring comfort, confidence and style to your everyday looks."
  items={["Ladies Slides", "Men's Slides", "More styles"]}
  images={[femaleShoeOne, femaleShoeTwo, femaleShoeThree, maleShoeOne]}
  imageAlt="Bare & Bloom footwear"
/>

<CategoryCard
  number="02"
  category="skincare"
  title="Care for your glow."
  description="Premium skincare essentials for simple routines that help you feel fresh, confident and cared for."
  items={[
    "Face masks",
    "Eye & lip masks",
    "Hand cream",
    "Face wipes",
    "Pimple patches",
    "Sunscreen",
  ]}
  images={[faceMask, eyeMask, handCream, faceWipes, pimplePatch, sunscreen]}
  imageAlt="Bare & Bloom skincare"
/>
            </div>
          </div>
        </section>

        <Shop />
        <About />
        <HowToOrder />
        <Contact />
      </main>

      <Footer />
    </>
  );
}