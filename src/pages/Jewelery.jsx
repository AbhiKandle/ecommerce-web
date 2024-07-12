import React from "react";
import useFetchData from "../hooks/useFetchData";
import Append from "../Components/Append";
import { CartContext } from "../context/CartProvider";
import { useContext } from "react";

const Jewelery = () => {
  const { addToCart } = useContext(CartContext);
  const { data } = useFetchData(
    "https://fakestoreapi.com/products/category/jewelery"
  );

  return <Append data={data} addToCart={addToCart} />;
};

export default Jewelery;
