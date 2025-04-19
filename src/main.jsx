import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./styles/index.css";
import "./styles/fonts.css";
import App from "./App.jsx";
import theme from "./mui/theme.js";

const client = new ApolloClient({
  uri: "https://ap-south-1.cdn.hygraph.com/content/cm9ipxzgm02gp07waelhom7zj/master",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>
);
