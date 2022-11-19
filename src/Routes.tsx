import { useRoutes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AdminPage } from "./pages/Dashboard";
import { Index } from "./pages/Index";

export const ApplicationRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Index />,
    },

    {
      path: "/predict",
      element: <HomePage />,
    },

    {
      path: "/admin",
      element: <AdminPage />,
    },
  ]);

  return routes;
};
