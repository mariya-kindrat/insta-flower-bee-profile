import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({ href, title, cover }:
  { href: string; title: string; cover: string; }) {
  return (
    <Link href={href} className="group block select-none">
      <div className="relative aspect-[4/5] group bg-white rounded-2xl p-3 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            draggable={false}
          />
        </div>
      </div>
      <h3 className="mt-3 font-serif text-xl font-semibold text-graphite tracking-tightish">
        {title}
      </h3>
    </Link>
  );
}