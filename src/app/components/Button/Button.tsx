import React from "react";
import useButton from "./useButton";

export type ButtonType = "PRIMARY" | "SECONDARY" | "TERTIARY";
export type ButtonSize = "SMALL" | "MEDIUM" | "LARGE";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: ButtonType;
  disabled?: boolean;
  className?: string;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "PRIMARY",
  disabled = false,
  className = "",
  size = "MEDIUM",
}) => {
  const { getButtonStyles, getButtonSize } = useButton();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonStyles(type)} ${getButtonSize(
        size
      )} rounded-lg cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
