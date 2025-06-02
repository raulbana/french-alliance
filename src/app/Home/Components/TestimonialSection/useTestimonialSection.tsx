import FernandaImg from "@/assets/testimonial-fernanda.png";
import LucasImg from "@/assets/testimonial-lucas.png";
import IsadoraImg from "@/assets/testimonial-isadora.png";
import { StaticImageData } from "next/image";

export interface TestimonialProps {
  name: string;
  text: string;
  stars: number;
  image: string | StaticImageData;
}

const useTestimonialsSection = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Fernanda Souza",
      text: `“Desde que comecei a estudar na Aliança Francesa, me apaixonei não só pela língua, mas também pela cultura e pelo ambiente acolhedor. Cada aula é uma nova descoberta, e sinto que estou cada vez mais perto de realizar meu sonho de falar francês fluentemente. A Aliança virou meu cantinho favorito da semana!”`,
      stars: 5,
      image: FernandaImg,
    },
    {
      name: "Lucas Silva Filho",
      text: `“A Aliança Francesa me mostrou que aprender francês pode ser leve, divertido e inspirador. Os professores são incríveis e me sinto motivado a cada aula!”`,
      stars: 5,
      image: LucasImg,
    },
    {
      name: "Isadora Cunha",
      text: `“Estudar na Aliança é como fazer uma viagem à França sem sair do Brasil. Amo cada detalhe: as aulas, os eventos culturais e o carinho com que tudo é feito.”`,
      stars: 5,
      image: IsadoraImg,
    },
  ];

  return { testimonials };
};

export default useTestimonialsSection;
