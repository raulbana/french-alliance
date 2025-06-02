import ParisImage from "@/assets/why-alliance-paris.png";
import ClassroomImage from "@/assets/why-alliance-classroom.png";

export interface WhyAllianceCard {
  title: string;
  content: string;
}

const useWhyAllianceSection = () => {
  const images = [ParisImage, ClassroomImage];

  const cards: WhyAllianceCard[] = [
    {
      title: "Variedade de cursos",
      content:
        "Opções flexíveis para todos os perfis: cursos presenciais, online, intensivos, temáticos e até programas de intercâmbio, adaptando-se ao seu ritmo e objetivos.",
    },
    {
      title: "Experiência Cultural",
      content:
        "Mais que aulas, proporcionamos uma imersão cultural com eventos, ateliês, viagens e acesso à Culturethèque, conectando você ao universo francófono.",
    },
    {
      title: "Qualidade de Ensino",
      content:
        "Com 80 anos de tradição em Curitiba, somos referência no ensino do francês, com professores experientes, metodologia reconhecida e certificações oficiais.",
    },
  ];

  return { images, cards };
};

export default useWhyAllianceSection;
