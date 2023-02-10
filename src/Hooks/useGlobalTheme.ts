import { useContext } from "react";
import { ThemeGlobalContext } from "Context/ThemeGlobalContext";

export const useGlobalTheme = () => {
  const { globalTheme, setGlobalTheme } = useContext(ThemeGlobalContext);

  const loadGlobalTheme = () => {
    const themeLocal = localStorage.getItem("theme");
    if (themeLocal) {
      try {
        const newTheme = JSON.parse(themeLocal);
        setGlobalTheme(newTheme);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const setMode = (mode: string) => {
    const newTheme = {
      ...globalTheme,
      palette: { ...globalTheme.palette, mode },
    };
    setGlobalTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return { globalTheme, loadGlobalTheme, setMode };
};
