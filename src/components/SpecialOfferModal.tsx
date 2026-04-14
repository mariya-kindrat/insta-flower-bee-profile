"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SpecialOfferModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-graphite/40 backdrop-blur-md transition-opacity duration-500"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Content */}
      <div className="relative w-full md:w-[45%] bg-ivory rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up border border-gold/10">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 text-graphite hover:text-gold transition-colors duration-300 bg-ivory/90 rounded-full shadow-sm"
          aria-label="Close special offer"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto h-64 md:h-full min-h-[400px]">
            <Image
              src="/images/arragments.jpg"
              alt="Special floral composition"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

          {/* Text Section */}
          <div className="p-10 md:p-14 flex flex-col justify-center text-center md:text-left bg-white/50 backdrop-blur-[2px]">
            <span className={`${cormorant.className} text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3`}>
              Special Opportunity
            </span>
            <h2
              className={`${greatVibes.className} text-5xl md:text-6xl text-black mb-8 font-bold`}
              style={{ textShadow: "-4px 0px 4px rgba(0,0,0,0.2)" }}
            >
              Mother&apos;s Day
            </h2>
            <p className={`${cormorant.className} text-graphite text-xl md:text-2xl font-light leading-relaxed mb-10 italic`}>
              Celebrate the heart of the family. Enjoy a <span className="text-black font-bold">10% discount</span> on all our hand-crafted flower bouquets to make her day truly unforgettable.
            </p>

            <div className="pt-2">
              <Link
                href="#special-event"
                onClick={() => setIsOpen(false)}
                className="group relative inline-block px-10 py-4 bg-graphite text-ivory overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 text-sm tracking-[0.2em] uppercase font-medium">
                  Learn More
                </span>
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferModal;
