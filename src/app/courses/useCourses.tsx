import CursoRegular from "@/assets/curso_regular_alt.png";
import CursoConversacao from "@/assets/curso_conversacao_alt.png";
import CursoArteLiteratura from "@/assets/curso de arte e literatura.png";

const useCourses = () => {
  const courses = [
    {
      title: "Curso Regular",
      description:
        "Os cursos regulares de francês têm uma carga total de 54 horas, complementadas por 6 horas extras dedicadas a atividades como aulas de revisão individuais e em grupo, além de consultorias para quem deseja estudar em países francófonos.\n\nO objetivo é oferecer uma formação completa e equilibrada, que permita ao aluno desenvolver todas as habilidades do idioma de forma prática, com uma carga horária semanal flexível, facilitando a conciliação com outras\natividades do dia a dia.",
      info: "Informações: 1 módulo = 54h/aula\nDuração de 3 meses",
      image: CursoRegular,
    },
    {
      title: "Curso de Conversação",
      description:
        "O curso de Conversação com o Professor Odary é ideal para alunos a partir do nível intermediário (B1) que querem aprimorar a fluência em francês de forma prática e focada no cotidiano e no ambiente profissional.\n\nCom aulas temáticas e dinâmicas, você vai praticar expressões essenciais, melhorar a pronúncia e o ritmo da fala, além de superar bloqueios e ganhar confiança para se comunicar com naturalidade e segurança.",
      info: "Informações: 1 módulo = 9h/aula",
      image: CursoConversacao,
    },
    {
      title: "Curso de Arte e Literatura Francesa",
      description:
        "Você vai explorar os principais acontecimentos artísticos e mergulhar em trechos literários fundamentais do período estudado.\n\nAo longo do semestre, serão lidas e discutidas obras cuidadosamente selecionadas, promovendo reflexões sobre o contexto histórico, estético e cultural de cada uma.",
      info: "Informações: 1 módulo = 32h/aula\nDuração de 3 meses",
      image: CursoArteLiteratura,
    },
  ];
  return { courses };
};

export default useCourses;
