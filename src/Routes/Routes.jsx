import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Blogs from "../Pages/Blogs/Blogs";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateProduct from "../Pages/UpdateProudct/UpdateProduct";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
import PrivateRoute from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },

      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/allToys",
        element: <AllToys />,
        loader: () =>
          fetch("https://11th-assignment-server-nahidestes.vercel.app/toys"),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://11th-assignment-server-nahidestes.vercel.app/toys"),
      },

      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToysDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://11th-assignment-server-nahidestes.vercel.app/toysDetails/${params.id}`
          ),
      },

      {
        path: "/update",
        element: <UpdateProduct />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
