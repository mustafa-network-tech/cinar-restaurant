export default function TrustSection() {
  return (
    <section className="border-b border-[#e5dfd4] bg-gradient-to-br from-[#556b50] via-[#5f7656] to-[#4e6547] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Misafirlerden Gelen Güven
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          Gökçeada&apos;da ev yemeği ve lokanta lezzeti arayan misafirlerin sık
          tercih ettiği duraklardan biri.
        </p>
        <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-6 rounded-3xl bg-white/10 px-6 py-6 backdrop-blur-md sm:gap-10">
          <div className="min-w-[120px]">
            <p className="font-heading text-4xl font-semibold text-white sm:text-[2.75rem]">
              4,4
            </p>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-white/80">
              Google puanı
            </p>
          </div>
          <div className="hidden h-14 w-px bg-white/25 sm:block" aria-hidden />
          <div className="min-w-[120px]">
            <p className="font-heading text-4xl font-semibold text-white sm:text-[2.75rem]">
              117
            </p>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-white/80">
              yorum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
