import { useState } from "react";

const useContactButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=554108000023363&text&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  const handleClose = () => setVisible(false);

  return {
    showTooltip,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    visible,
    handleClose,
  };
};

export default useContactButton;
