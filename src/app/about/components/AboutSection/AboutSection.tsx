import React from "react";
import useAboutContent from "../../hooks/useAboutContent";

const AboutSection = () => {
  const { aboutText } = useAboutContent();
  return (
    <section className="w-full bg-french-blue py-10 px-2 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl text-french-white font-bold text-center mb-4">
        Sobre nós
      </h2>
      <div className="text-base md:text-lg text-center text-french-white max-w-4xl">
        {aboutText}
      </div>
    </section>
  );
};

export default AboutSection;
