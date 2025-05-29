import { useState, useEffect } from "react";

export interface Shortcut {
  id: string;
  label: string;
  sectionId?: string;
  action?: () => void;
  active?: boolean;
}

const initialShortcuts: Shortcut[] = [
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
    sectionId: "courses-section",
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
    sectionId: "events-section",
  },
];

const useNavbar = () => {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>(
    initialShortcuts.map((s) => ({ ...s, active: false }))
  );

  const handleShortcutClick = (shortcut: Shortcut) => {
    if (shortcut.sectionId) {
      const section = document.getElementById(shortcut.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (shortcut.action) {
      shortcut.action();
    }
    setShortcuts((prev) =>
      prev.map((s) => ({
        ...s,
        active: s.id === shortcut.id,
      }))
    );
  };

  useEffect(() => {
    setShortcuts((prev) => {
      return prev.map((s) => ({
        ...s,
        action: handleShortcutClick.bind(null, s),
        active: s.active || false,
      }));
    });
  }, []);

  return {
    shortcuts,
    handleShortcutClick,
  };
};

export default useNavbar;
