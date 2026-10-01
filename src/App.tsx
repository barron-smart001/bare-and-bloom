import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import SectionHeading from "./components/SectionHeading";
import CategoryCard from "./components/CategoryCard";
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
              description="Bare & Bloom focuses on two things: female footwear and premium skincare, with quality and affordability at the centre."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <CategoryCard
                number="01"
                category="footwear"
                title="Step into style."
                description="Female footwear selected to bring comfort, confidence and style to your everyday looks."
                items={["Heels", "Flats", "Sandals", "More styles"]}
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