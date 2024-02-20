import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyShortUrlsPage from "../pages/MyShortUrlsPage";
import HomeLayout from "../layouts/HomeLayout";
const routes = createBrowserRouter([
  {
    element: <HomePage />,
    children: [
      {
        path: "",
        element: <HomeLayout />,
      },
      {
        path: "/myurls",
        element: <MyShortUrlsPage />,
      },
    ],
  },
]);

export default routes;
