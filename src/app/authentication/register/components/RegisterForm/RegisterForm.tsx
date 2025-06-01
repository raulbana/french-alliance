"use client";
import React from "react";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import useRegisterForm from "./useRegisterForm";
import Loader from "@/app/components/Loader/Loader";

const RegisterForm = () => {
  const { register, handleSubmit, onSubmit, errors, isLoading, error } =
    useRegisterForm();

  return isLoading ? (
    <Loader loading={isLoading} />
  ) : (
    <div className="flex flex-col justify-center items-center rounded-lg gap-2 px-8 py-12 w-full max-w-2xl mx-auto bg-french-blue">
      <form
        className="grid grid-cols-2 gap-6 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          label="Nome Completo"
          placeholder="Seu nome completo"
          required
          {...register("fullName")}
          error={
            errors.fullName?.message
              ? [{ hasError: true, message: errors.fullName.message }]
              : []
          }
        />
        <Input
          type="date"
          label="Data de Nascimento"
          placeholder="00/00/0000"
          required
          {...register("birthDate")}
          error={
            errors.birthDate?.message
              ? [{ hasError: true, message: errors.birthDate.message }]
              : []
          }
        />
        <Input
          type="text"
          label="Celular"
          placeholder="(00) 00000-0000"
          maxLength={15}
          required
          {...register("phone")}
          error={
            errors.phone?.message
              ? [{ hasError: true, message: errors.phone.message }]
              : []
          }
        />
        <Input
          type="email"
          label="Email"
          placeholder="Seu email"
          required
          {...register("email")}
          error={
            errors.email?.message
              ? [{ hasError: true, message: errors.email.message }]
              : []
          }
        />
        <Input
          type="password"
          label="Senha"
          placeholder="Sua senha"
          required
          {...register("password")}
          error={
            errors.password?.message
              ? [{ hasError: true, message: errors.password.message }]
              : []
          }
        />
        <Input
          type="password"
          label="Confirmar Senha"
          placeholder="Confirme sua senha"
          required
          {...register("confirmPassword")}
          error={
            errors.confirmPassword?.message
              ? [{ hasError: true, message: errors.confirmPassword.message }]
              : []
          }
        />
        {error && (
          <p className="text-red-500 text-sm mt-2">
            Erro ao fazer login. Tente novamente.
          </p>
        )}
        <div className="col-span-2 flex justify-between mt-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-french-white">
              Já possui uma conta?{" "}
              <a href="/authentication/login" className="hover:underline">
                Faça Login
              </a>
            </p>
          </div>
          <Button
            label="Confirmar"
            type="SECONDARY"
            typeButton="submit"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
