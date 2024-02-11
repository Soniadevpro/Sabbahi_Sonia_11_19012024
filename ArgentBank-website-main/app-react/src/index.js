import React from "react";
import { createRoot } from "react-dom/client"; // Importation modifiée
import App from "./App";
import "./style/index.css";

const root = document.getElementById("root");

// Créez la racine en utilisant la nouvelle API
const reactRoot = createRoot(root);

// Rendre votre application
reactRoot.render(<App />);
