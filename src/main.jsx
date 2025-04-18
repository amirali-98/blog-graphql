import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import "./styles/index.css";
import "./styles/fonts.css";
import App from "./App.jsx";
import theme from "./mui/theme.js";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
