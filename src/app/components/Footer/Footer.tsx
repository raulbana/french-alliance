"use client";
import React from "react";

const Footer = () => (
  <footer className="w-full bg-french-blue py-10 px-4 flex flex-col md:flex-row justify-center items-stretch gap-8">
    <div className="flex-1 flex flex-col gap-4 justify-center">
      <h3 className="text-white text-lg font-semibold mb-1">
        Ficou alguma dúvida?
      </h3>
      <p className="text-white text-base leading-tight">
        Entre em contato através dos nossos canais de comunicação.
        <br />
        Merci!
      </p>
      <div className="bg-white rounded-xl px-6 py-4 mt-4 w-fit shadow">
        <span className="text-french-red font-semibold text-lg">
          WhatsApp - (41) 0800 002 3363
        </span>
      </div>
    </div>
    <div className="flex-1 flex flex-col gap-4 justify-center">
      <div className="bg-white rounded-xl px-6 py-4 shadow">
        <div className="text-french-red text-sm mb-1">Instagram:</div>
        <div className="text-french-red font-semibold text-base mb-2">
          @af_curitiba
        </div>
        <div className="text-french-red text-sm mb-1">
          LinkedIn, Facebook e YouTube:
        </div>
        <div className="text-french-red font-semibold text-base mb-2">
          Aliança Francesa de Curitiba
        </div>
        <div className="text-french-red text-sm mb-1">Nosso endereço</div>
        <div className="text-french-red font-semibold text-base">
          Alameda Prudente de Moraes, 1101
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
