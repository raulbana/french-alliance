import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-center text-french-red mb-6">
        Login
      </h1>
      <div className="flex justify-center items-center rounded-l px-4 py-6 w-full max-w-md mx-auto">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
