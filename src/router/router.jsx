import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home/Home";

import Blogs from "../components/pages/Blogs/Blogs";
import ServiceDetails from "../components/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
    ],
  },
]);
export default router;
