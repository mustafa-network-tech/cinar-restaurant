const CATEGORIES = [
  { name: "Çorbalar", desc: "Günün sıcak başlangıçları" },
  { name: "Ev Yemekleri", desc: "Günlük hazırlanan klasik lokanta lezzetleri" },
  { name: "Zeytinyağlılar", desc: "Ada ruhuna yakışan hafif seçenekler" },
  { name: "Et Yemekleri", desc: "Doyurucu ve geleneksel tatlar" },
  { name: "Mantı", desc: "Yoğurt ve sosla servis edilen sevilen lezzet" },
  { name: "Salatalar", desc: "Yemeklere eşlik eden taze seçenekler" },
  { name: "İçecekler", desc: "Yemeğin yanında serinletici tercihler" },
] as const;

export default function MenuPreview() {
  return (
    <section className="border-b border-[#e5dfd4] bg-gradient-to-b from-[#f7f4ef] to-[#fdfbf7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-[var(--coffee)] sm:text-4xl">
            Lezzetler
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            Tam menü sunumu değil; günlük mutfağımızın kategorilerine dair kısa
            bir önizleme. Detaylar için bizi arayabilirsiniz.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((c) => (
            <li
              key={c.name}
              className="group rounded-2xl border border-[#e8e2d8] bg-white/95 p-5 shadow-md shadow-black/[0.04] transition hover:-translate-y-0.5 hover:border-[#c9d5c5] hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-[var(--olive)] transition group-hover:text-[var(--coffee)]">
                {c.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {c.desc}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-sm italic leading-relaxed text-[var(--muted)]">
          Günlük yemek çeşitleri değişiklik gösterebilir. Detaylı bilgi için
          restoranı arayabilirsiniz.
        </p>
      </div>
    </section>
  );
}
