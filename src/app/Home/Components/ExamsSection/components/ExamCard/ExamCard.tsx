import React from "react";
import Image from "next/image";
import { ExamCard as ExamCardType } from "../../useExamsSection";

const ExamCard: React.FC<{ exam: ExamCardType }> = ({ exam }) => (
  <div className="flex flex-col items-center bg-french-white rounded-2xl text-center p-6 w-full max-w-xs shadow-sm">
    <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
      <Image
        src={exam.image}
        alt={exam.title}
        width={112}
        height={112}
        className="object-cover w-full h-full"
      />
    </div>
    <h3
      className={`text-lg font-bold mb-2 ${
        exam.titleColor ?? "text-french-blue"
      }`}
    >
      {exam.title}
    </h3>
    <p className="text-sm text-center">{exam.description}</p>
  </div>
);

export default ExamCard;
