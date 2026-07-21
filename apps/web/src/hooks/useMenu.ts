import { useState } from 'react';

const useMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuOpen = () => {
    setIsVisible(true);
  };

  const handleMenuClose = () => {
    setIsVisible(false);
  };

  return {
    handleMenuClose,
    handleMenuOpen,
    isVisible
  };
};

export default useMenu;
