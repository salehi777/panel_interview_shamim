import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useGlobalTheme } from "Hooks/useGlobalTheme";
import Router from "./routes";
import { theme } from "Utils/theme";
import "Styles/index.scss";

export default function App() {
  const { globalTheme, loadGlobalTheme } = useGlobalTheme();

  useEffect(() => {
    loadGlobalTheme();
  }, [loadGlobalTheme]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme({ mode: globalTheme.palette.mode })}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
