"use client";
import React from "react";
import { ArrowRight } from "phosphor-react";
import TestimonialCard from "./components/TestimonialCard";
import useTestimonialsSection from "./useTestimonialSection";

const TestimonialsSection: React.FC = () => {
  const { testimonials } = useTestimonialsSection();

  return (
    <section className="flex flex-col items-center w-full my-12">
      <h2 className="text-3xl font-bold text-french-red mb-8 text-center">
        Depoimentos
      </h2>
      <div className="flex flex-row gap-8 justify-center w-full">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
        <div className="flex items-center">
          <button
            type="button"
            className="rounded-full border-2 border-french-red p-2 hover:bg-french-red hover:text-white transition"
            aria-label="Próximo depoimento"
          >
            <ArrowRight size={28} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
