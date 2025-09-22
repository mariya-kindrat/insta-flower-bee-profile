import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="px-6 md:px-10 lg:px-20 py-14">
      <h1 className="font-serif text-3xl md:text-4xl tracking-tightish text-graphite mb-8">Portfolio</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/portfolio/bouquets" className="group rounded-2xl border border-hairline bg-white/70 overflow-hidden">
          <div className="relative w-full h-96">
            <Image
              src="/images/bouque.jpeg"
              alt="Bouquets"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-6 text-center">
            <span className="inline-block font-serif text-xl text-graphite border-t border-hairline pt-4">Bouquets & Arrangements</span>
          </div>
        </Link>

        <Link href="/portfolio/weddings" className="group rounded-2xl border border-hairline bg-white/70 overflow-hidden">
          <div className="relative w-full h-96">
            <Image
              src="/images/wedding/img8.JPG"
              alt="Weddings"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-6 text-center">
            <span className="inline-block font-serif text-xl text-graphite border-t border-hairline pt-4">Weddings</span>
          </div>
        </Link>

        <Link href="/portfolio/events" className="group rounded-2xl border border-hairline bg-white/70 overflow-hidden">
          <div className="relative w-full h-96">
            <Image
              src="/images/birthday/img5.jpg"
              alt="Events"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-6 text-center">
            <span className="inline-block font-serif text-xl text-graphite border-t border-hairline pt-4">Events</span>
          </div>
        </Link>
      </div>
    </main>
  );
}