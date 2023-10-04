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
import Cart from "./components/Cart";
import WishList from "./components/WishList";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import OrderNow from "./components/OrderNow";

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
      {
        path: "/cart",
        element: <PrivateRoute component={<Cart />} />,
      },
      {
        path: "/wishlist",
        element: <PrivateRoute component={<WishList />} />,
      },
      {
        path: "/buynow/:productId",
        element: <PrivateRoute component={<OrderNow />} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//  import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./components/App";
// import HeroBanner from "./components/HeroBanner";
// import Main from "./components/Main";
// import ProductInfo from "./components/ProductInfo";
// import Cart from "./components/Cart";
// import WishList from "./components/WishList";
// import Login from "./components/Login";
// import Signup from "./components/SignUp";
// import ForgotPassword from "./components/ForgotPassword";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";

// const AppRouter = () => (
//   <Routes>
//     <Route path="/" element={<App />}>
//       <Route index element={<HeroBanner />} />
//       <Route path="/main" element={<Main />} />
//       <Route path="/productinfo/:productId" element={<ProductInfo />} />
//       <Route path="/cart" element={<PrivateRoute component={Cart} />} />{" "}
//       {/* Use PrivateRoute for protection */}
//       <Route path="/wishlist" element={<WishList />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/forgotpassword" element={<ForgotPassword />} />
//     </Route>
//     <Route path="*" element={<Navigate to="/" />} /> {/* Handle 404 */}
//   </Routes>
// );

// ReactDOM.render(<AppRouter />, document.getElementById("root"));
