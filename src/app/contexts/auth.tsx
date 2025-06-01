"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { User } from "../types/user";

interface LoginData {
  email: string;
  password: string;
}

type AuthContextType = {
  user: User | null;
  login: (userData: LoginData) => void;
  logout: () => void;
  isLoggedIn: boolean;
  register: (userData: User) => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_STORAGE_KEY = "auth_user";
const USERS_STORAGE_KEY = "auth_users";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    const parsedUser = storedUser ? (JSON.parse(storedUser) as User) : null;
    setUser(parsedUser);
    setIsLoggedIn(!!parsedUser);
    setLoading(false);

    const handleStorage = () => {
      const storedUser = localStorage.getItem(USER_STORAGE_KEY);
      const parsedUser = storedUser ? (JSON.parse(storedUser) as User) : null;
      setUser(parsedUser);
      setIsLoggedIn(!!parsedUser);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const login = async (userData: LoginData) => {
    const existingUsers = await JSON.parse(
      localStorage.getItem(USERS_STORAGE_KEY) ?? "[]"
    ) as User[];

    const foundUser = existingUsers.find(
      (user) =>
        user.email === userData.email && user.password === userData.password
    );

    if (!foundUser) {
      throw new Error("Invalid email or password");
    }

    setUser(foundUser);
    setIsLoggedIn(true);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(foundUser));
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem(USER_STORAGE_KEY);
  };

  const register = (userData: User) => {
    const existingUsers = JSON.parse(
      localStorage.getItem(USERS_STORAGE_KEY) ?? "[]"
    ) as User[];

    const userExists = existingUsers.some(
      (user) => user.email === userData.email
    );

    if (userExists) {
      throw new Error("User already exists");
    }

    existingUsers.push(userData);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(existingUsers));
  };

  const contextValue = useMemo(
    () => ({
      user,
      login,
      logout,
      isLoggedIn,
      register,
      loading,
    }),
    [user, isLoggedIn, loading]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
