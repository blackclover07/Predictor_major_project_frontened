import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import AppLayout from "./AppLayout";
import "./Components/charts/chartSetup";
import Teams from "./Pages/Teams";
import About from "./Pages/About";
import Login from "./admin/Login";
import Pricing from "./Pages/Pricing";
import SuperAdminDashboard from "./admin/SuperAdminDashboard";
import Admin_appLayout from "./admin/Admin_appLayout";
import Register from "./admin/Register";

// 1. Import your newly created funny 404 page
import NotFound from "./Pages/NotFound"; // Adjust this import path if you saved it in Components or another directory

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "teams",
          element: <Teams />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
        {
          // 2. Catch-all for regular users (renders inside your main header/footer layout)
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "adminDashboard",
      element: <Admin_appLayout />,
      children: [
        {
          index: true,
          element: <SuperAdminDashboard />,
        },
        {
          path: "addAdmin",
          element: <Register />,
        },
        {
          // 3. Optional: Catch-all for broken paths inside the admin panel layout
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;