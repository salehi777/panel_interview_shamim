import { createContext, ReactNode, useState } from "react";
import { PaletteMode } from "@mui/material";

interface Initial {
  globalTheme: {
    palette: {
      mode: PaletteMode;
    };
  };
  setGlobalTheme: Function;
}

const initial: Initial = {
  globalTheme: {
    palette: {
      mode: "light",
    },
  },
  setGlobalTheme: () => {},
};

export const ThemeGlobalContext = createContext(initial);

interface Props {
  children: ReactNode;
}
export default function ThemeGlobalProvider({ children }: Props) {
  const [globalTheme, setGlobalTheme] = useState(initial.globalTheme);
  return (
    <ThemeGlobalContext.Provider value={{ globalTheme, setGlobalTheme }}>
      {children}
    </ThemeGlobalContext.Provider>
  );
}
