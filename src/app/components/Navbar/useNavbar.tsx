import { useAuth } from "@/app/contexts/auth";
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
    action: () => (window.location.href = "/about"),
  },
  {
    id: "courses",
    label: "Cursos",
    action: () => (window.location.href = "/courses"),
  },
  {
    id: "exams",
    label: "Exames",
    action: () => (window.location.href = "/exams"),
  },
  {
    id: "level-test",
    label: "Teste de nível",
    action: () => (window.location.href = "/level-test"),
  },
  {
    id: "events",
    label: "Eventos",
    action: () => (window.location.href = "/events"),
  },
];

const useNavbar = () => {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>(
    initialShortcuts.map((s) => ({ ...s, active: false }))
  );

  const onNavigateToHome = () => {
    window.location.href = "/";
  };

  const { isLoggedIn, user, loading, logout } = useAuth();

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

  const navigateToLogin = () => {
    window.location.href = "/authentication/login";
  };

  return {
    shortcuts,
    handleShortcutClick,
    isLoggedIn,
    navigateToLogin,
    user,
    loading,
    logout,
    onNavigateToHome,
  };
};

export default useNavbar;
