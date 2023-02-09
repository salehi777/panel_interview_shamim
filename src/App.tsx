import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import Router from "./routes";
import { theme } from "Utils/theme";
import "Styles/index.scss";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
