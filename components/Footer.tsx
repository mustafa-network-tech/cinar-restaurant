import { CONTACT } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5dfd4] bg-[#f4efe8]/85">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-[max(6rem,env(safe-area-inset-bottom))] sm:px-6 md:pb-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-heading text-xl font-semibold text-[var(--coffee)]">
              Çınar Restoran Gökçeada
            </p>
            <p className="mt-2 max-w-md text-[var(--muted)]">
              Gökçeada&apos;da ev yemekleri ve lokanta lezzeti.
            </p>
          </div>
          <div className="text-sm text-[var(--muted)]">
            <p>
              <a
                href={CONTACT.phoneTel}
                className="font-semibold text-[var(--coffee)] hover:text-[var(--olive)]"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>
            <p className="mt-2 max-w-xs leading-relaxed">
              Çınarlı, Atatürk Cd. 14/A, Gökçeada
            </p>
          </div>
        </div>
        <p className="mt-10 border-t border-[#e0d8cd] pt-8 text-center text-xs text-[var(--muted)]">
          © 2026 Çınar Restoran Gökçeada. Tüm hakları saklıdır.
        </p>
        <p className="mt-3 text-center text-[10px] font-medium tracking-wide text-[#b0a499]">
          Web tasarım: MK Digital Systems
        </p>
      </div>
    </footer>
  );
}
