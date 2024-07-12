import React from "react";
import useFetchData from "../hooks/useFetchData";
import Append from "../Components/Append";
import { CartContext } from "../context/CartProvider";
import { useContext } from "react";

const Womens = () => {
  const { addToCart } = useContext(CartContext);
  const { data } = useFetchData(
    "https://fakestoreapi.com/products/category/women's clothing"
  );

  return <Append data={data} addToCart={addToCart} />;
};

export default Womens;
