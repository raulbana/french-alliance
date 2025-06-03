"use client";
import { WhatsappLogo, X } from "phosphor-react";
import React from "react";
import useContactButton from "./useContactButton";

const ContactButton = () => {
  const {
    showTooltip,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    visible,
    handleClose,
  } = useContactButton();

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 right-4 flex flex-col items-end z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <button
          className="absolute cursor-pointer -top-2 -right-2 bg-black/50 rounded-full p-1 z-10 hover:bg-opacity-90 transition"
          style={{ lineHeight: 0 }}
          onClick={handleClose}
          aria-label="Fechar botão de contato"
          tabIndex={0}
        >
          <X size={14} className="text-french-white" />
        </button>
        {showTooltip && (
          <div className="absolute right-10 bottom-10 w-48 px-3 py-2 rounded bg-black/50 text-french-white text-sm shadow-lg transition-opacity duration-200">
            Fale conosco pelo WhatsApp
          </div>
        )}
        <button
          className="cursor-pointer bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:bg-green-900 transition-colors duration-300"
          onClick={handleClick}
          aria-label="Contato via WhatsApp"
        >
          <WhatsappLogo size={32} />
        </button>
      </div>
    </div>
  );
};

export default ContactButton;
