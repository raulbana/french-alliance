"use client";

import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import Button, { ButtonProps } from "../Button/Button";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  controls?: ButtonProps[];
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  controls,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-slate-800 border-indigo-900 border-2 rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <div className="flex justify-between items-center border-b border-gray-300 pb-3">
          <h2 className={`text-lg font-semibold text-slate-300`}>{title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-3xl cursor-pointer transition"
          >
            &times;
          </button>
        </div>
        <div className="mt-4">{children}</div>
        <div className="flex justify-between mt-6 gap-4">
          {controls?.map((control, index) => (
            <Button key={`${index}-${control.label}`} {...control} />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
