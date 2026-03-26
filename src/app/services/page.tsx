import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";



const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Services | Custom Reminders & Flower Packages | Flowerbee Boutique",
  description:
    "Discover our custom occasion reminders and year-round flower packages. Personalized floral services for every celebration and season.",
  alternates: { canonical: "/services" },
};

const ServicesPage = () => {
  return (
    <main className="text-graphite">
      {/* Hero Section */}
      <section className="bg-beige/40 py-12 md:py-16 border-b border-gold/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className={`${greatVibes.className} text-5xl md:text-6xl lg:text-7xl text-graphite tracking-wide`}>
            Our Services
          </h1>
          <div className="w-16 h-px bg-graphite/10 mx-auto mt-4 mb-6" />
          <p className="text-lg md:text-xl text-brown/80">
            Thoughtfully designed services to bring beauty into your life year-round
          </p>
        </div>
      </section>

      {/* Service 1: Custom Occasion Reminders */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className={`${greatVibes.className} text-4xl md:text-5xl text-graphite tracking-wide`}>
                Custom Occasion Reminders
              </h2>
              <div className="w-16 h-px bg-graphite/10 mt-3 mb-6" />
              <p className="text-lg text-brown/80 leading-relaxed mb-6">
                Never miss a special moment. Our custom occasion reminder service ensures every milestone is celebrated with a beautiful, personalized floral arrangement delivered right to your door.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-graphite">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  {[
                    "Personalized occasion tracking (birthdays, anniversaries, holidays)",
                    "Curated arrangement selections for each occasion",
                    "Flexible scheduling and preferred delivery dates",
                    "Custom greeting cards with your message",
                    "Option to modify or cancel anytime",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gold mt-1 text-lg flex-shrink-0">✓</span>
                      <span className="text-graphite/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-graphite mb-4">Perfect For:</h3>
                <p className="text-graphite/80 mb-2">
                  • Busy professionals who want to celebrate without the stress
                </p>
                <p className="text-graphite/80 mb-2">
                  • Families looking to strengthen connections
                </p>
                <p className="text-graphite/80">
                  • Anyone who values thoughtful, timely gestures
                </p>
              </div>
            </div>

            <div className="bg-ivory rounded-2xl p-8 md:p-10">
              <div className="bg-beige/60 rounded-2xl p-6 md:p-8 text-center">

                <h4 className="text-2xl font-semibold text-graphite mb-4">
                  Never Forget Again
                </h4>
                <p className="text-brown/70 mb-6">
                  Set it once, enjoy beautiful flowers every time. Let us handle the remembering while you celebrate the moments that matter.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-graphite text-ivory rounded-full font-semibold transition-all duration-300 hover:bg-graphite/90"
                >
                  Set Up Your Reminders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Year-Round Flower Packages */}
      <section className="bg-ivory py-14 md:py-20 border-t border-b border-gold/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center shadow-lg">
              <Image
                src="/images/bouque.jpeg"
                alt="Fresh seasonal flowers"
                fill
                className="object-cover"
              />
              {/* Subtle dark overlay for readability */}
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* Centered content */}
              <div className="relative z-20 p-8 md:p-10 text-center text-white">
                <h4 className="text-3xl font-semibold mb-4 drop-shadow-md">
                  Fresh Every Season
                </h4>
                <p className="text-white/90 mb-8 max-w-sm mx-auto leading-relaxed drop-shadow-sm">
                  Experience the beauty of seasonal flowers delivered to your home. Each arrangement tells the story of the season.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-11 py-3.5 bg-white rounded-full transition-all duration-300 hover:bg-ivory hover:shadow-xl hover:-translate-y-1 active:scale-95 shadow-lg relative z-30"
                >
                  <span className="text-[#3C3C3C] font-medium text-sm uppercase tracking-[0.15em]">
                    Start Your Subscription
                  </span>
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className={`${greatVibes.className} text-4xl md:text-5xl text-graphite tracking-wide`}>
                Year-Round Flower Packages
              </h2>
              <div className="w-16 h-px bg-graphite/10 mt-3 mb-6" />
              <p className="text-lg text-brown/80 leading-relaxed mb-6">
                Elevate your home or office with our seasonal flower subscription. Experience the beauty of carefully curated arrangements that evolve throughout the year.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-graphite">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  {[
                    "Weekly or bi-weekly fresh flower delivery",
                    "Seasonal curations featuring premium blooms",
                    "Professional arrangement styling",
                    "Flexible pause/resume options (no penalties)",
                    "Exclusive subscriber-only discounts",
                    "Free seasonal arrangement refreshes",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gold mt-1 text-lg flex-shrink-0">✓</span>
                      <span className="text-graphite/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-graphite mb-4">Perfect For:</h3>
                <p className="text-graphite/80 mb-2">
                  • Those who love fresh flowers and beauty
                </p>
                <p className="text-graphite/80 mb-2">
                  • Creating elegant home and office spaces
                </p>
                <p className="text-graphite/80">
                  • Supporting local, sustainable floristry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className={`${greatVibes.className} text-4xl md:text-5xl text-graphite tracking-wide text-center`}>
            Choose Your Perfect Service
          </h2>
          <div className="w-16 h-px bg-graphite/10 mx-auto mt-4 mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Reminders Card */}
            <div className="flex flex-col rounded-2xl border-2 border-beige bg-ivory/50 p-8 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-[350ms] ease-in-out">
              <h3 className="text-2xl font-semibold text-graphite mb-6">Occasion Reminders</h3>
              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg flex-shrink-0">★</span>
                  <p className="text-graphite/80">As-needed deliveries for special occasions</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg flex-shrink-0">★</span>
                  <p className="text-graphite/80">Perfect for gift-giving to loved ones</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg flex-shrink-0">★</span>
                  <p className="text-graphite/80">Customizable for any milestone</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg flex-shrink-0">★</span>
                  <p className="text-graphite/80">No ongoing commitment</p>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block px-10 py-3 border-2 border-graphite/20 text-graphite rounded-full font-semibold transition-all duration-300 hover:bg-graphite hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Subscription Card */}
            <div className="flex flex-col rounded-2xl border-2 border-gold bg-white p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-[350ms] ease-in-out">
              <h3 className="text-2xl font-semibold text-graphite mb-6">Year-Round Packages</h3>
              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg flex-shrink-0">★</span>
                  <p className="text-graphite/80">Regular scheduled deliveries</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg flex-shrink-0">★</span>
                  <p className="text-graphite/80">Best value for fresh flowers year-round</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg flex-shrink-0">★</span>
                  <p className="text-graphite/80">Exclusive subscriber benefits</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg flex-shrink-0">★</span>
                  <p className="text-graphite/80">Cancel anytime, no questions asked</p>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block px-10 py-3 border-2 border-gold/20 text-gold rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-white"
                >
                  Start Subscription
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className={`${greatVibes.className} text-4xl md:text-5xl text-graphite tracking-wide`}>
            Ready to Get Started?
          </h2>
          <div className="w-16 h-px bg-graphite/10 mx-auto mt-4 mb-6" />
          <p className="text-lg text-brown/80 mb-8 leading-relaxed">
            Let&apos;s find the perfect service for you. Our team is here to answer any questions and help you choose the option that fits your lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-graphite text-ivory rounded-full font-semibold transition-all duration-300 hover:bg-graphite/90"
            >
              Get Started Now
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-beige text-graphite rounded-full font-semibold transition-all duration-300 hover:bg-beige/50"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
