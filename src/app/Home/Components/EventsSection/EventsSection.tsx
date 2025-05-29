"use client";

import BorderlessVerticalCard from "../BorderlessVerticalCard/BorderlessVerticalCard";
import useEventsSection from "./useEventsSection";

const EventsSection: React.FC = () => {
  const { eventsCards } = useEventsSection();

  return (
    <section
      id="events-section"
      className="flex flex-col justify-center border-2 gap-2 p-6 border-french-blue rounded-xl"
    >
      <h2 className="text-3xl mx-7 font-semibold text-french-red">
        Participe!
      </h2>
      <div className="grid grid-cols-3 gap-4 w-full max-w-6xl px-4">
        {eventsCards.map((card, index) => (
          <BorderlessVerticalCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
