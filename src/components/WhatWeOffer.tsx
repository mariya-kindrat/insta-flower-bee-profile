import Link from "next/link";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

interface OfferItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

const offers: OfferItem[] = [
  {
    id: "arrangements",
    title: "Arrangements & Bouquets",
    image: "/images/offers/IMG_1672.JPG",
    link: "/portfolio/bouquets",
  },
  {
    id: "installations",
    title: "Floral Installations",
    image: "/images/offers/IMG_0265.JPG",
    link: "/portfolio/bouquets",
  },
  {
    id: "weddings",
    title: "Weddings & Event Design",
    image: "/images/offers/IMG_0251.JPG",
    link: "/portfolio/weddings",
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    image: "/images/offers/irynamy.JPG",
    link: "/services",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`${greatVibes.className} text-6xl md:text-7xl lg:text-8xl text-graphite tracking-wide`}>
            What We Offer
          </h2>
          <div className="w-16 h-px bg-graphite/10 mx-auto mt-4" />
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              href={offer.link}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-[350ms] ease-in-out"
            >
              {/* Image Container */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white text-center leading-tight">
                  {offer.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;