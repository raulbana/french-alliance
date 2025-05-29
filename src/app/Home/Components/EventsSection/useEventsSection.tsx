import { BorderlessVerticalCardProps } from "../BorderlessVerticalCard/BorderlessVerticalCard";
import FrancePlaceHolder from "../../../../assets/france-placeholder.jpeg";

const useEventsSection = () => {
  const eventsCards: BorderlessVerticalCardProps[] = [
    {
      title: "Blog AF Curitiba",
      content:
        "Fique por dentro das novidades culturais de Curitiba e França através do nosso site. Por aqui você explora eventos, shows, exposições e atrações culturais, c’est magnifique!",
      imageUrl: FrancePlaceHolder,
      onClick: () => console.log("Clicou em: Blog AF Curitiba"),
    },
    {
      title: "Cineclube AF Curitiba",
      content:
        "Imagina experimentar um pedacinho da França aqui em Curitiba? Conheça o cineclube, um evento gratuito que abrange diversas obras cinematográficas francesas. Confira a nossa programação.",
      imageUrl: FrancePlaceHolder,
      onClick: () => console.log("Clicou em: Cineclube AF Curitiba"),
    },
    {
      title: "Prix Photo 2025",
      content:
        "Vem aí a 14ª edição do Prix Photo Aliança Francesa! Um dos concursos mais importantes da fotografia contemporânea no Brasil está com inscrições abertas, não perca!",
      imageUrl: FrancePlaceHolder,
      onClick: () => console.log("Clicou em: Prix Photo 2025"),
    },
  ];
  return { eventsCards };
};

export default useEventsSection;
