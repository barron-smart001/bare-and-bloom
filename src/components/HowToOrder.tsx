import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Choose",
    text: "Tell us the footwear or skincare product you are interested in.",
  },
  {
    number: "02",
    title: "Message",
    text: "Send us a WhatsApp message so we can confirm the current price and availability.",
  },
  {
    number: "03",
    title: "Receive",
    text: "Once your order is confirmed, we arrange delivery to you anywhere in Nigeria.",
  },
];

export default function HowToOrder() {
  return (
    <section id="order" className="border-y border-line bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <SectionHeading
          eyebrow="How to order"
          title="Three easy steps."
          description="No complicated checkout. Talk to Bare & Bloom directly and get your order confirmed."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-line bg-cream p-6 sm:p-7"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-ink text-[11px] font-semibold text-white">
                {step.number}
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}