import React from "react";
import Button from "@/app/components/Button/Button";
import { LevelTestLevel } from "../../useLevelTest";

interface LevelTestCardProps {
  level: LevelTestLevel;
}

const LevelTestCard: React.FC<LevelTestCardProps> = ({ level }) => (
  <div className="bg-[#232b7a] rounded-2xl border border-french-white p-6 flex flex-col gap-4 shadow-lg">
    <h3 className="text-xl font-bold text-french-white mb-2">{level.title}</h3>
    <ul className="text-french-white text-base flex flex-col gap-1 mb-4 list-disc list-inside">
      {level.items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    <div className="flex flex-1 justify-end">
      <Button
        label="Fazer teste"
        type="SECONDARY"
        onClick={() => window.open(level.link, "_blank")}
        className="self-end"
      />
    </div>
  </div>
);

export default LevelTestCard;
