import Image from "next/image";
import Link from "next/link";
import { PortfolioCardProps } from "@/types";

const PortfolioCard = ({ href, title, cover }: PortfolioCardProps) => {
  return (
    <Link href={href} className="group block select-none">
      <div className="relative aspect-[4/5] bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-[400ms] ease-in-out">
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
};

export default PortfolioCard;