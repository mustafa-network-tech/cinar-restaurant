import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import MobileQuickActions from "@/components/MobileQuickActions";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-[5.75rem] md:pb-0">
        <section id="anasayfa" className="scroll-mt-24">
          <Hero />
        </section>
        <section id="hakkimizda" className="scroll-mt-24">
          <About />
        </section>
        <section id="lezzetler" className="scroll-mt-24">
          <MenuPreview />
        </section>
        <section id="galeri" className="scroll-mt-24">
          <Gallery />
        </section>
        <TrustSection />
        <section id="iletisim" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
      <MobileQuickActions />
    </>
  );
}
