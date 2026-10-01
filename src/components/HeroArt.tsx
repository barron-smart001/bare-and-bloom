export default function HeroArt() {
  return (
    <div className="relative mx-auto h-[470px] w-full max-w-[560px] sm:h-[540px]">
      <div className="absolute inset-0 bottom-10 right-10 overflow-hidden rounded-[170px_170px_32px_32px] bg-gradient-to-br from-[#FF5A5F] to-[#7C3AED] shadow-soft">
        <div className="absolute -right-20 top-16 h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-purple/15" />

        <div className="absolute bottom-8 left-7 text-white sm:bottom-10 sm:left-9">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[.18em] text-white/70">
            Bare &amp; Bloom
          </p>
          <p className="font-serif text-2xl font-medium sm:text-3xl">
            Style meets care.
          </p>
        </div>
      </div>

      <div className="absolute right-0 top-5 grid h-36 w-36 place-items-center rounded-[28px] bg-paper shadow-soft sm:h-44 sm:w-44">
        <div className="relative h-20 w-12 rounded-[13px_13px_11px_11px] bg-gradient-to-r from-[#F4C95D] to-[#FF5A5F] shadow-xl">
          <span className="absolute -top-2 left-3.5 h-3 w-5 rounded-t-md bg-ink" />
          <span className="absolute inset-x-0 top-8 text-center font-serif text-sm text-white">
            BB
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 flex h-36 w-36 flex-col justify-end rounded-[28px] bg-ink p-5 text-white shadow-soft sm:h-44 sm:w-44 sm:p-6">
        <span className="text-[9px] uppercase tracking-[.16em] text-white/45">
          Shop the edit
        </span>
        <strong className="mt-1 font-serif text-2xl font-medium leading-[1.05] sm:text-[28px]">
          Footwear
          <br />
          &amp; skincare
        </strong>
      </div>

      <div className="float-soft absolute bottom-6 left-0 grid h-20 w-20 rotate-[-10deg] place-items-center rounded-full bg-paper text-center font-serif text-[11px] italic leading-tight shadow-soft sm:h-24 sm:w-24 sm:text-xs">
        Quality
        <br />
        you can feel.
      </div>
    </div>
  );
}