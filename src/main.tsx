import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./providers/UserContext/UserContext.tsx";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
        <ToastContainer theme="dark" autoClose={3 * 1000} />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
