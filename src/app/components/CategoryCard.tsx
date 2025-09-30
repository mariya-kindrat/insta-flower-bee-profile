// src/app/portfolio/CategoryCard.tsx
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/store/dummy-store/data";

export default function CategoryCard({
  href,
  category,
  label,
}: {
  href: string;
  category: "bouquet" | "wedding" | "event";
  label: string;
}) {
  const first = PORTFOLIO_DATA.find(i => i.category === category);
  const cover = first?.cover ?? "/images/placeholder.png";

  return (
    <Link href={href} className="group block rounded-2xl border p-0 overflow-hidden bg-white/70">
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={cover}
          alt={label}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          draggable={false}
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg">{label}</h3>
      </div>
    </Link>
  );
}