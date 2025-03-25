import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { PATHS } from "./paths";
import "./index.css";
import Admin from "./pages/admin";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Recipe from "./pages/recipe";
import Edit from "./pages/edit";

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <App />,
  },
  {
    path: PATHS.admin,
    element: <Admin />,
  },
  {
    path: `${PATHS.recipe}/:id`,
    element: <Recipe />,
  },
  {
    path: `${PATHS.edit}/:id`,
    element: <Edit />,
  },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
