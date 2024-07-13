import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Electronics from "../pages/Electronics";
import Jewelery from "../pages/Jewelery";
import Mens from "../pages/Mens";
import Womens from "../pages/Womens";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import SignUp from "../pages/SignUp";
import SignIp from "../pages/SignIn";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";
const Allroutes = () => {
  const routs = [
    { path: "/", element: <Home /> },
    { path: "/electronics", element: <Electronics /> },
    { path: "/jewelery", element: <Jewelery /> },
    { path: "/mens", element: <Mens /> },
    { path: "/womens", element: <Womens /> },
    {
      path: "/cart",
      element: (
        <PrivateRoute>
          <Cart />
        </PrivateRoute>
      ),
    },
    { path: "/signup", element: <SignUp /> },
    { path: "/signin", element: <SignIp /> },
    { path: "/product/:id", element: <SingleProduct /> },
    { path: "/jewelery/product/:id", element: <SingleProduct /> },
    { path: "/electronics/product/:id", element: <SingleProduct /> },
    { path: "/mens/product/:id", element: <SingleProduct /> },
    { path: "/womens/product/:id", element: <SingleProduct /> },
    { path: "*", element: <NotFound /> },
  ];
  return (
    <Routes>
      {routs.map((e) => (
        <Route key={e.path} path={e.path} element={e.element} />
      ))}
    </Routes>
  );
};

export default Allroutes;
