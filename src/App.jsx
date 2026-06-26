import React from "react";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  Outlet,
} from "react-router-dom";
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
import { ClerkProvider, SignIn } from "@clerk/react-router";
import SignUp from "./admin/SignUpcustom";
import { useAuth, useUser } from "@clerk/react-router";
import AdminRoute from "./admin/AdminRoute";

// 1. Import your newly created funny 404 page
import NotFound from "./Pages/NotFound"; // Adjust this import path if you saved it in Components or another directory
import ProtectedRoute from "./admin/ProtectedRoute";
import { AuthProvider } from "./admin/AuthContext";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing clerk publishable environment variables.");
}

const ClerkProviderWithNavigation = () => {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
    >
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </ClerkProvider>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      element: <ClerkProviderWithNavigation />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <AppLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "teams", element: <Teams /> },
            { path: "services", element: <Services /> },
            { path: "pricing", element: <Pricing /> },
            { path: "*", element: <NotFound /> },
          ],
        },

        {
          path: "/login/*",
          element: <Login />,
        },
        {
          path: "/signup/*",
          element: <SignUp />,
        },

        {
          path: "admin-dashboard",
          element: (
            <ProtectedRoute>
              <AdminRoute>
                <Admin_appLayout />
              </AdminRoute>
            </ProtectedRoute>
          ),
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
              path: "*",
              element: <NotFound />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
