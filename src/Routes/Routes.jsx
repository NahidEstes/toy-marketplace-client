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
        element: <AddToy />,
      },

      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/allToys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/myToys",
        element: <MyToys />,
        loader: () => fetch("http://localhost:5000/toys"),
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
