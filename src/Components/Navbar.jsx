import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from "../context/CartProvider";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const Links = [
    { to: "/", text: "Home" },
    { to: "/electronics", text: "Electronics" },
    { to: "/jewelery", text: "Jewelery" },
    { to: "/mens", text: "Mens" },
    { to: "/womens", text: "Womens" },
  ];

  const isactive = {
    color: "green",
    textDecoration: "underline",
  };

  return (
    <div className="nav w-full lg:fixed h-auto flex flex-col sm:flex-row lg:px-6 lg:py-2 sm:px-10 justify-between items-center border-b-2 bg-gradient-to-r from-purple-500 to-pink-500 md:p-1 top">
      <div>
        <img
          className="logo h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidyDz4vUFPC_pC4WT44M-8OE1iyO2TcSr0Q&s"
          alt="logo"
        />
      </div>

      <div className="links w-full sm:w-2/4 flex flex-col sm:flex-row justify-between mt-4 sm:mt-0">
        {Links.map((e) => (
          <NavLink
            style={({ isActive }) => {
              return isActive ? isactive : { color: "black" };
            }}
            key={e.to}
            to={e.to}
            className="mb-2 sm:mb-0"
          >
            {e.text}
          </NavLink>
        ))}
      </div>
      <div className=" flex flex-col sm:flex-row  justify-around items-center w-full sm:w-auto gap-2 sm:gap-5 mt-4 sm:mt-0">
        <Link to={"/signin"}>
          <div>
            <button className="logbtn border-2 lg:px-5 lg:py-2 rounded-md md:p-1  ">
              Sign In
            </button>
          </div>
        </Link>
        <Link to={"/signup"}>
          <div>
            <button className="logbtn border-2 lg:px-5 lg:py-2 rounded-md md:p-1 ">
              Sign Up
            </button>
          </div>
        </Link>
        <Link to={"/cart"}>
          <div className="cart flex items-center">
            {<MdOutlineShoppingCart />}
            <span className="ml-1 text-xs">
              <p>{cart.length}</p>
            </span>
          </div>
        </Link>
        <div>
          <select
            name=""
            id=""
            className="border-2 px-2 py-1 rounded-md"
            onChange={() => {
              signout();
            }}
            disabled={!user}
          >
            <option value="">{user}</option>
            <option value="">Sign Out</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
