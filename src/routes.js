import { useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "Layout/Dashboard";

// pages
import Page404 from "Pages/Page404";
import DashboardPage from "Pages/Dashboard";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <DashboardPage /> },
        { path: "*", element: <Page404 /> },
      ],
    },
  ]);

  return routes;
}
