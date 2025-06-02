import React from "react";
import Image from "next/image";
import { Star } from "phosphor-react";
import { TestimonialProps } from "../useTestimonialSection";

interface TestimonialCardProps {
  testimonial: TestimonialProps;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="flex flex-col items-center border-2 g border-gray-500 rounded-2xl p-6 bg-french-white w-full max-w-xs min-h-[340px] shadow-sm">
    <div className="flex items-center gap-4 mb-2">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={80}
        height={80}
        className="rounded-full"
      />
      <div className="flex flex-col items-center">
        <span className="font-semibold text-french-blue text-lg text-center">
          {testimonial.name}
        </span>
        <div className="flex flex-row gap-1 mt-1">
          {[...Array(testimonial.stars)].map((_, i) => (
            <Star
              key={`${testimonial.name}-star-${i}`}
              size={20}
              weight="fill"
              className="text-yellow-400"
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-sm text-french-blue text-center mt-2">
      {testimonial.text}
    </p>
  </div>
);

export default TestimonialCard;
