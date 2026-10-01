import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <div className="flex flex-col justify-between gap-7 pb-8 md:flex-row md:items-start">
          <div>
            <Logo />
            <p className="mt-3 text-xs text-ink/50">
              Beauty, style and confidence in one place.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-ink/60">
            <a href="#shop" className="hover:text-coral">Shop</a>
            <a href="#about" className="hover:text-coral">About</a>
            <a href="#order" className="hover:text-coral">How to Order</a>
            <a href="#contact" className="hover:text-coral">Contact</a>
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-ink/10 pt-5 text-[11px] text-ink/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Bare &amp; Bloom. All rights reserved.</span>
          <span>Calabar · Nigeria</span>
        </div>
      </div>
    </footer>
  );
}