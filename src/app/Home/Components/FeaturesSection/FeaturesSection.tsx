"use client";

import BorderlessVerticalCard from "../BorderlessVerticalCard/BorderlessVerticalCard";
import useFeaturesSection from "./useFeaturesSection";

const FeaturesSection: React.FC = () => {
  const { featuresCards } = useFeaturesSection();

  return (
    <section
      id="features-section"
      className="flex flex-col justify-center border-2 gap-2 p-6 border-french-blue rounded-xl"
    >
      <h2 className="text-3xl mx-auto font-semibold text-french-red">
        Participe!
      </h2>
      <div className="grid grid-cols-3 gap-4 w-full max-w-6xl px-4">
        {featuresCards.map((card, index) => (
          <BorderlessVerticalCard key={`${card.title}-${index}`} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
