import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./core/i118/i118n";
import "./assets/styles/common.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
