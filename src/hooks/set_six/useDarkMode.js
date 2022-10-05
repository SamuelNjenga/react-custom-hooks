import { useEffect } from "react";
import useMediaQuery from "../set_five/useMediaQuery";
import { useLocalStorage } from "../set_three/useStorage";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
}
