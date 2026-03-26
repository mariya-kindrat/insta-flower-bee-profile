import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const About = () => {
  return (
    <section className="bg-beige/40 py-12 md:py-16 px-6 md:px-12 lg:px-20 border-t border-gold/10">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header with Inline Circular Image */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="relative aspect-square w-16 md:w-20 rounded-full overflow-hidden shadow-sm border border-gold/10 flex-shrink-0">
            <Image
              src="/images/hero/hero1.jpg"
              alt="Iryna Melnyk - Floral Designer"
              fill
              className="object-cover"
              sizes="80px"
              priority
            />
          </div>
          <h2 className={`${greatVibes.className} text-5xl md:text-6xl text-graphite tracking-wide`}>
            About
          </h2>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center">
          <p className="text-base md:text-lg text-graphite/90 leading-relaxed mb-4 font-light max-w-xl">
            I&apos;m <span className="font-semibold">Iryna Melnyk</span> — a florist & stylist crafting airy, romantic florals
            with soft textures and timeless palettes.
          </p>

          <p className="text-base md:text-lg text-graphite/75 leading-relaxed mb-8 italic font-light max-w-xl">
            &quot;My work is about capturing life&apos;s tender, unforgettable moments.&quot;
          </p>

          <Link
            href="/about"
            className="inline-block px-8 py-3 rounded-full border border-graphite/40 text-graphite/80 hover:bg-graphite hover:text-ivory hover:border-graphite transition-all duration-500 text-xs tracking-[0.25em] uppercase"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;