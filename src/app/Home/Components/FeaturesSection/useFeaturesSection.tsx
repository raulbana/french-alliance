import { BorderlessVerticalCardProps } from "../BorderlessVerticalCard/BorderlessVerticalCard";
import BlogAf from "@/assets/blog af 01.png";
import Cineclube from "@/assets/cineclube 1.png";
import PrixPhoto from "@/assets/prix photo.png";

const useFeaturesSection = () => {
  const featuresCards: BorderlessVerticalCardProps[] = [
    {
      title: "Blog AF Curitiba",
      content:
        "Fique por dentro das novidades culturais de Curitiba e França através do nosso site. Por aqui você explora eventos, shows, exposições e atrações culturais, c’est magnifique!",
      imageUrl: BlogAf,
      onClick: () => console.log("Clicou em: Blog AF Curitiba"),
    },
    {
      title: "Cineclube AF Curitiba",
      content:
        "Imagina experimentar um pedacinho da França aqui em Curitiba? Conheça o cineclube, um evento gratuito que abrange diversas obras cinematográficas francesas. Confira a nossa programação.",
      imageUrl: Cineclube,
      onClick: () => console.log("Clicou em: Cineclube AF Curitiba"),
    },
    {
      title: "Prix Photo 2025",
      content:
        "Vem aí a 14ª edição do Prix Photo Aliança Francesa! Um dos concursos mais importantes da fotografia contemporânea no Brasil está com inscrições abertas, não perca!",
      imageUrl: PrixPhoto,
      onClick: () => console.log("Clicou em: Prix Photo 2025"),
    },
  ];
  return { featuresCards };
};

export default useFeaturesSection;
