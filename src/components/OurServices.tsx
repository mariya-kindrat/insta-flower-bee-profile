import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta: {
    text: string;
    link: string;
  };
}

const services: Service[] = [
  {
    id: "occasion-reminders",
    title: "Custom Occasion Reminders",
    description:
      "Never miss a special moment with our thoughtfully curated reminder service. We help you celebrate every milestone with beautiful, personalized arrangements delivered right to your doorstep.",
    features: [
      "Personalized occasion tracking",
      "Beautiful arrangement selection",
      "Scheduled deliveries on your preferred date",
      "Customizable greeting cards",
    ],
    primaryCta: {
      text: "Set Up Reminders",
      link: "/services",
    },
    secondaryCta: {
      text: "Learn More",
      link: "/services",
    },
  },
  {
    id: "flower-packages",
    title: "Year-Round Flower Packages",
    description:
      "Elevate your space with our seasonal subscription plans. Enjoy fresh, stunning floral arrangements that evolve throughout the year, from vibrant spring blooms to elegant winter displays.",
    features: [
      "Seasonal flower curations",
      "Weekly or bi-weekly delivery options",
      "Premium quality fresh flowers",
      "Flexible pause and resume anytime",
      "Exclusive subscriber discounts",
    ],
    primaryCta: {
      text: "Start Subscription",
      link: "/services",
    },
    secondaryCta: {
      text: "View Packages",
      link: "/services",
    },
  },
];

const OurServices = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-ivory">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`${greatVibes.className} text-5xl md:text-6xl lg:text-7xl text-graphite tracking-wide`}
          >
            Our Services
          </h2>
          <div className="w-16 h-px bg-graphite/10 mx-auto mt-4 mb-6" />
          <p className="text-lg md:text-xl text-brown/80 max-w-2xl mx-auto">
            Discover our curated offerings designed to bring joy and elegance to every moment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-[350ms] ease-in-out p-8 md:p-10"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-8 w-2 h-12 bg-gradient-to-b from-gold to-transparent rounded-full opacity-60" />

              {/* Content */}
              <div className="relative z-10">
                {/* Service Title */}
                <h3 className={`${greatVibes.className} text-3xl md:text-4xl text-graphite mb-3 tracking-wide`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-brown/70 text-base md:text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-gold mt-1 text-lg flex-shrink-0">✓</span>
                        <span className="text-graphite/80 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={service.primaryCta.link}
                    className="px-6 py-3 bg-graphite text-ivory rounded-full font-semibold transition-all duration-300 hover:bg-graphite/90 text-center"
                  >
                    {service.primaryCta.text}
                  </Link>
                  <Link
                    href={service.secondaryCta.link}
                    className="px-6 py-3 border-2 border-beige text-graphite rounded-full font-semibold transition-all duration-300 hover:bg-beige/50 text-center"
                  >
                    {service.secondaryCta.text}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 inline-block">
            <h3 className={`${greatVibes.className} text-3xl md:text-4xl text-graphite mb-4`}>
              Ready to get started?
            </h3>
            <p className="text-brown/70 text-lg mb-6 max-w-2xl">
              Let&apos;s create something beautiful together
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gold text-white rounded-full font-semibold transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
