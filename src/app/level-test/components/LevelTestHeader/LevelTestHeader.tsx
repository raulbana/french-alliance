import React from "react";

interface LevelTestHeaderProps {
  instructions: {
    steps: { number: string; text: string }[];
    note: string;
    price: string;
  };
}

const LevelTestHeader: React.FC<LevelTestHeaderProps> = ({ instructions }) => (
  <section className="w-full max-w-3xl mx-auto mb-8">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-french-white mb-4">
      Teste de nível
    </h1>
    <div className="bg-white border-2 border-french-red rounded-2xl p-6 mb-2">
      <h2 className="text-base md:text-lg font-semibold text-center text-french-blue mb-4">
        Para avaliar seu nível de francês, siga as instruções abaixo:
      </h2>
      <ol className="flex flex-col gap-2 mb-4">
        {instructions.steps.map((step) => (
          <li key={step.number} className="flex gap-2 items-start">
            <span className="font-bold text-french-red text-lg min-w-[2em]">
              {step.number}
            </span>
            <span className="text-french-blue text-base">{step.text}</span>
          </li>
        ))}
      </ol>
      <div className="text-xs text-french-blue mb-2">{instructions.note}</div>
      <div className="text-xs text-french-blue font-semibold">
        {instructions.price}
      </div>
    </div>
  </section>
);

export default LevelTestHeader;
