import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CardProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(180, 62%, 55%)",
    },
    background: {
      default: "hsl(0, 0%, 98%)",
    },
    text: {
      primary: "hsl(234, 12%, 34%)",
      secondary: "hsl(229, 6%, 66%)",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightBold: 600,
    body1: {
      fontSize: "15px",
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <CardProvider>
      <App />
    </CardProvider>
  </ThemeProvider>
);

reportWebVitals();
