import PortfolioCard from "@/components/PortfolioCard";
import BackButton from "@/components/BackButton";
import { PORTFOLIO_DATA } from "@/store/dummy-store/data";

export default function EventsPage() {
  const events = PORTFOLIO_DATA.filter(i => i.category === "event");

  return (
    <main className="px-6 md:px-10 lg:px-20 py-10">
      <BackButton href="/portfolio" label="Back to Portfolio" className="mb-6" />
      <h1 className="font-serif text-3xl mb-6">Events</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map(item => (
          <PortfolioCard
            key={item.id}
            href={`/portfolio/events/${item.id}`}
            title={item.title}
            cover={item.cover}
          />
        ))}
      </div>
    </main>
  );
}