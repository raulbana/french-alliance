export interface LevelTestLevel {
  id: string;
  title: string;
  items: string[];
  link: string;
}

const useLevelTest = () => {
  const instructions = {
    steps: [
      {
        number: "01",
        text: "Leia atentamente a descrição de cada nível e selecione aquele que mais se aproxima do seu conhecimento atual.",
      },
      {
        number: "02",
        text: "Clique no nível escolhido para acessar um formulário com questões de compreensão escrita, oral e produção textual.",
      },
      {
        number: "03",
        text: "Após o envio, nossa secretaria entrará em contato para agendar uma entrevista online com um professor da Aliança Francesa de Curitiba. Nessa conversa, você receberá o resultado da produção escrita e oral.",
      },
    ],
    note: "O teste tem caráter indicativo e serve para identificar o módulo mais adequado ao seu nível de francês. A Aliança Francesa não emite certificados ou declarações baseados neste teste. Para comprovação oficial de proficiência, sugerimos os exames TCF, TEF, DELF ou DALF, realizados pela própria Aliança (mais informações na aba Exames Oficiais).",
    price:
      "O investimento para realizar o teste de nível é de R$ 60,00, com pagamento feito online. Em caso de matrícula no módulo vigente, esse valor será descontado do valor total do curso.",
  };

  const levels: LevelTestLevel[] = [
    {
      id: "a1",
      title: "Nível A1:",
      items: [
        "Apresentações pessoais (nome, nacionalidade, profissão, endereço);",
        "Instruções de caminho e preenchimento de formulários;",
        "Gostos, rotina, família e planos;",
        "Relato de fatos passados.",
      ],
      link: "https://forms.gle/a1-teste", // Substitua pelo link real do formulário
    },
    {
      id: "a2",
      title: "Nível A2:",
      items: [
        "Descrição de objetos, hábitos e rotinas;",
        "Comunicação sobre saúde e alimentação;",
        "Apresentação de formação acadêmica e profissional;",
        "Relato de experiências e opiniões sobre viagens, livros, filmes e séries.",
      ],
      link: "https://forms.gle/a2-teste", // Substitua pelo link real do formulário
    },
    {
      id: "b1",
      title: "Nível B1:",
      items: [
        "Narrar histórias e relatar falas;",
        "Expressar opiniões, supor, hipóteses e incertezas;",
        "Aconselhar, recomendar e debater temas cotidianos;",
        "Falar sobre filmes e explicar causas e consequências.",
      ],
      link: "https://forms.gle/b1-teste", // Substitua pelo link real do formulário
    },
    {
      id: "b1plus",
      title: "Nível B1+:",
      items: [
        "Comunicar com clareza e sem repetições;",
        "Situar eventos no passado e propor soluções;",
        "Usar exemplos para ilustrar ideias;",
        "Fazer perguntas e resumir para passar informações;",
        "Opinar sobre arte e participar ativamente de debates.",
      ],
      link: "https://forms.gle/b1plus-teste", // Substitua pelo link real do formulário
    },
  ];

  return { instructions, levels };
};

export default useLevelTest;
