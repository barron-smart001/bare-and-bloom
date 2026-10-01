import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { orderMessage, whatsappUrl } from "../lib/whatsapp";

const links = [
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "How to Order", href: "#order" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-[min(1120px,calc(100%-32px))] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold text-ink/65 transition hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={whatsappUrl(orderMessage())}
            variant="whatsapp"
            target="_blank"
          >
            Order on WhatsApp
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 md:hidden"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-cream px-4 pb-5 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/5 py-3 text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
          <Button
            href={whatsappUrl(orderMessage())}
            variant="whatsapp"
            target="_blank"
            className="mt-4 w-full"
          >
            Order on WhatsApp
          </Button>
        </nav>
      )}
    </header>
  );
}