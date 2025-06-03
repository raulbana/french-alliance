"use client";
import React from "react";
import LevelTestHeader from "./components/LevelTestHeader/LevelTestHeader";
import LevelTestGrid from "./components/LevelTestGrid/LevelTestGrid";
import useLevelTest from "./useLevelTest";

const LevelTestPage = () => {
  const { instructions, levels } = useLevelTest();

  return (
    <main className="min-h-screen bg-french-blue py-10 px-2 flex flex-col items-center">
      <LevelTestHeader instructions={instructions} />
      <LevelTestGrid levels={levels} />
    </main>
  );
};

export default LevelTestPage;
