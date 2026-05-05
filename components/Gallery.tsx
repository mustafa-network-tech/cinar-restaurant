import SafeImage from "@/components/SafeImage";

const YEMEK_ALTS = [
  "Çınar mutfağından lezzet karesi",
  "Ev yemeği ve lokanta sunumu",
  "Günün taze tabağı",
  "Gökçeada sofrasından",
  "Zeytinyağlı ve sıcak seçenekler",
  "Samimi lokanta atmosferi",
  "Misafirlerimize özel sunum",
  "Ada lezzetlerinden bir an",
] as const;

const IMAGES = YEMEK_ALTS.map((alt, i) => ({
  src: `/images/cinar/yemek-${i + 1}.jpg`,
  alt,
}));

export default function Gallery() {
  return (
    <section className="border-b border-[#e5dfd4] bg-[#fdfbf7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-[var(--coffee)] sm:text-4xl">
          Galeri
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          Birkaç kareyle mekânımızı ve mutfağımızın ruhunu deneyimleyin.
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {IMAGES.map((item) => (
            <li
              key={item.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5"
            >
              <div className="absolute inset-0 z-10 bg-[var(--olive)]/0 transition duration-300 group-hover:bg-[var(--olive)]/15" />
              <div className="absolute inset-0 z-20 flex items-end p-3 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="rounded-lg bg-black/55 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {item.alt}
                </span>
              </div>
              <SafeImage
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                wrapperClassName="absolute inset-0 size-full rounded-2xl"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
