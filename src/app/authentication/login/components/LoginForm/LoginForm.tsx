"use client";
import Input from "@/app/components/Input/Input";
import React from "react";
import useLoginForm from "./useLoginForm";
import Button from "@/app/components/Button/Button";
import Loader from "@/app/components/Loader/Loader";

const LoginForm = () => {
  const { register, handleSubmit, onSubmit, errors, isLoading, error } =
    useLoginForm();

  return isLoading ? (
    <Loader loading={isLoading} />
  ) : (
    <div className="flex flex-col justify-center items-center rounded-lg gap-2 px-8 py-12 w-full max-w-md mx-auto bg-french-blue">
      <form
        className="flex flex-col w-full gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type={"email"}
          label={"Email"}
          placeholder="Digite seu email"
          required
          {...register("email")}
          error={
            errors.email?.message
              ? [{ hasError: true, message: errors.email.message }]
              : []
          }
        />
        <Input
          type={"password"}
          label={"Senha"}
          placeholder="Digite sua senha"
          required
          {...register("password")}
          error={
            errors.password?.message
              ? [{ hasError: true, message: errors.password.message }]
              : []
          }
        />
        <Button
          label={"Confirmar"}
          type="SECONDARY"
          typeButton="submit"
          onClick={handleSubmit(onSubmit)}
        />
        {error && (
          <p className="text-red-500 text-sm mt-2">
            Erro ao fazer login. Tente novamente.
          </p>
        )}
      </form>
      <div className="flex flex-col items-center mt-4">
        <p className="text-sm text-slate-300">
          <a href="/register" className="text-french-white hover:underline">
            Esqueceu sua senha?
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center mt-4">
        <p className="text-sm text-french-white">
          Não tem uma conta?{" "}
          <a href="/authentication/register" className="hover:underline">
            Registre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
