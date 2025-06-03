import React from "react";
import useAboutContent from "../../hooks/useAboutContent";

const MissionVisionValuesSection = () => {
  const { missionText, visionText, values } = useAboutContent();

  return (

    <section className="w-3/4 flex flex-col md:flex-row gap-8 py-10 px-2">
      <div className="flex-1 flex flex-col gap-8">
        <div className="border-2 border-french-red rounded-2xl bg-white p-6 flex flex-col items-center">
          <h3 className="text-xl font-bold text-french-red mb-2">Missão</h3>
          <p className="text-base text-french-blue text-center whitespace-pre-line">
            {missionText}
          </p>
        </div>
        <div className="border-2 flex-1 border-french-red rounded-2xl bg-white p-6 flex flex-col items-center">
          <h3 className="text-xl font-bold text-french-red mb-2">Visão</h3>
          <p className="text-base text-french-blue text-center whitespace-pre-line">
            {visionText}
          </p>
        </div>
      </div>
      <div className="flex-1 border-2 border-french-red rounded-2xl bg-white p-6 flex flex-col items-center">
        <h3 className="text-xl font-bold text-french-red mb-4">Valores</h3>
        <ul className="flex flex-col gap-2 w-full">
          {values.map((value) => (
            <li key={value.title}>
              <span className="font-bold text-french-red">{value.title}:</span>
              <span className="text-french-blue">{value.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MissionVisionValuesSection;
