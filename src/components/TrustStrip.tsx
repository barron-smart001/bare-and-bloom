export default function TrustStrip() {
  const items = [
    "🇳🇬 Nationwide Delivery",
    "✨ Premium Quality guaranteed",
    "💸 Affordable Luxury",
  ];

  return (
    <section
      className="overflow-hidden bg-ink py-4 text-cream"
      aria-label="Highlights"
    >
      <div className="ticker">
        <div className="ticker-track">
          {/* Repeat enough times to keep the animation seamless */}
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <span
              key={index}
              className="shrink-0 px-10 font-medium whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}