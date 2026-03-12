import PortfolioCard from "@/components/PortfolioCard";
import BackButton from "@/components/BackButton";
import { PORTFOLIO_DATA } from "@/store/dummy-store/data";

const EventsPage = () => {
  const events = PORTFOLIO_DATA.filter((i) => i.category === "event");

  return (
    <main className="px-6 md:px-10 lg:px-20 py-10 max-w-8xl mx-auto">
      <BackButton href="/portfolio" label="Back to Portfolio" className="mb-8" />
      <h1 className="font-serif text-4xl mb-10 text-center">Events</h1>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((item) => (
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
};

export default EventsPage;