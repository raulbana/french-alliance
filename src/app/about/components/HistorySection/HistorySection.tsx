import React from "react";
import useAboutContent from "../../hooks/useAboutContent";

const HistorySection = () => {
  const { historyText } = useAboutContent();
  return (
    <section className="w-full max-w-3xl mx-auto mb-8">
      <h2 className="text-2xl md:text-3xl text-french-red font-bold text-center mb-4">
        Nossa História
      </h2>
      <div className="text-base md:text-lg text-center text-french-blue whitespace-pre-line">
        {historyText}
      </div>
    </section>
  );
};

export default HistorySection;
