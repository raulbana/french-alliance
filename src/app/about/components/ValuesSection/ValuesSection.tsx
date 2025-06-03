import React from "react";
import useAboutContent from "../../hooks/useAboutContent";

const ValuesSection = () => {
  const { values } = useAboutContent();
  return (
    <section className="w-full max-w-3xl mx-auto mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-french-red">
        Valores
      </h2>
      <div className="bg-french-red rounded-2xl p-6 flex flex-col gap-4">
        {values.map((value) => (
          <div key={value.title}>
            <span className="font-bold text-white">{value.title}:</span>{" "}
            <span className="text-white">{value.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
