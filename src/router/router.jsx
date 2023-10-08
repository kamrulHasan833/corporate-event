import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home/Home";

import BlogDetails from "../components/BlogDetails";
import ServiceDetails from "../components/ServiceDetails";
import Blogs from "../components/pages/Blogs/Blogs";
import Register from "../components/pages/Register/Register";
import ContextProvider from "../contexts/dataLoaderContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <App></App>
      </ContextProvider>
    ),
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
      {
        path: "/blogs/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
