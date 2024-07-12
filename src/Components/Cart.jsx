import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="pt-4 w-full p-4 bg-zinc-100 ">
      <div className="mx-auto max-w-2xl lg:mt-16">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center my-4 p-4 bg-white shadow-md rounded-lg "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-1/5 h-auto object-cover mr-4"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500">
                Rating: {item.rating.rate} / 5
              </p>
              <p className="text-sm">${item.price}</p>
            </div>
            <div className="text-sm text-right">
              <div className="pb-2">Quantity: {item.quantity}</div>
              <button
                className="px-2 py-1 border-2 border-red-500 text-red-500 rounded-xl "
                onClick={() => {
                  removeFromCart(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full border-2 mt-4 p-4 bg-white rounded-lg shadow-md">
        <div className="mx-auto text-center">
          <h3 className="text-lg font-bold">Total Items: {totalItems}</h3>
          <h3 className="text-lg font-bold">
            Total Price: ${totalPrice.toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
