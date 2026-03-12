import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const About = () => {
  return (
    <section className="bg-beige/40 py-12 md:py-16 px-6 md:px-12 lg:px-20 border-t border-gold/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className={`${greatVibes.className} text-4xl md:text-5xl lg:text-6xl text-graphite mb-6 tracking-wide`}>
          About
        </h2>

        <p className="text-base md:text-lg text-graphite/90 leading-[1.7] max-w-[650px] mx-auto mb-4">
          I&apos;m <span className="font-semibold">Iryna Melnyk</span> - a florist & stylist crafting airy, romantic florals
          with soft textures and timeless palettes.
        </p>

        <p className="text-base md:text-lg text-graphite/75 leading-[1.7] max-w-[650px] mx-auto mb-8 italic">
          My work is about capturing life&apos;s tender, unforgettable moments.
        </p>

        <Link
          href="/about"
          className="inline-block px-8 py-3 rounded-full bg-graphite/10 text-graphite hover:bg-graphite hover:text-ivory transition-all duration-300 font-semibold text-base md:text-lg border-2 border-graphite"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default About;