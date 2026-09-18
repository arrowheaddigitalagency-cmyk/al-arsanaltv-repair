"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface PreloaderContextType {
  isLoaded: boolean;
  completePreloader: () => void;
}

const PreloaderContext = createContext<PreloaderContextType>({
  isLoaded: false,
  completePreloader: () => {},
});

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const completePreloader = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Fallback timeout to guarantee page content is visible even if preloader fails or is skipped
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2800);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <PreloaderContext.Provider value={{ isLoaded, completePreloader }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  return useContext(PreloaderContext);
}
