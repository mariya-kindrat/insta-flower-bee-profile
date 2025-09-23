"use client";
import Link from "next/link";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[560px] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/irinavideo2.mp4" type="video/mp4" />
      </video>

      <div className="relative h-full flex flex-col items-center justify-end text-center px-4 pb-[12vh] md:pb-[16vh]">
        <div className="w-full max-w-3xl mx-auto backdrop-blur-sm bg-ivory/30 rounded-2xl px-4 py-4 sm:px-6 sm:py-5 md:px-10 md:py-8 shadow-sm">
          <h1
            className={`${greatVibes.className} text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-graphite tracking-wide whitespace-nowrap`}
          >
            Iryna Melnyk
          </h1>
          <p
            className={`${cormorant.className} mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl text-brown/90 font-semibold tracking-wide`}
          >
            Florist & Decorator
          </p>

          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-6 py-3 sm:px-7 rounded-full bg-graphite text-ivory hover:bg-graphite/90 transition font-semibold text-base sm:text-lg"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 sm:px-7 rounded-full border-2 border-graphite/70 text-graphite hover:bg-graphite hover:text-ivory transition font-semibold text-base sm:text-lg"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;