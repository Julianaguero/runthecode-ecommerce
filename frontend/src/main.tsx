import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import {ProductsProvider} from "./context/";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
      <ProductsProvider>
        {/* <FiltersProvider> */}
          <App />
        {/* </FiltersProvider> */}
      </ProductsProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
