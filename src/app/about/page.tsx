
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Florist & Wedding Decorator in Connecticut",
  description:
    "I’m Iryna Melnyk, a Connecticut florist & wedding decorator creating timeless floral designs and elegant event decor.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="text-graphite">

      <section className="bg-beige/40">
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
            <h2 className="font-serif italic text-3xl md:text-4xl text-graphite tracking-tightish">
              I’m Iryna — Florist & Wedding Decorator in Connecticut
            </h2>
            <p className="mt-4 leading-relaxed text-graphite/80">
              Flowers are my language of warmth and elegance. I create timeless
              bouquets, romantic ceremony florals, and delicate table designs with
              airy textures and calm, nuanced palettes.
            </p>
            <p className="mt-4 leading-relaxed text-graphite/80">
              Family is my deepest inspiration. It reminds me what every
              celebration is truly about — love, tenderness, and presence. I put
              that feeling into every arrangement I craft.
            </p>

            <blockquote className="mt-6 border-l-2 border-graphite/40 pl-4 italic text-brown">
              “I believe floristry is more than décor — it’s a quiet way to say the
              most important things.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-graphite/10 bg-beige/50 p-6">
            <h3 className="font-serif italic text-xl text-graphite">Family First</h3>
            <p className="mt-2 text-sm leading-relaxed text-graphite/80">
              My work is guided by warmth and presence — the same values I treasure at home.
            </p>
          </div>
          <div className="rounded-xl border border-graphite/10 bg-beige/50 p-6">
            <h3 className="font-serif italic text-xl text-graphite">Soft Aesthetics</h3>
            <p className="mt-2 text-sm leading-relaxed text-graphite/80">
              Airy compositions, tactile textures, and timeless tones over trends.
            </p>
          </div>
          <div className="rounded-xl border border-graphite/10 bg-beige/50 p-6">
            <h3 className="font-serif italic text-xl text-graphite">Workshops</h3>
            <p className="mt-2 text-sm leading-relaxed text-graphite/80">
              Gentle classes where we slow down, create, and connect through flowers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-beige/40">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center">
          <p className="font-serif italic text-2xl text-graphite tracking-tightish">
            Let’s create something tender and unforgettable.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/portfolio"
              aria-label="View wedding and event floral portfolio by Iryna Melnyk"
              className="px-7 py-3 rounded-full bg-graphite text-ivory hover:bg-graphite/90 transition font-semibold text-lg"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              aria-label="Book a consultation with wedding decorator & florist Iryna Melnyk"
              className="px-7 py-3 rounded-full border-2 border-graphite/70 text-graphite hover:bg-graphite hover:text-ivory transition font-semibold text-lg"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}