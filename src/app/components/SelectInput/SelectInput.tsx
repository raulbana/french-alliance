"use client";

import React from "react";

export interface SelectInputOption {
  value: string | number;
  label: string;
}

export interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectInputOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string | null;
  extraClasses?: string;
  label?: string;
  onClear?: () => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  value,
  placeholder = "Selecione uma opção",
  disabled = false,
  error = null,
  extraClasses = "",
  label = "",
  onClear,
  ...rest
}) => {
  const hasError = !!error;

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label
            className={`text-sm w-full ${
              hasError ? "text-red-700" : "text-slate-300"
            }`}
          >
            {label}
          </label>
        )}
        <div className="flex justify-between items-center">
          <select
            className={`w-full bg-transparent placeholder:text-slate-400 text-slate-300 text-sm border-2 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none ${
              hasError
                ? "border-red-700 focus:border-red-500 hover:border-red-900"
                : "border-french-blue focus:border-indigo-800 hover:border-indigo-500"
            } shadow-sm focus:shadow ${extraClasses}`}
            value={value}
            disabled={disabled}
            {...rest}
          >
            <option
              value=""
              className="text-white font-bold bg-indigo-950 hover:bg-indigo-900 mx-4"
              disabled
            >
              {placeholder}
            </option>
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="text-white font-bold bg-indigo-950 hover:bg-french-blue"
              >
                {option.label}
              </option>
            ))}
          </select>
          {onClear && !disabled && (
            <button
              type="button"
              className="ml-2 text-slate-300 cursor-pointer hover:text-french-blue rounded-full p-1 transition duration-300 ease"
              onClick={onClear}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="min-h-4">
        {hasError && <span className="text-xs text-red-800">{error}</span>}
      </div>
    </div>
  );
};

export default SelectInput;
