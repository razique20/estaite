import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PropertyContextProvider from "./context/PropertyContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <PropertyContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PropertyContextProvider>
);
