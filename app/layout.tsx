import type { Metadata, Viewport } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const displayFont = Lora({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Çınar Restoran Gökçeada | Ev Yemekleri ve Lokanta",
  description:
    "Gökçeada merkezde ev yemekleri ve lokanta lezzeti; hızlı iletişim, yol tarifi ve WhatsApp ile ziyaretçilere kolay ulaşım. Samimi, yerel bir mekân.",
  keywords: [
    "Çınar Restoran Gökçeada",
    "Gökçeada restoran",
    "Gökçeada ev yemekleri",
    "Gökçeada lokanta",
    "Gökçeada yemek",
  ],
};

export const viewport: Viewport = {
  themeColor: "#fdfbf7",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--warm-white)] text-[var(--coffee)]">
        {children}
      </body>
    </html>
  );
}
