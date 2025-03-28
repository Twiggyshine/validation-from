import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core"; // Импортируем провайдер
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      {...{
        withGlobalStyles: true,
        withNormalizeCSS: true,
        theme: {},
      }}
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
