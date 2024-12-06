import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import PropertyContextProvider from "./context/PropertyContext.jsx";
import TourProvider from "./context/TourContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PropertyContextProvider>
      <TourProvider>
        <App />
      </TourProvider>
    </PropertyContextProvider>
  </BrowserRouter>
);
