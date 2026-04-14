"use client";

import Link from "next/link";
import Image from "next/image";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const MonthSpecialEvent = () => {
  return (
    <section id="special-event" className="relative py-24 md:py-32 overflow-hidden bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Editorial Image Side */}
          <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-sm shadow-sm group">
            <Image
              src="/images/bouquet/IMG_0191.jpg"
              alt="Soft spring floral arrangement for Mother's Day"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105 animate-slow-zoom"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>

          {/* Text Content Side */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <span className={`${cormorant.className} text-gold uppercase tracking-[0.3em] text-sm md:text-base font-medium`}>
                Seasonal Feature
              </span>
              <h2 className={`${greatVibes.className} text-6xl md:text-7xl lg:text-8xl text-graphite leading-tight`}>
                Mother&apos;s Day
              </h2>
            </div>

            <div className={`${cormorant.className} space-y-6 max-w-lg`}>
              <p className="text-xl md:text-2xl text-graphite/80 font-light leading-relaxed italic">
                &ldquo;A mother is she who can take the place of all others but whose place no one else can take.&rdquo;
              </p>
              <p className="text-lg text-graphite/70 font-light leading-relaxed">
                Celebrate the most important women in your life with our limited edition Mother&apos;s Day collection. Hand-crafted bouquets designed to capture the soft elegance and timeless beauty of maternal love.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/portfolio/bouquets"
                className="group relative inline-block px-12 py-4 text-graphite overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 text-sm tracking-[0.2em] uppercase font-medium">
                  Explore the Collection
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold/30 group-hover:h-full transition-all duration-300 z-0 opacity-20" />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full z-10" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('/images/bee_BLACK.svg')] bg-no-repeat bg-right-top opacity-[0.02] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-l border-b border-gold/10 -mb-12 -ml-12 rounded-bl-full pointer-events-none" />
    </section>
  );
};

export default MonthSpecialEvent;
