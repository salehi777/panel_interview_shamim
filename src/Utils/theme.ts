import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#1e5cff",
      light: "#f3f6fd",
    },
    error: {
      main: "#f34252",
    },
    background: {
      default: "#f3f6fd",
    },
    text: {
      primary: "#121830",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});
