"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { CONTACT } from "@/lib/site";

const STATS = [
  { label: "Google Puanı", value: "4,4" },
  { label: "Misafir Yorumu", value: "117" },
  { label: "Açılış", value: "07:00 – 00:00" },
  { label: "Açık Alan", value: "Açık Hava Oturumu" },
] as const;

const HERO_IMAGES = [
  "/images/cinar/yemek-4.jpg",
  "/images/cinar/yemek-5.jpg",
  "/images/cinar/yemek-8.jpg",
] as const;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedIndexes, setFailedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const failedSet = useMemo(() => new Set(failedIndexes), [failedIndexes]);

  return (
    <div className="relative min-h-[65vh] overflow-hidden border-b border-[#e5dfd4] sm:min-h-[70vh] lg:min-h-[80vh]">
      {/* Görseller yüklenmezse bu gradient arka plan görünür kalır. */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3f4f3a] via-[#5a6b56] to-[#2e3b34]" />

      {HERO_IMAGES.map((src, index) => {
        const isFailed = failedSet.has(index);
        const isActive = activeIndex === index;
        return (
          <Image
            key={src}
            src={src}
            alt={`Çınar Restoran hero görsel ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            onError={() =>
              setFailedIndexes((prev) =>
                prev.includes(index) ? prev : [...prev, index],
              )
            }
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              isActive && !isFailed ? "opacity-100" : "opacity-0"
            } scale-[1] lg:scale-[0.96]`}
          />
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/50" />

      <div className="relative mx-auto flex min-h-[65vh] max-w-6xl flex-col justify-center px-4 pt-20 pb-10 sm:min-h-[70vh] sm:px-6 lg:min-h-[80vh] lg:px-8 lg:pt-24 lg:pb-14">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9ebd3]">
            Gökçeada · Merkez · Ada esintisi
          </p>
          <h1 className="font-heading mt-3 text-[1.95rem] font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
            Gökçeada&apos;da Ev Yemeklerinin Sıcak Hali
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#f2f5ec]">
            Çınar Restoran Gökçeada; günlük taze yemekleri, zeytinyağlıları, et
            lezzetleri ve samimi lokanta atmosferiyle Gökçeada merkezde
            misafirlerini ağırlar.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#e8eee3]">
            Harita veya arama sonucundan mı geldiniz? Arayın, WhatsApp&apos;tan
            yazın ya da yol tarifini tek tıkla açın - hızlıca bilgi alın.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <a
              href={CONTACT.phoneTel}
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[var(--olive)] px-4 py-3 text-center text-[15px] font-semibold text-white shadow-md shadow-black/25 transition hover:bg-[var(--olive-light)]"
            >
              Hemen Ara
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#25D366] px-4 py-3 text-center text-[15px] font-semibold text-white shadow-md shadow-black/25 transition hover:brightness-105"
            >
              WhatsApp
            </a>
            <a
              href={CONTACT.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/50 bg-white/12 px-4 py-3 text-center text-[15px] font-semibold text-white shadow-sm transition hover:bg-white/20"
            >
              Yol Tarifi Al
            </a>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2">
          {HERO_IMAGES.map((_, index) => (
            <span
              key={`dot-${index}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-6 bg-white" : "w-2.5 bg-white/45"
              }`}
              aria-hidden
            />
          ))}
        </div>

        <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-12">
          {STATS.map((s) => (
            <li
              key={s.label}
              className="rounded-2xl border border-white/30 bg-white/12 px-4 py-4 text-center shadow-sm backdrop-blur-sm"
            >
              <p className="text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#f2f5ec]">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
