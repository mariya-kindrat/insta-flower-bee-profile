
import Link from "next/link";

const AboutTeaser = () => {
  return (
    <section className="bg-beige/40 py-16 px-6 md:px-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif italic text-graphite mb-4 tracking-tightish">
          About
        </h2>
        <p className="text-base md:text-lg text-graphite/80 leading-relaxed">
          I’m Iryna Melnyk — a florist & stylist crafting airy, romantic florals
          with soft textures and timeless palettes. My work is about capturing
          life’s tender, unforgettable moments.
        </p>
        <div className="mt-8">
          <Link
            href="/about"
            className="inline-block px-7 py-3 rounded-full border-2 border-graphite/70 text-graphite hover:bg-graphite hover:text-ivory transition font-semibold text-lg"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;