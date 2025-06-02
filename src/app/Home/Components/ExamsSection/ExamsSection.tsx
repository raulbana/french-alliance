"use client";
import React from "react";
import useExamsSection from "./useExamsSection";
import ExamCard from "./components/ExamCard/ExamCard";

const ExamsSection: React.FC = () => {
  const { exams } = useExamsSection();

  return (
    <section className="flex flex-col items-center w-full my-12">
      <h2 className="text-3xl font-bold text-french-red mb-8 text-center">
        Exames e Certificações
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {exams.map((exam) => (
          <ExamCard key={exam.title} exam={exam} />
        ))}
      </div>
    </section>
  );
};

export default ExamsSection;
