import { BorderedCardProps } from "../BorderedCard/BorderedCard";

import Evento80Anos from "@/assets/EVENTOS-80 ANOS.jpg";
import EventoPrudente from "@/assets/EVENTOS-PRUDENTE.jpg";
import EventoFrancofonia from "@/assets/EVENTOS-FRANCOFONIA.jpg";
import EventoChandeleur from "@/assets/crepes eventos.jpg";
import Evento14Juillet from "@/assets/14 de julho eventos fete.jpg";
import EventoAtelier from "@/assets/EVENTOS-ARELIÊ ONLINE.jpg";

const useEventsSection = () => {
  const events: BorderedCardProps[] = [
    {
      title: "80 anos da Aliança Francesa",
      content:
        "Celebre os 80 anos da Aliança Francesa em Curitiba com a gente.",
      imageUrl: Evento80Anos,
    },
    {
      title: "Prudente Cultural",
      content: "Participe da Prudente Cultural neste sábado (25).",
      imageUrl: EventoPrudente,
    },
    {
      title: "Francofonia",
      content: "Confira a semana da Francofonia em 2025.",
      imageUrl: EventoFrancofonia,
    },
    {
      title: "Chandeleur",
      content: "Conheça a festa onde se come crepes!",
      imageUrl: EventoChandeleur,
    },
    {
      title: "Julho à la Française",
      content: "Joyeuse Fête Nationale 14 Juillet !",
      imageUrl: Evento14Juillet,
    },
    {
      title: "Atelier",
      content: "Aqueça o seu francês nos ateliês online de verão.",
      imageUrl: EventoAtelier,
    },
  ];

  return { events };
};

export default useEventsSection;
