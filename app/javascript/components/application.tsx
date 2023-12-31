import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import {ErrorPage} from "./pages/ErrorPage";
import {GamePage} from "./pages/GamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/games/:gameId",
    element: <GamePage />,
  },
]);

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const root = createRoot(rootEl!); // createRoot(container!) if you use TypeScript
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
});
