"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "../../schema/registerSchema";
import { phoneMask } from "@/app/utils/phoneMask";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/contexts/auth";
import { User } from "@/app/types/user";
import { v4 as uuidv4 } from "uuid";

const useRegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
  });

  const { register: signIn } = useAuth();

  const phoneValue = watch("phone");

  useEffect(() => {
    if (phoneValue) {
      const masked = phoneMask(phoneValue);
      setValue("phone", masked);
    }
  }, [phoneValue, setValue]);

  const onSubmit = (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      const signInBody: User = {
        id: uuidv4(),
        name: data.fullName,
        email: data.email,
        password: data.password,
        birthDate: data.birthDate,
      };
      signIn(signInBody);
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      setError(true);
    } finally {
      setIsLoading(false);
      window.location.href = "/authentication/login";
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
    setIsLoading,
    error,
  };
};

export default useRegisterForm;
