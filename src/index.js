import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import HeroBanner from "./components/HeroBanner";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
} from "react-router-dom";
import Main from "./components/Main";
import ProductInfo from "./components/ProductInfo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeroBanner />,
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/productinfo/:productId",
        element: <ProductInfo />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
