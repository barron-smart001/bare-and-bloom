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
    <section id="order" className="bg-[#F2EDFF] py-20 sm:py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.13em] text-coral">
              <span className="h-px w-7 bg-current" />
              How to order
            </div>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Three easy steps.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-ink/60">
            No complicated checkout. Talk to Bare &amp; Bloom directly and get
            your order confirmed.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[24px] border border-ink/10 bg-white p-7"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-ink text-[11px] font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/60">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}