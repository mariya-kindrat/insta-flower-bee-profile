import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <main className="px-6 md:px-10 lg:px-20 py-14 max-w-8xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tightish text-graphite">Portfolio</h1>
        <div className="w-16 h-px bg-graphite/10 mx-auto mt-4" />
      </div>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/portfolio/bouquets" className="group rounded-2xl border border-hairline bg-white/70 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-[350ms] ease-in-out">
          <div className="relative w-full h-[520px]">
            <Image
              src="/images/bouquet/photo-9.jpg"
              alt="Bouquets"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-8 text-center">
            <span className="inline-block font-serif text-xl text-graphite border-t border-hairline pt-4">Bouquets & Arrangements</span>
          </div>
        </Link>

        <Link href="/portfolio/weddings" className="group rounded-2xl border border-hairline bg-white/70 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-[350ms] ease-in-out">
          <div className="relative w-full h-[520px]">
            <Image
              src="/images/wedding/img8.JPG"
              alt="Weddings"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-8 text-center">
            <span className="inline-block font-serif text-xl text-graphite border-t border-hairline pt-4">Weddings</span>
          </div>
        </Link>

        <Link href="/portfolio/events" className="group rounded-2xl border border-hairline bg-white/70 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-[350ms] ease-in-out">
          <div className="relative w-full h-[520px]">
            <Image
              src="/images/workshop/photo-63.jpg"
              alt="Events"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-8 text-center">
            <span className="inline-block font-serif text-xl text-graphite border-t border-hairline pt-4">Events</span>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default PortfolioPage;