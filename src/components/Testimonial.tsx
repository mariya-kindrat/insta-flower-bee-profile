import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import { FaStar } from "react-icons/fa";

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

interface TestimonialItem {
  id: number;
  title: string;
  rating: number;
  comment: string;
  author: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    title: "Unbelievable Attention to Detail",
    rating: 5,
    comment: "The floral arrangements for our wedding were beyond anything we could have imagined. Iryna's touch is truly magical.",
    author: "Aleksandra M.",
  },
  {
    id: 2,
    title: "Always Fresh and Stunning",
    rating: 5,
    comment: "I've been a subscriber for 6 months and every bouquet brings so much joy to my home. The flowers last remarkably long!",
    author: "Svitlana J.",
  },
  {
    id: 3,
    title: "Exceeded All Expectations",
    rating: 5,
    comment: "Needed a last-minute arrangement for an anniversary and Flowerbee delivered the most exquisite piece. Highly recommend!",
    author: "Maria K.",
  },
  {
    id: 4,
    title: "The Best Florist in CT",
    rating: 5,
    comment: "Iryna is an artist. Her eye for color and texture is unmatched. Every occasion we've used her for has been perfect.",
    author: "Anna S.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-ivory/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-beige/10 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className={`${cormorant.className} text-xs md:text-sm uppercase tracking-[0.4em] text-graphite/40 mb-4 block font-medium`}>
            Client Love
          </span>
          <h2 className={`${greatVibes.className} text-6xl md:text-7xl lg:text-8xl text-graphite leading-none`}>
            Testimonials
          </h2>
          <div className="w-12 h-px bg-gold/30 mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 border border-beige/20 flex flex-col h-full"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${i < testimonial.rating ? "text-gold" : "text-beige"
                      }`}
                  />
                ))}
              </div>

              {/* Title */}
              <h3 className={`${cormorant.className} text-xl md:text-2xl text-graphite font-semibold italic mb-4 leading-tight`}>
                &ldquo;{testimonial.title}&rdquo;
              </h3>

              {/* Comment Body */}
              <p className={`${cormorant.className} text-graphite/70 text-base md:text-lg leading-relaxed mb-6 flex-grow`}>
                {testimonial.comment}
              </p>

              {/* Author */}
              <div className="mt-auto">
                <div className="w-8 h-px bg-gold/30 mb-3" />
                <span className={`${cormorant.className} text-sm uppercase tracking-widest text-graphite/60 font-medium`}>
                  — {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
