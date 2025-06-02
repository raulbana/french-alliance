import DalfImg from "@/assets/exam-dalf.png";
import TcfImg from "@/assets/exam-tcf.png";
import EtefImg from "@/assets/exam-etef.png";
import { StaticImageData } from "next/image";

export interface ExamCard {
  title: string;
  description: string;
  image: string | StaticImageData;
  titleColor?: string;
}

const useExamsSection = () => {
  const exams: ExamCard[] = [
    {
      title: "DELF/DALF",
      description:
        "Diplomas oficiais e internacionais que certificam seu nível de proficiência em francês, do básico ao fluente, reconhecidos para estudo, trabalho ou imigração.",
      image: DalfImg,
      titleColor: "text-french-blue",
    },
    {
      title: "TCF",
      description:
        "Teste oficial de proficiência em francês para não francófonos a partir de 16 anos, que avalia o nível do candidato de A1 a C2 segundo o CECR, com fins pessoais, acadêmicos ou profissionais.",
      image: TcfImg,
      titleColor: "text-french-blue",
    },
    {
      title: "e-TEF",
      description:
        "Teste oficial de proficiência em francês, reconhecido pelo governo canadense para processos de cidadania e imigração, com validade de dois anos e possibilidade de repetição a cada 30 dias.",
      image: EtefImg,
      titleColor: "text-french-blue",
    },
  ];

  return { exams };
};

export default useExamsSection;
