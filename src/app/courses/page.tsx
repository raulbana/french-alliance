"use client";
import React from "react";
import Image from "next/image";
import useCourses from "./useCourses";
import Button from "../components/Button/Button";

const Courses = () => {
  const { courses } = useCourses();

  return (
    <main className="min-h-screen bg-french-blue py-10 px-2 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-french-white mb-8 text-center">
        Nossos Cursos
      </h1>
      <div className="flex flex-col gap-8 w-full max-w-2xl">
        {courses.map((course) => (
          <div
            key={course.title}
            className="flex flex-col md:flex-row bg-[#232b7a] rounded-2xl border border-french-white p-5 gap-6 shadow-lg"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={180}
              className="object-cover rounded-2xl"
            />
            <div className="flex flex-col flex-1 justify-between">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-french-white mb-1">
                  {course.title}
                </h2>
                <p className="text-sm text-balance md:text-base text-french-white whitespace-pre-line mb-2">
                  {course.description}
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-2">
                <span className="text-xs md:text-sm text-french-white whitespace-pre-line">
                  {course.info}
                </span>
                <Button label={"Inscrever-se"} onClick={() => {}} type="SECONDARY" />                
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Courses;
