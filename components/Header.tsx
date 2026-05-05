"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { CONTACT } from "@/lib/site";

const NAV = [
  { href: "#anasayfa", label: "Ana Sayfa", type: "anchor" as const },
  { href: "#hakkimizda", label: "Hakkımızda", type: "anchor" as const },
  { href: "#lezzetler", label: "Lezzetler", type: "anchor" as const },
  { href: "#galeri", label: "Galeri", type: "anchor" as const },
  { href: "/menu", label: "Menü", type: "route" as const },
  { href: "#iletisim", label: "İletişim", type: "anchor" as const },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ebe4d9] bg-[#fdfbf7]/92 backdrop-blur-md shadow-[0_1px_3px_rgba(60,42,33,0.05)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8">
        <Link
          href="#anasayfa"
          className="font-heading shrink-0 text-lg font-semibold tracking-tight text-[var(--coffee)] sm:text-xl"
          onClick={close}
        >
          Çınar Restoran
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-5 text-[14px] font-medium text-[var(--muted)] md:flex md:gap-6 lg:gap-8 lg:text-[15px]"
          aria-label="Ana menü"
        >
          {NAV.map((item) =>
            item.type === "route" ? (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-1 py-1 transition-colors hover:text-[var(--olive)] ${
                  pathname === item.href
                    ? "text-[var(--olive)]"
                    : "text-[var(--muted)]"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-1 py-1 text-[var(--muted)] transition-colors hover:text-[var(--olive)]"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 flex-wrap items-center justify-end gap-1.5 md:flex lg:gap-2">
          <a
            href={CONTACT.phoneTel}
            className="inline-flex min-h-9 items-center justify-center rounded-full bg-[var(--olive)] px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-[var(--olive-light)] lg:min-h-10 lg:px-3.5 lg:py-2 lg:text-[13px]"
          >
            Ara
          </a>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 items-center justify-center rounded-full bg-[#25D366] px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:brightness-105 lg:min-h-10 lg:px-3.5 lg:py-2 lg:text-[13px]"
          >
            WhatsApp
          </a>
          <a
            href={CONTACT.googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 items-center justify-center rounded-full border border-[#dcd5c9] bg-white px-2.5 py-1.5 text-[11px] font-semibold text-[var(--coffee)] transition hover:border-[var(--olive)] lg:min-h-10 lg:px-3.5 lg:py-2 lg:text-[13px]"
          >
            Konum
          </a>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-[#dcd5c9] bg-white/80 px-3 py-2 text-[var(--coffee)] shadow-sm transition hover:border-[var(--olive)] hover:bg-[var(--cream)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menüyü aç veya kapat</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-t border-[#e5dfd4] bg-[#fdfbf7]/98 shadow-lg backdrop-blur-md md:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-base font-semibold text-[var(--coffee)]"
            aria-label="Mobil menü"
          >
            {NAV.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`min-h-12 rounded-xl px-4 py-3 transition-colors hover:bg-[var(--cream)] hover:text-[var(--olive)] ${
                    pathname === item.href
                      ? "bg-[var(--cream)] text-[var(--olive)]"
                      : ""
                  }`}
                  onClick={close}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="min-h-12 rounded-xl px-4 py-3 transition-colors hover:bg-[var(--cream)] hover:text-[var(--olive)]"
                  onClick={close}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

