export default function TrustStrip() {
  const items = [
    "Nationwide delivery across Nigeria",
    "Quality footwear and skincare",
    "Order directly on WhatsApp",
  ];

  return (
    <section className="border-y border-line bg-white" aria-label="Highlights">
      <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-3 py-4 text-center text-xs font-medium text-muted sm:grid-cols-3 sm:gap-5 sm:py-5">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}