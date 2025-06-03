"use client";
import React from "react";
import AboutSection from "./components/AboutSection/AboutSection";
import HistorySection from "./components/HistorySection/HistorySection";
import MissionVisionSection from "./components/MissionValueSection/MissionValueSection";

const AboutPage = () => (
  <main className="min-h-screen bg-french-white flex flex-col items-center">
    <AboutSection />
    <HistorySection />
    <MissionVisionSection />
  </main>
);

export default AboutPage;
