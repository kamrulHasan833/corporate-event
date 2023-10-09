import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home/Home";

import BlogDetails from "../components/BlogDetails";
import ServiceDetails from "../components/ServiceDetails";
import About from "../components/pages/About/About";
import Blogs from "../components/pages/Blogs/Blogs";
import Login from "../components/pages/Login/Login";
import NotFound from "../components/pages/NotFound/NotFound";
import Register from "../components/pages/Register/Register";
import ContextProvider from "../contexts/dataLoaderContext";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <App></App>
      </ContextProvider>
    ),
    errorElement: <NotFound></NotFound>,
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
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        errorElement: <NotFound></NotFound>,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
export default router;
