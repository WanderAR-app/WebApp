import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "../Pages/ErrorPage";
import { TestPage } from "../Pages/TestPage";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";

export const BrowserRouter = createBrowserRouter([
  // base path route
  {
    path: "/",
    element: <TestPage />,
    errorElement: <ErrorPage />,
    children: [
      // test page route
      {
        path: "/test",
        element: <TestPage />,
      },

      // 404 page route
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },

  // Login page route
  {
    path: "/login",
    element: <LoginPage />,
  },

  // Register page route
  {
    path: "/register",
    element: <RegisterPage />,
  },

  // 404 page route
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
