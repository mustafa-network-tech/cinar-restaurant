"use client";

import { useEffect, useState } from "react";

import { CONTACT } from "@/lib/site";

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Çınar+Restoran+Gökçeada&t=&z=16&ie=UTF8&iwloc=&output=embed";

export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setTimedOut(true), 9000);
    return () => window.clearTimeout(id);
  }, []);

  const showPlaceholder = timedOut && !loaded;

  if (showPlaceholder) {
    return (
      <div className="flex min-h-[280px] w-full flex-col items-center justify-center gap-5 rounded-2xl border border-[#e8e2d8] bg-gradient-to-br from-[#e8ece3] via-[#f7f4ef] to-[#dcd8cf] px-8 py-14 text-center shadow-inner lg:min-h-[360px]">
        <p className="font-heading text-lg font-semibold text-[var(--coffee)]">
          Harita burada yüklenemedi
        </p>
        <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">
          Konumu görmek ve yol tarifi almak için Google Haritalar&apos;da
          açabilirsiniz.
        </p>
        <a
          href={CONTACT.googleMapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--olive)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--olive-light)]"
        >
          Yol Tarifini Aç
        </a>
      </div>
    );
  }

  return (
    <div className="relative min-h-[280px] w-full overflow-hidden rounded-2xl border border-[#e8e2d8] bg-[var(--cream)] shadow-inner lg:min-h-[360px]">
      {!loaded && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#e8ece3]/92 via-[#f7f4ef]/92 to-[#dcd8cf]/88 px-6 backdrop-blur-[2px]"
          aria-busy="true"
          aria-label="Harita yükleniyor"
        >
          <span className="inline-flex h-9 w-9 animate-pulse rounded-full bg-[var(--olive)]/40" />
          <span className="text-sm font-medium text-[var(--muted)]">
            Harita yükleniyor…
          </span>
        </div>
      )}
      <iframe
        title="Çınar Restoran Gökçeada konumu"
        src={MAPS_EMBED}
        className={`size-full min-h-[280px] border-0 lg:min-h-[360px] ${loaded ? "opacity-100" : "opacity-0"}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
