import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <React.Suspense fallback={"loading"}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
);

// @ts-ignore
console.log(globalThis.__REPLIT__);
