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

const Hero = () => {
  return (
    <section className="relative h-[68vh] md:h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center pb-12 md:pb-16">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 w-full h-full animate-slow-zoom z-0">
        <Image
          src="/images/wedding1/IMG_3009.jpg"
          alt="Luxury wedding floral designs by Iryna Melnyk"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 hero-overlay z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <h1
            className={`${greatVibes.className} text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-white leading-[0.85] drop-shadow-md`}
          >
            Iryna Melnyk
          </h1>
          <p
            className={`${cormorant.className} mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-[0.25em] uppercase`}
          >
            Artisan Floral Design & Wedding Editorial
          </p>

          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center">
            <Link
              href="/portfolio"
              className="group min-w-[220px] px-10 py-4 rounded-full bg-white text-graphite hover:shadow-md hover:-translate-y-px transition-all duration-300 active:scale-95 font-medium text-base tracking-widest uppercase"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="group min-w-[220px] px-10 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 hover:shadow-md hover:-translate-y-px transition-all duration-300 active:scale-95 font-medium text-base tracking-widest uppercase"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 z-20">
        <span
          className={`${cormorant.className} text-[10px] uppercase tracking-[0.4em] text-white/90`}
        >
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white via-white/50 to-transparent animate-bounce-slow" />
      </div>
    </section>
  );
};

export default Hero;
