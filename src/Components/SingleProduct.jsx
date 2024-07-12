import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { CartContext } from "../context/CartProvider";
import { CgLogIn } from "react-icons/cg";

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { data } = useFetchData(`https://fakestoreapi.com/products/${id}`);

  return (
    <div className="w-full p-4 bg-zinc-100 shadow-md flex flex-col md:flex-row items-center gap-10 ">
      <img
        src={data.image}
        alt="single product"
        className="w-full md:w-1/3 lg:h-80 object-cover my-4 rounded-lg lg:mt-16"
      />
      <div className="flex flex-col flex-grow">
        <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
        <p className="my-4 text-gray-700">{data.description}</p>
        <p className="text-sm text-gray-500">
          Rating: {data.rating?.rate || "N/A"}/5
        </p>
        <p className="text-lg font-semibold text-green-600">${data.price}</p>

        <div className="mt-4">
          <button
            className="cartbtn border-2 border-blue-500 p-2 rounded-xl w-full md:w-1/3 transition"
            onClick={() => {
              addToCart(
                data.id,
                data.image,
                data.title,
                data.rating.rate,
                data.price
              );
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
