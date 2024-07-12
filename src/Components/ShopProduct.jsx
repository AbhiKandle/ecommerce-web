import React from "react";
import { useState, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { useContext } from "react";
import Append from "./Append";

const ShopProduct = () => {
  const { addToCart } = useContext(CartContext);
  const { data } = useFetchData("https://fakestoreapi.com/products");

  return <Append data={data} addToCart={addToCart} />;
};

export default ShopProduct;
