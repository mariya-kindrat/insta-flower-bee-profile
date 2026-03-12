import PortfolioCard from "@/components/PortfolioCard";
import BackButton from "@/components/BackButton";
import { PORTFOLIO_DATA } from "@/store/dummy-store/data";

const BouquetsPage = () => {
  const bouquets = PORTFOLIO_DATA.filter((i) => i.category === "bouquet");
  return (
    <main className="px-6 md:px-10 lg:px-20 py-10 max-w-8xl mx-auto">
      <BackButton href="/portfolio" label="Back to Portfolio" className="mb-8" />
      <h1 className="font-serif text-4xl mb-10 text-center">Bouquets & Arrangements</h1>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {bouquets.map((item) => (
          <PortfolioCard
            key={item.id}
            href={`/portfolio/bouquets/${item.id}`}
            title={item.title}
            cover={item.cover}
          />
        ))}
      </div>
    </main>
  );
};

export default BouquetsPage;