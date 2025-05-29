import Image from "next/image";
import React from "react";
import AFRed from "../../assets/af-red.png";
import EventsSection from "./Components/EventsSection/EventsSection";
import CoursesSection from "./Components/CoursesSection/CoursesSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-5 gap-12">
      <div className="flex w-full items-center justify-center p-4">
        <Image src={AFRed} width={96} height={96} alt="Aliança Francesa" />
        <h1 className="text-5xl text-french-red font-bold">Aliança Francesa</h1>
      </div>
      <EventsSection />
      <CoursesSection />
    </div>
  );
};

export default Home;
