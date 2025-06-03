import React from "react";
import useAboutContent from "../../hooks/useAboutContent";
import AboutImage from "@/assets/af-curitiba-fachada.jpeg";
import Image from "next/image";

const HistorySection = () => {
  const { historyText } = useAboutContent();
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 bg-french-white py-10 px-2">
      <div className="flex-1 max-w-2xl">
        <h2 className="text-2xl md:text-3xl text-french-red font-bold text-center md:text-left mb-4">
          Nossa História
        </h2>
        <div className="text-base md:text-lg text-center md:text-left text-french-blue whitespace-pre-line">
          {historyText}
        </div>
      </div>
      <div className="flex-1 flex max-w-2xl">
        <Image
          src={AboutImage}
          alt="Fachada da Aliança Francesa"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
};

export default HistorySection;
