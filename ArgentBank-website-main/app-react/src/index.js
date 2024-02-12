import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Importation correcte
import App from "./App";
import "./style/index.css";

const container = document.getElementById("root");
const root = createRoot(container); // Utilisation correcte de createRoot
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
