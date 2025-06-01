import React from "react";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-center text-french-red mb-6">
        Crie sua conta
      </h1>
      <h2 className="text-xl font-semibold text-center text-french-white mb-8">
        Dados pessoais
      </h2>
      <RegisterForm />
    </div>
  );
};

export default Register;
