import React from "react";
import useFetchData from "../hooks/useFetchData";
import Append from "../Components/Append";
import { CartContext } from "../context/CartProvider";
import { useContext } from "react";

const Electronics = () => {
  const { addToCart } = useContext(CartContext);
  const { data } = useFetchData(
    "https://fakestoreapi.com/products/category/electronics"
  );

  return <Append data={data} addToCart={addToCart} />;
};

export default Electronics;
