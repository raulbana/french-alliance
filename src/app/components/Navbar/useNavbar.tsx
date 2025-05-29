interface Shortcut {
  id: string;
  label: string;
  action: () => void;
}

const useNavbar = () => {
  const shortcuts: Shortcut[] = [
    {
      id: "about-us",
      label: "Sobre nós",
      action: () => console.log("Navigating to Sobre nós"),
    },
    {
      id: "agenda",
      label: "Agenda",
      action: () => console.log("Navigating to Agenda"),
    },
    {
      id: "courses",
      label: "Cursos",
      action: () => console.log("Navigating to Cursos"),
    },
    {
      id: "exams",
      label: "Exames",
      action: () => console.log("Navigating to Exames"),
    },
    {
      id: "level-test",
      label: "Teste de nível",
      action: () => console.log("Navigating to Teste de nível"),
    },
    {
      id: "events",
      label: "Eventos",
      action: () => console.log("Navigating to Eventos"),
    },
  ];

  return { shortcuts };
};

export default useNavbar;
