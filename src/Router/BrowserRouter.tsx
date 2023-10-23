import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "../Pages/ErrorPage";
import { TestPage } from "../Pages/TestPage";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";
import { SearchPage } from "../Pages/SearchPage";
import { CguPage } from "../Pages/CguPage";
import { SettingPage } from "../Pages/SettingPage";
import { GeneralPage } from "../Pages/GeneralPage";
import { VoixPage } from "../Pages/VoixPage";
import { NavigationPage } from "../Pages/NavigationPage";
import { PolitiquePage } from "../Pages/PolitiquePage";
import { ProposPage } from "../Pages/ProposPage";

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

  {
    path: "/search",
    element: <SearchPage />,
    errorElement: <ErrorPage />
  },

  {
    path: "/test",
    element: <TestPage />,
    errorElement: <ErrorPage />
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

  // CGU page route
  {
    path: "/cgu",
    element: <CguPage />,
  },

  // Setting page route
  {
    path: "/setting",
    element: <SettingPage />,
  },

  // General page route
  {
    path: "/general",
    element: <GeneralPage />,
  },

  // Voix page route
  {
    path: "/voix",
    element: <VoixPage />,
  },

  // Navigation page route
  {
    path: "/navigation",
    element: <NavigationPage />,
  },

  // Politique page route
  {
    path: "/politique",
    element: <PolitiquePage />,
  },

  // Propos page route
  {
    path: "/propos",
    element: <ProposPage />,
  },
]);
