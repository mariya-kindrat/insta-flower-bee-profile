import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Florist & Wedding Decorator in Connecticut",
  description:
    "I'm Iryna Melnyk, a Connecticut florist & wedding decorator creating timeless floral designs and elegant event decor.",
  alternates: { canonical: "/about" },
};

const AboutPage = () => {
  return (
    <main className="text-graphite">
      <section className="bg-ivory/80 border-b border-gold/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/hero/hero1.jpg"
              alt="Iryna Melnyk"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-xl md:ml-2">
            <h1 className="font-serif italic text-3xl md:text-4xl text-graphite tracking-tightish">
              I&apos;m Iryna - a florist and wedding decorator based in Connecticut.
            </h1>
            <div className="w-16 h-px bg-gold/40 mt-3" />
            <p className="mt-6 leading-relaxed text-graphite/80">
              Flowers are my language of warmth and elegance. I design timeless bouquets,
              romantic ceremony florals, and delicate table arrangements with airy textures and calm,
              refined palettes.
            </p>
            <p className="mt-4 leading-relaxed text-graphite/80">
              Family is my deepest inspiration. It reminds me what every celebration is truly about — love,
              tenderness, and presence.
              I carry that feeling into every arrangement I create.
            </p>

            <blockquote className="mt-6 border-l-2 border-graphite/40 pl-4 italic text-brown">
              “I believe floristry is more than décor — it’s a quiet way to express the most meaningful things.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border-t-2 border-t-gold/30 border-x border-b border-gold/10 bg-ivory/40 p-8 shadow-sm">
            <h3 className="font-serif italic text-2xl text-brown tracking-tightish">Family First</h3>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-graphite/70">
              My work is guided by warmth and presence — the same values I treasure at home.
            </p>
          </div>
          <div className="rounded-xl border-t-2 border-t-gold/30 border-x border-b border-gold/10 bg-ivory/40 p-8 shadow-sm">
            <h3 className="font-serif italic text-2xl text-brown tracking-tightish">Soft Aesthetics</h3>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-graphite/70">
              Airy compositions, tactile textures, and timeless tones over trends.
            </p>
          </div>
          <div className="rounded-xl border-t-2 border-t-gold/30 border-x border-b border-gold/10 bg-ivory/40 p-8 shadow-sm">
            <h3 className="font-serif italic text-2xl text-brown tracking-tightish">Workshops</h3>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-graphite/70">
              Gentle classes where we slow down, create, and connect through flowers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory/80 border-t border-gold/10">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-graphite tracking-tightish leading-tight">
            Let&apos;s create something tender and unforgettable.
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/portfolio"
              aria-label="View wedding and event floral portfolio by Iryna Melnyk"
              className="px-10 py-4 rounded-full bg-graphite text-ivory hover:bg-graphite/90 transition font-semibold text-lg min-w-[220px]"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              aria-label="Book a consultation with wedding decorator & florist Iryna Melnyk"
              className="px-10 py-4 rounded-full border-2 border-graphite/70 text-graphite hover:bg-graphite hover:text-ivory transition font-semibold text-lg min-w-[220px]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;