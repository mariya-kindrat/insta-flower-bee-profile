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
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

interface OfferItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const offers: OfferItem[] = [
  {
    id: "arrangements",
    title: "Arrangements",
    subtitle: "Bespoke Bouquets",
    image: "/images/offers/IMG_1672.JPG",
    link: "/portfolio/bouquets",
  },
  {
    id: "installations",
    title: "Installations",
    subtitle: "Floral Architecture",
    image: "/images/wedding/img19.JPG",
    link: "/portfolio/bouquets",
  },
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "Event Design",
    image: "/images/offers/IMG_0251.JPG",
    link: "/portfolio/weddings",
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    subtitle: "Weekly Blooms",
    image: "/images/offers/irynamy.JPG",
    link: "/services",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-24 px-6 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-beige/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ivory/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className={`${cormorant.className} text-xs md:text-sm uppercase tracking-[0.4em] text-graphite/40 mb-4 block font-medium`}>
            A Curated Experience
          </span>
          <h2 className={`${greatVibes.className} text-6xl md:text-7xl lg:text-8xl text-graphite leading-none`}>
            What We Offer
          </h2>
          <div className="w-12 h-px bg-gold/30 mx-auto mt-6" />
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 lg:gap-y-0">
          {offers.map((offer, index) => (
            <Link
              key={offer.id}
              href={offer.link}
              className={`group flex flex-col ${
                index % 2 !== 0 ? "lg:mt-10" : "lg:mt-0"
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-gold/5 rounded-sm">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Elegant Inner Frame */}
                <div className="absolute inset-0 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-4 border border-white/10 pointer-events-none" />
              </div>

              {/* Text Content */}
              <div className="mt-8 text-center lg:text-left px-2">
                <span className={`${cormorant.className} text-[11px] md:text-xs uppercase tracking-[0.25em] text-gold mb-2 block font-semibold`}>
                  {offer.subtitle}
                </span>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl text-graphite font-light italic leading-tight`}>
                  {offer.title}
                </h3>
                
                <div className="mt-5 flex items-center justify-center lg:justify-start gap-3 group/btn">
                  <div className="w-6 h-px bg-graphite/20 transition-all duration-500 group-hover/btn:w-10 group-hover/btn:bg-gold" />
                  <span className={`${cormorant.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-graphite/65 group-hover/btn:text-graphite transition-colors duration-300`}>
                    View Collection
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;