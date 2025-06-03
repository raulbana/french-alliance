"use client";
import React from "react";
import AboutSection from "./components/AboutSection/AboutSection";
import HistorySection from "./components/HistorySection/HistorySection";
import MissionVisionSection from "./components/MissionValueSection/MissionValueSection";
import ValuesSection from "./components/ValuesSection/ValuesSection";

const AboutPage = () => (
  <main className="min-h-screen bg-french-white py-10 px-2 flex flex-col items-center">
    <AboutSection />
    <HistorySection />
    <MissionVisionSection />
    <ValuesSection />
  </main>
);

export default AboutPage;
