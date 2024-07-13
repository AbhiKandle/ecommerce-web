import React from "react";
import { Link } from "react-router-dom";

const Append = ({ data, addToCart }) => {
  return (
    <div className="w-full grid justify-center items-center pb-10">
      <div className="w-full px-4 py-5 lg:mt-12">
        <h1 className="font-semibold text-4xl">GRAND GLOBAL BRANDS</h1>
      </div>
      <div className="container px-4 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:mx-auto">
        {data.map((e) => (
          <div
            key={e.id}
            className="max-w-xs h-auto bg-white shadow-md overflow-hidden pt-2 rounded-xl"
          >
            <Link to={`product/${e.id}`}>
              <img
                src={e.image}
                alt="product"
                className="w-11/12 h-48 object-cover shadow-md mx-auto "
              />
            </Link>

            <div className="grid gap-1 mt-2 px-4">
              <h3 className="text-gray-900 font-bold text-lg">{e.title}</h3>
              <div>
                <p className="text-gray-700">{e.rating.rate}/5 </p>
                <h2 className=" font-bold text-green-600">${e.price}</h2>
              </div>
            </div>
            <div className="mt-2 px-4">
              <button
                className="border-2 p-2 rounded-xl w-full sm:w-28  border-blue-500"
                onClick={() => {
                  addToCart(e.id, e.image, e.title, e.rating.rate, e.price);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Append;
