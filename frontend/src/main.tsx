import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import FiltersProvider from "./context/FiltersContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
      
        <FiltersProvider>
          <App />
        </FiltersProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
