import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyShortUrlsPage from "../pages/MyShortUrlsPage";
import BasePage from "../pages/BasePage";
import ReferersPage from "../pages/ReferersPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Public from "./Public";
import Private from "./Private";
const routes = createBrowserRouter([
  {
    element: <Private />,
    children: [
      {
        element: <BasePage />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "/myurls",
            element: <MyShortUrlsPage />,
          },
          {
            path: "/referers",
            element: <ReferersPage />,
          },
        ],
      },
    ],
  },
  {
    element: <Public />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default routes;
