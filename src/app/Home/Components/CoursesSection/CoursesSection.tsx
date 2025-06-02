"use client";
import BorderedCard from "../BorderedCard/BorderedCard";
import useCoursesSection from "./useCoursesSection";

const CoursesSection: React.FC = () => {
  const { coursesCards } = useCoursesSection();

  return (
    <section
      id="courses-section"
      className="flex flex-col min-h-screen justify-center bg-french-blue w-full items-center gap-6 p-6"
    >
      <h2 className="text-3xl mx-7 font-semibold text-french-white">
        Conheça nossos cursos
      </h2>
      <div className="grid grid-cols-3 gap-4 w-full max-w-6xl px-4">
        {coursesCards.map((card, index) => (
          <BorderedCard key={`${card.title}-${index}`} {...card} titleColor="text-french-white" contentColor="text-french-white" borderColor="border-2 border-blue-700" />
        ))}
      </div>
    </section>
  );
};
export default CoursesSection;
