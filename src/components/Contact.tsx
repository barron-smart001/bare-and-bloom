import { MapPin, MessageCircle, Phone } from "lucide-react";
import Button from "./Button";
import { orderMessage, whatsappUrl } from "../lib/whatsapp";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <div className="relative grid overflow-hidden rounded-[32px] bg-ink p-7 text-white sm:p-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-12 lg:p-14">
          <div className="absolute -right-40 -top-44 h-[420px] w-[420px] rounded-full bg-gold/10" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.13em] text-gold">
              <span className="h-px w-7 bg-current" />
              Let's talk
            </div>

            <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold leading-[1.02] tracking-[-.04em] sm:text-5xl">
              Ready to find your next favourite?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
              Send Bare &amp; Bloom a message with what you are looking for. We
              will confirm availability, price and delivery details.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                href={whatsappUrl(orderMessage())}
                variant="whatsapp"
                target="_blank"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </Button>

              <Button href="tel:08100975601" variant="outline">
                <Phone size={16} />
                Call Us
              </Button>
            </div>
          </div>

          <div className="relative z-10 mt-10 flex flex-col justify-center gap-6 lg:mt-0">
            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">
                <Phone size={17} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[.14em] text-white/40">
                  Call
                </p>
                <a
                  href="tel:08100975601"
                  className="mt-1 block text-sm font-medium hover:text-gold"
                >
                  0810 097 5601
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">
                <MessageCircle size={17} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[.14em] text-white/40">
                  WhatsApp
                </p>
                <a
                  href={whatsappUrl(orderMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm font-medium hover:text-gold"
                >
                  0812 571 3617
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">
                <MapPin size={17} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[.14em] text-white/40">
                  Store location
                </p>
                <p className="mt-1 text-sm leading-6">
                  No 5 Eastern Highway at Goldie,
                  <br />
                  Mount Zion, Calabar.
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=No+5+Eastern+Highway+at+Goldie+Mount+Zion+Calabar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-full border border-white/30 px-5 py-3 text-xs font-bold transition hover:bg-white hover:text-ink"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}