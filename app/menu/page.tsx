import type { Metadata } from "next";
import Link from "next/link";

import { MENU_CATEGORIES } from "@/data/menu";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Çınar Restoran Gökçeada Menü | Ev Yemekleri ve Etli Yemekler",
  description:
    "Çınar Restoran Gökçeada menüsünde çorbalar, zeytinyağlılar, etli yemekler, pilavlar, salatalar, tatlılar, mantı ve içecekler yer alır.",
};

function formatPrice(price?: number, note?: string) {
  if (note) return note;
  if (typeof price !== "number") return "";
  return `${price.toLocaleString("tr-TR")} TL`;
}

export default function MenuPage() {
  const etliKategori = MENU_CATEGORIES.find((c) => c.id === "etli-yemekler");
  const digerKategoriler = MENU_CATEGORIES.filter(
    (c) => c.id !== "etli-yemekler",
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfbf7] via-[#f7f4ef]/70 to-[#fdfbf7]">
      <header className="border-b border-[#e5dfd4] bg-[#fdfbf7]/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--olive)]">
              Çınar Restoran · Gökçeada
            </p>
            <h1 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-[var(--coffee)] sm:text-[2.1rem]">
              Çınar Restoran Menü
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Gökçeada merkezde günlük hazırlanan ev yemekleri, zeytinyağlılar,
              et yemekleri, çorbalar, salatalar, tatlılar ve içecekler.
            </p>
          </div>

          <div className="grid gap-3 sm:auto-cols-fr sm:grid-flow-col sm:gap-4">
            {[
              "Günlük taze yemekler",
              "Ev yemeği lezzeti",
              "Gökçeada merkez",
              "Telefonla bilgi alabilirsiniz",
            ].map((chip) => (
              <div
                key={chip}
                className="rounded-2xl border border-[#e5dfd4] bg-white/90 px-4 py-3 text-sm font-medium text-[var(--olive)] shadow-sm"
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {etliKategori && (
          <section
            aria-labelledby="etli-yemekler-baslik"
            className="rounded-3xl border border-[#e3dccf] bg-white/95 p-5 shadow-md shadow-black/[0.04] sm:p-7 lg:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2
                id="etli-yemekler-baslik"
                className="font-heading text-xl font-semibold tracking-tight text-[var(--coffee)] sm:text-2xl"
              >
                {etliKategori.icon && (
                  <span className="mr-2 align-middle" aria-hidden>
                    {etliKategori.icon}
                  </span>
                )}
                {etliKategori.name}
              </h2>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--olive)]">
                Günlük ana yemekler
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Klasik lokanta kültürünü taşıyan; et, köfte ve fırın yemekleri.
              Mobilde tek sütun, geniş ekranda iki sütun halinde listelenir.
            </p>
            <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-2">
              {etliKategori.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 rounded-2xl bg-[#f9f5ee] px-4 py-3 text-sm text-[var(--coffee)]"
                >
                  <p className="max-w-[70%] font-medium leading-snug">
                    {item.name}
                  </p>
                  <p className="shrink-0 text-right text-sm font-semibold tracking-tight text-[var(--olive)]">
                    {formatPrice(item.price, item.note)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-6">
          {digerKategoriler.map((category) => (
            <section
              key={category.id}
              aria-labelledby={`${category.id}-baslik`}
              className="rounded-3xl border border-[#e5dfd4] bg-white/95 p-5 shadow-sm shadow-black/[0.03] sm:p-6 lg:p-7"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2
                  id={`${category.id}-baslik`}
                  className="font-heading text-lg font-semibold tracking-tight text-[var(--coffee)] sm:text-xl"
                >
                  {category.icon && (
                    <span className="mr-2 align-middle" aria-hidden>
                      {category.icon}
                    </span>
                  )}
                  {category.name}
                </h2>
              </div>
              <div className="mt-4 divide-y divide-[#eee3d4] border-t border-[#eee3d4]">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-2.5 text-sm text-[var(--coffee)]"
                  >
                    <p className="max-w-[70%] leading-snug">{item.name}</p>
                    <p className="shrink-0 text-right text-sm font-semibold tracking-tight text-[var(--olive)]">
                      {formatPrice(item.price, item.note)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className="mt-4 rounded-3xl border border-dashed border-[#ddcdbd] bg-[#fdf8f1] px-5 py-4 text-xs text-[var(--muted)] sm:px-6">
          Fiyatlar dönemsel olarak değişiklik gösterebilir. Güncel bilgi için
          restoranı arayabilirsiniz.
        </section>

        <section className="mt-2 rounded-3xl bg-gradient-to-br from-[#4f6d46] via-[#5f7656] to-[#4e6547] px-5 py-7 text-white shadow-lg sm:px-7 lg:px-10 lg:py-9">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <div>
              <h2 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                Bugünün yemeklerini öğrenmek ister misiniz?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
                Günlük yemek çeşitleri değişiklik gösterebilir. Detaylı bilgi
                için bizi arayabilir veya WhatsApp üzerinden ulaşabilirsiniz.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href={CONTACT.phoneTel}
                className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-white px-4 py-2.5 text-center text-sm font-semibold text-[var(--olive)] shadow-md shadow-black/20 transition hover:bg-[#f3f4ec]"
              >
                Ara
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-[#25D366] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-black/20 transition hover:brightness-105"
              >
                WhatsApp
              </a>
              <a
                href={CONTACT.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-white/20"
              >
                Yol Tarifi
              </a>
            </div>
          </div>
        </section>

        <section className="mt-4 text-center text-xs text-[var(--muted)]">
          <span className="mr-1">Ana sayfaya dönmek isterseniz</span>
          <Link
            href="/"
            className="font-semibold text-[var(--olive)] underline-offset-2 hover:underline"
          >
            Çınar Restoran Gökçeada
          </Link>
        </section>
      </main>
    </div>
  );
}

