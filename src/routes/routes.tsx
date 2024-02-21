import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyShortUrlsPage from "../pages/MyShortUrlsPage";
import BasePage from "../pages/BasePage";
import ReferersPage from "../pages/ReferersPage";
const routes = createBrowserRouter([
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
]);

export default routes;
