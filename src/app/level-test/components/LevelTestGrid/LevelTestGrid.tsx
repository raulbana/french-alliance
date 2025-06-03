import React from "react";
import LevelTestCard from "../LevelTestCard/LevelTestCard";
import { LevelTestLevel } from "../../useLevelTest";

interface LevelTestGridProps {
  levels: LevelTestLevel[];
}

const LevelTestGrid: React.FC<LevelTestGridProps> = ({ levels }) => (
  <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {levels.map((level) => (
      <LevelTestCard key={level.id} level={level} />
    ))}
  </section>
);

export default LevelTestGrid;
