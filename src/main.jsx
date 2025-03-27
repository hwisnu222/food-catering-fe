import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme.js";
import "./index.css";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { routes } from "./routes/routers.js";

const client = new ApolloClient({
  uri: import.meta.env.REACT_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>
);
