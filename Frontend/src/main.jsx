import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { WillingToArriveProvider } from "./context/WillingToArriveContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <LanguageProvider>
        <WillingToArriveProvider>
          <App />
        </WillingToArriveProvider>
      </LanguageProvider>
    </AuthProvider>
  </React.StrictMode>
);
