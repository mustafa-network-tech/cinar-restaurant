import MapEmbed from "@/components/MapEmbed";
import { CONTACT } from "@/lib/site";

export default function Contact() {
  return (
    <section className="bg-[#fdfbf7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-[var(--coffee)] sm:text-4xl">
          İletişim ve Konum
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          Ada ziyaretinde en çok ihtiyaç duyulan şey net bilgi: buradan
          arayabilir, yazabilir veya rotanızı açabilirsiniz.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10 lg:items-stretch">
          <div className="flex flex-col rounded-2xl border border-[#e8e2d8] bg-white p-6 shadow-lg shadow-black/[0.05] sm:p-8">
            <ul className="space-y-5 text-[var(--muted)]">
              <li>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--olive)]">
                  Telefon
                </span>
                <p className="mt-1 text-lg font-semibold text-[var(--coffee)]">
                  <a href={CONTACT.phoneTel} className="hover:text-[var(--olive)]">
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
              </li>
              <li>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--olive)]">
                  Adres
                </span>
                <p className="mt-1 leading-relaxed text-[var(--coffee)]">
                  Çınarlı, Atatürk Cd. No: 14/A, 17760 Gökçeada / Çanakkale
                </p>
              </li>
              <li>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--olive)]">
                  Çalışma saati
                </span>
                <p className="mt-1 font-semibold text-[var(--coffee)]">
                  07:00 – 00:00
                </p>
              </li>
              <li>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--olive)]">
                  Öne çıkan
                </span>
                <p className="mt-1 text-[var(--coffee)]">
                  Açık hava oturma alanı mevcut
                </p>
              </li>
            </ul>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a
                href={CONTACT.phoneTel}
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[var(--olive)] px-5 py-3 text-center text-[15px] font-semibold text-white shadow-md transition hover:bg-[var(--olive-light)]"
              >
                Ara
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-[#25D366] bg-[#e8f8ec] px-5 py-3 text-center text-[15px] font-semibold text-[#1c5c2d] transition hover:bg-[#d4f0dc]"
              >
                WhatsApp
              </a>
              <a
                href={CONTACT.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-[#dcd5c9] bg-white px-5 py-3 text-center text-[15px] font-semibold text-[var(--coffee)] transition hover:border-[var(--olive)]"
              >
                Yol Tarifi
              </a>
            </div>
          </div>

          <div className="flex min-h-[280px] flex-col lg:min-h-0">
            <MapEmbed />
            <p className="mt-3 text-center text-xs text-[var(--muted)]">
              Harita yüklenmezse{" "}
              <a
                href={CONTACT.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--olive)] underline-offset-2 hover:underline"
              >
                Google Haritalar
              </a>{" "}
              üzerinden devam edebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
