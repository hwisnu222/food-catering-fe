import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme.js";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { routes } from "./routes/routers.js";

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        {/* <App /> */}
        <RouterProvider router={routes} />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>
);
