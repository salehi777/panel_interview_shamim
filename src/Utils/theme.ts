import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

interface DynamicOptions {
  mode?: PaletteMode;
}

export const theme = ({ mode }: DynamicOptions) =>
  createTheme({
    direction: "rtl",
    palette: {
      mode: mode || "light",
      primary: {
        main: "#1e5cff",
        light: "#f3f6fd",
      },
      background: {
        default: mode === "dark" ? "#212121" : "#f3f6fd",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#121830",
      },
    },
    typography: {
      fontFamily: '"Vazirmatn", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });
