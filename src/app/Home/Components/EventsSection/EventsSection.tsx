"use client";
import React from "react";
import BorderedCard from "../BorderedCard/BorderedCard";
import useEventsSection from "./useEventsSection";

const EventsSection: React.FC = () => {
  const { events } = useEventsSection();

  return (
    <section
      id="events-section"
      className="flex flex-col justify-center items-center gap-6 p-6 bg-white rounded-xl my-8 max-w-4xl m-auto"
    >
      <h2 className="text-3xl font-bold text-center text-french-red mb-6">
        Eventos
      </h2>
      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
        {events.map((event, index) => (
          <BorderedCard key={`${event.title}-${index}`} {...event} titleColor="text-french-blue" extraClasses="text-center" borderColor="border-french-red border-2" />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
