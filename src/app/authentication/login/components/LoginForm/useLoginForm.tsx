import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "../../schema/loginSchema";
import { useAuth } from "@/app/contexts/auth";
import { useState } from "react";

const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const { login } = useAuth();

  const onSubmit = async (data: LoginSchema) => {
    try {
      setIsLoading(true);
      const loginData = {
        email: data.email,
        password: data.password,
      };
      login(loginData);

      window.location.href = "../../";
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
    error,
  };
};

export default useLoginForm;
