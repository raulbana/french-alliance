export interface ExamInfo {
  title: string;
  subtitle: string;
  description: string;
  inscription: React.ReactNode;
  exam: React.ReactNode;
  borderColor?: string;
}

const useExams = () => {
  const exams: ExamInfo[] = [
    {
      title: "DELF/DALF - Certificação de Proficiência em Francês",
      subtitle: "DELF/DALF - Certificação de Proficiência em Francês",
      description:
        "O DELF (Diploma de Estudos em Língua Francesa) e o DALF (Diploma Aprofundado de Língua Francesa) são diplomas oficiais do Ministério da Educação da França, reconhecidos internacionalmente. Certificam os níveis de proficiência do A1 ao C2 do CECR e podem ser usados para fins pessoais, acadêmicos, profissionais ou de imigração.",
      inscription: (
        <>Acesse o calendário de sessões através do nosso Whatsapp.</>
      ),
      exam: (
        <>
          Local, data, horário e informações para o dia do exame serão
          informados por e-mail, 15 dias antes da prova.
        </>
      ),
      borderColor: "border-french-red",
    },
    {
      title: "TCF - Teste de Conhecimento do Francês",
      subtitle: "TCF - Teste de Conhecimento do Francês",
      description:
        "O TCF é um exame oficial de proficiência em francês, criado pela Câmara de Comércio e Indústria de Paris e reconhecido pelo Ministério da Educação Nacional da França. Destinado a não francófonos com 16 anos ou mais, avalia o domínio do idioma do nível A1 ao C2 (CECR).",
      inscription: (
        <ul className="list-disc ml-5">
          <li>
            Via telefone 0800 002 3363 ou e-mail contato@afcuritiba.com.br.
          </li>
          <li>Provas aplicadas de segunda a sexta, em horário comercial.</li>
        </ul>
      ),
      exam: (
        <>
          Informações do exame serão informadas por e-mail, entre em contato
          pelo Whatsapp.
        </>
      ),
      borderColor: "border-french-red",
    },
    {
      title: "e-TEF Canada",
      subtitle: "e-TEF Canada",
      description:
        "O e-TEF Canada é um teste 100% digital de proficiência em francês, criado pela Câmara de Comércio e Indústria de Paris (CCI Paris Île-de-France), reconhecido pelo governo canadense (CIC) para fins de imigração e cidadania, incluindo processos para o Quebec.",
      inscription: (
        <ul className="list-disc ml-5">
          <li>
            Via telefone 0800 002 3363 ou e-mail contato@afcuritiba.com.br
          </li>
          <li>
            Convocação enviada por e-mail com 5 dias úteis de antecedência.
          </li>
        </ul>
      ),
      exam: (
        <>
          Informações do exame serão informadas por e-mail, entre em contato
          pelo Whatsapp.
        </>
      ),
      borderColor: "border-french-red",
    },
  ];

  return {
    exams,
  };
};

export default useExams;
