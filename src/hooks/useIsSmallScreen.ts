import { useState, useEffect } from "react";

const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const handleScreenChange = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches);
    };

    setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleScreenChange);

    return () => mediaQuery.removeEventListener("change", handleScreenChange);
  }, []);

  return isSmallScreen;
};

export default useIsSmallScreen;
