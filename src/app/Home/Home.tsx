import Image from "next/image";
import React from "react";
import AFRed from "../../assets/af-red.png";
import FeaturesSection from "./Components/FeaturesSection/FeaturesSection";
import CoursesSection from "./Components/CoursesSection/CoursesSection";
import WhyAllianceSection from "./Components/WhyAllianceSection/WhyAllianceSection";
import TestimonialsSection from "./Components/TestimonialSection/TestimonialSection";
import ExamsSection from "./Components/ExamsSection/ExamsSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen gap-12 pt-5">
      <div className="flex w-full items-center justify-center p-4">
        <Image src={AFRed} width={96} height={96} alt="Aliança Francesa" />
        <h1 className="text-5xl text-french-red font-bold">Aliança Francesa</h1>
      </div>
      <FeaturesSection />
      <WhyAllianceSection />
      <ExamsSection />
      <TestimonialsSection />
      <CoursesSection />
    </div>
  );
};

export default Home;
