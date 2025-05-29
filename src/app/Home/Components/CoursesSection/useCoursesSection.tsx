import { BorderedCardProps } from "../BorderedCard/BorderedCard";
import FrancePlaceHolder from "../../../../assets/france-placeholder.jpeg";

const useCoursesSection = () => {

  const coursesCards: BorderedCardProps[] = [
    {
      title: "Curso Regular",
      content:
        "Aprenda francês no seu ritmo. Nosso curso regular oferece uma formação flexível ao seu dia a dia, com atividades dinâmicas e equilibradas, perfeito para quem quer aprender sem abrir mão da rotina.",
      imageUrl: FrancePlaceHolder,
      onClick: () => console.log("Clicou em: Curso Regular"),
    },
    {
      title: "Curso de Conversação",
      content:
        "Quer ganhar confiança no francês? Participe da conversação, ideal para você que tem um domínio intermediário da língua e deseja aprimorar na prática. Nosso curso foca nas situações do dia a dia, em um ambiente acolhedor e descontraído.",
      imageUrl: FrancePlaceHolder,
      onClick: () => console.log("Clicou em: Curso de Conversação"),
    },
    {
      title: "Traduction",
      content:
        "Um curso feito para quem quer ir além do básico. Domine a tradução de textos literários e técnicos e mergulhe nas nuances da língua francesa. Uma ótima oportunidade para quem atua com comunicação, turismo, arte, literatura, moda, música e muito mais!",
      imageUrl: FrancePlaceHolder,
      onClick: () => console.log("Clicou em: Traduction"),
    },
    {
      title: "Enfants",
      content:
        "Aprender um novo idioma desde cedo faz toda a diferença no futuro! Nossos cursos para crianças são lúdicos, interativos e estimulantes, com turmas a partir dos 6 anos de idade. Esse é o primeiro passo para um futuro sem fronteiras!",
      imageUrl: FrancePlaceHolder,
      onClick: () => console.log("Clicou em: Enfants"),
    },
    {
      title: "Ados",
      content:
        "As oportunidades são bem maiores quando se domina uma segunda língua! Nosso curso para adolescentes é ideal para quem deseja estar um passo à frente.",
      imageUrl: FrancePlaceHolder,
      onClick: () => console.log("Clicou em: Ados"),
    },
    {
      title: "Intensivo",
      content:
        "Esse é a melhor opção para você que tem pouco tempo mas muita vontade de aprender! Avance nos conhecimentos em francês com agilidade.",
      imageUrl: FrancePlaceHolder,
      onClick: () => console.log("Clicou em: Intensivo"),
    },
  ];

  return { coursesCards };
};

export default useCoursesSection;
