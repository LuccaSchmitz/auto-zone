import React from "react";
import ReactDOM from "react-dom/client";
import VehicleSelector from "./components/VehicleSelector.tsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="p-8">
      <VehicleSelector />
    </main>
  </React.StrictMode>
);
