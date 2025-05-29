"use client";
import BorderedCard from "../BorderedCard/BorderedCard";
import useCoursesSection from "./useCoursesSection";

const CoursesSection: React.FC = () => {
  const { coursesCards } = useCoursesSection();

  return (
    <section className="flex flex-col min-h-screen justify-center bg-french-blue w-full items-center gap-6 p-6">
      <h2 className="text-3xl mx-7 font-semibold text-french-white">
        Conheça nossos cursos
      </h2>
      <div className="grid grid-cols-3 gap-4 w-full max-w-6xl px-4">
        {coursesCards.map((card, index) => (
          <BorderedCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};
export default CoursesSection;
