import ExamCard from "./components/ExamCard/ExamCard";
import useExams from "./useExams";

const ExamsPage = () => {
  const { exams } = useExams();

  return (
    <main className="min-h-screen bg-white py-10 px-2 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-french-red mb-8 text-center">
        Exames
      </h1>
      <div className="flex flex-col gap-8 w-full max-w-2xl">
        {exams.map((exam) => (
          <ExamCard key={exam.title} exam={exam} />
        ))}
      </div>
    </main>
  );
};

export default ExamsPage;
