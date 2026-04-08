"use client";

import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { FaInstagram, FaPlay, FaClone } from "react-icons/fa6";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const galleryItems = [
  { id: 1, src: "/images/bouquet/img.JPG", type: "video" },
  { id: 2, src: "/images/baby-shower/IMG5.JPG", type: "stack" },
  { id: 3, src: "/images/wedding1/photo_12.jpeg", type: "stack" },
  { id: 4, src: "/images/bouquet/photo-2.jpg", type: "video" },
  { id: 5, src: "/images/instalation/img19.JPG", type: "video" },
  { id: 6, src: "/images/wedding/img22.JPG", type: "stack" },
  { id: 7, src: "/images/wedding/img15.JPG", type: "video" },
  { id: 8, src: "/images/instalation/img23.JPG", type: "stack" },
];

const CuratedGallery = () => {
  // Duplicate items for seamless looping
  const duplicatedItems = [...galleryItems, ...galleryItems];

  return (
    <section className="pt-12 pb-12 md:pt-16 md:pb-16 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Refined Header Area */}
        <div className="text-center mb-16 md:mb-20">
          <a
            href="https://www.instagram.com/instaflowerbee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mb-4 opacity-30 hover:opacity-100 focus:opacity-100 transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-graphite/30 p-1 -m-1 rounded-sm group/insta"
            aria-label="Follow Flower Bee on Instagram"
          >
            <div className="w-8 h-px bg-graphite" />
            <FaInstagram className="w-3 h-3 text-graphite group-hover/insta:scale-110 transition-transform" />
            <div className="w-8 h-px bg-graphite" />
          </a>
          <h2 className={`${cormorant.className} text-3xl md:text-4xl lg:text-5xl text-graphite font-light tracking-wide mb-6 italic`}>
            Moments Captured
          </h2>
          <a
            href="https://www.instagram.com/instaflowerbee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mb-4 opacity-30 hover:opacity-100 focus:opacity-100 transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-graphite/30 p-1 -m-1 rounded-sm group/insta"
            aria-label="Follow Flower Bee on Instagram"
          > <p className="text-[11px] uppercase tracking-[0.35em] text-graphite/40 font-medium">
              Join our journey on Instagram &bull; @instaflowerbee
            </p>
          </a>

        </div>
      </div>

      {/* Infinite Scrolling Carousel */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-marquee hover:pause-animation gap-1">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative aspect-square w-[280px] md:w-[350px] lg:w-[400px] flex-shrink-0 overflow-hidden"
            >
              <Image
                src={item.src}
                alt="Refined floral moment"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 280px, 400px"
              />

              {/* Subtle Overlays */}
              <div className="absolute top-4 right-4 text-white/80 drop-shadow-sm z-20">
                {item.type === "stack" && <FaClone className="w-3.5 h-3.5" />}
              </div>

              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 flex items-center justify-center text-white/90 drop-shadow-md">
                    <FaPlay className="w-8 h-8 fill-current" />
                  </div>
                </div>
              )}

              {/* Sophisticated Inner Frame on Hover */}
              <div className="absolute inset-0 border-[0px] group-hover:border-[16px] border-white/10 transition-all duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-graphite/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.25rem)); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CuratedGallery;
