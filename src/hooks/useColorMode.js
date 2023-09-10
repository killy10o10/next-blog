"use client";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  // Change the second argument of useLocalStorage to "dark" for the initial value
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "dark");

  useEffect(() => {
    const className = "dark";
    const htmlElement = document.documentElement;

    colorMode === "dark"
      ? htmlElement.classList.add(className)
      : htmlElement.classList.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
