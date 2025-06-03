import { ExamInfo } from "../../useExams";

const ExamCard: React.FC<{ exam: ExamInfo }> = ({ exam }) => (
  <div
    className={`bg-white rounded-2xl border-2 ${
      exam.borderColor ?? "border-french-red"
    } p-6 shadow flex flex-col gap-2`}
  >
    <h2 className="text-base md:text-lg font-bold text-french-red mb-1">
      {exam.title}
    </h2>
    <p className="text-sm md:text-base text-french-blue mb-2">
      {exam.description}
    </p>
    <div className="mb-1">
      <span className="font-semibold text-french-blue">Inscrição:</span>
      <div className="text-french-blue text-sm">{exam.inscription}</div>
    </div>
    <div>
      <span className="font-semibold text-french-blue">Exame:</span>
      <div className="text-french-blue text-sm">{exam.exam}</div>
    </div>
  </div>
);

export default ExamCard;
