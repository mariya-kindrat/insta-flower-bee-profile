import PortfolioCard from "@/app/components/PortfolioCard";
import { PORTFOLIO_DATA } from "@/store/dummy-store/data";

export default function WeddingsPage() {
  const weddings = PORTFOLIO_DATA.filter(i => i.category === "wedding");

  return (
    <main className="px-6 md:px-10 lg:px-20 py-10">
      <h1 className="font-serif text-3xl mb-6">Wedding Portfolio</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {weddings.map(item => (
          <PortfolioCard
            key={item.id}
            href={`/portfolio/weddings/${item.id}`}
            title={item.title}
            cover={item.cover}
          />
        ))}
      </div>
    </main>
  );
}