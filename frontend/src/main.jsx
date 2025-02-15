import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/Homepage.jsx";
import chatPage from "./routes/chatPage/chatPage.jsx";
import signInPage from "./routes/signInPage/signInPage.jsx";
import signUpPage from "./routes/signUpPage/signUpPage.jsx";
import DashboardPage from "./routes/dashboardPage/DashboardPage.jsx";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <chatPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
