import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render
(
<AuthContextProvider>
<App/>
</AuthContextProvider>
);
