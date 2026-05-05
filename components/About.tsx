const ADVANTAGES = [
  {
    title: "Günlük taze yemekler",
    text: "Her gün yenilenen seçeneklerle hazırlanan sıcak ve doyurucu tabaklar.",
  },
  {
    title: "Açık hava oturma alanı",
    text: "Gökçeada havasında keyifli, rahat masa düzeni.",
  },
  {
    title: "Merkezî konum",
    text: "Adanın kalbinde kolay bulunan ve yakın durak.",
  },
  {
    title: "Telefonla kolay ulaşım",
    text: "Sorularınız ve yer ayırmak için doğrudan hattımız.",
  },
] as const;

export default function About() {
  return (
    <section className="border-b border-[#e5dfd4] bg-[#fdfbf7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:items-start">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-[var(--coffee)] sm:text-4xl">
              Gökçeada Merkezde Samimi Bir Lokanta
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-[var(--muted)]">
              Rüzgârlı plajların ve zeytinliklerle çevrili ada huzurunda yerel
              esnaf sıcaklığını yakalamak isterseniz doğru adres burası.
              Çınar Restoran, Gökçeada&apos;nın merkezinde ev yemeği lezzetini
              sade ve samimi bir ortamda sunar. Günlük hazırlanan yemekler,
              zeytinyağlı seçenekler, et yemekleri ve lokanta kültürünün
              sıcaklığıyla hem ada sakinlerine hem de Gökçeada&apos;yı ziyaret
              eden misafirlere hitap eder.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-[var(--cream)] px-4 py-2 text-sm font-medium text-[var(--olive)] ring-1 ring-[#dcd5c9]">
                Uygun fiyatlı ev yemekleri
              </span>
              <span className="rounded-full bg-[var(--cream)] px-4 py-2 text-sm font-medium text-[var(--olive)] ring-1 ring-[#dcd5c9]">
                Günlük taze lezzetler
              </span>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {ADVANTAGES.map((a) => (
              <li
                key={a.title}
                className="rounded-2xl border border-[#e8e2d8] bg-white p-5 shadow-md shadow-black/[0.04]"
              >
                <h3 className="font-heading text-lg font-semibold text-[var(--coffee)]">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {a.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
