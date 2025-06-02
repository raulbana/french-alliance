"use client";
import React from "react";
import Image from "next/image";
import useWhyAllianceSection from "./useWhyAllianceSection";

const WhyAllianceSection: React.FC = () => {
  const { images, cards } = useWhyAllianceSection();

  return (
    <section className="w-full h-full bg-french-blue py-12 px-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-french-white mb-8 font-poppins">
        Por que escolher a Aliança Francesa?
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        <div className="flex flex-col gap-6 flex-1 items-end justify-start">
          <div className="rounded-2xl overflow-hidden h-48 w-80">
            <Image
              src={images[0]}
              alt="Paris"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-48 w-80">
            <Image
              src={images[1]}
              alt="Sala de aula"
              className="object-cover w-full h-full"
              width={400}
              height={180}
            />
          </div>
        </div>
        <div className="w-0.5 bg-french-red"></div>
        <div className="flex-1 flex flex-col gap-6 justify-center">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border-2 border-french-white rounded-2xl p-5 bg-french-blue"
            >
              <h3 className="text-lg font-bold text-french-white mb-2 font-poppins">
                {card.title}
              </h3>
              <p className="text-base text-french-white font-work-sans">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAllianceSection;
