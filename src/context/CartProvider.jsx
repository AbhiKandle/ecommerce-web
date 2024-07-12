import React, { createContext, useState, useReducer } from "react";

export const CartContext = createContext();

const reducer = (cart, action) => {
  switch (action.type) {
    case "addTOCart": {
      const existingProduct = cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        return cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...cart, { ...action.payload, quantity: 1 }];
    }

    case "removeFromCart": {
      return cart.filter((item) => item.id !== action.payload);
    }

    default: {
      return cart;
    }
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);

  const addToCart = (id, image, title, rating, price) => {
    const newProduct = { id, image, title, rating, price };

    dispatch({
      type: "addTOCart",
      payload: newProduct,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "removeFromCart",
      payload: id,
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
