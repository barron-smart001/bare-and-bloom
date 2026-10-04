import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream py-10">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <div className="flex flex-col justify-between gap-7 pb-8 md:flex-row md:items-start">
          <div>
            <Logo />
            <p className="mt-3 text-xs text-muted">
              Beauty, style and confidence in one place.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-muted">
            <a href="#shop" className="transition hover:text-coral">Shop</a>
            <a href="#about" className="transition hover:text-coral">About</a>
            <a href="#order" className="transition hover:text-coral">How to Order</a>
            <a href="#contact" className="transition hover:text-coral">Contact</a>
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-line pt-5 text-[11px] text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Bare &amp; Bloom. All rights reserved.</span>
          <span>Calabar · Nigeria</span>
        </div>
      </div>
    </footer>
  );
}