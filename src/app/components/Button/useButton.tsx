import { ButtonSize, ButtonType } from "./Button";

const useButton = () => {
  const getButtonStyles = (variant: ButtonType) => {
    switch (variant) {
      case "PRIMARY":
        return "bg-french-blue text-french-white hover:bg-blue-800";
      case "SECONDARY":
        return "bg-french-red text-french-white hover:bg-red-800";
      case "TERTIARY":
        return "bg-transparent text-french-blue hover:bg-blue-100 border border-french-blue";
      default:
        return "btn-default";
    }
  };
  
  const getButtonSize = (size: ButtonSize) => {
    switch (size) {
      case "SMALL":
        return "px-2 py-1 text-sm";
      case "MEDIUM":
        return "px-4 py-2 text-base";
      case "LARGE":
        return "px-6 py-3 text-lg";
      default:
        return "btn-default";
    }
  };

  return {
    getButtonStyles,
    getButtonSize,
  };
};

export default useButton;
