import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({ href, title, cover }:
  { href: string; title: string; cover: string; }) {
  return (
    <Link href={href} className="group block select-none">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          draggable={false}
        />
      </div>
      {/* Slightly bolder, improved readability without being too heavy */}
      <h3 className="mt-3 font-serif text-xl font-semibold text-graphite tracking-tightish">
        {title}
      </h3>
    </Link>
  );
}