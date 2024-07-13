import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from "../context/CartProvider";
import { AuthContext } from "../context/AuthContext";
import { MdOutlineMenu } from "react-icons/md";
import Mens from "../pages/Mens";
import Menu from "./Menu";
const Navbar = () => {
  const { user, signout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [menu, setmenu] = useState(false);
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

  const handlemenu = () => {
    setmenu(!menu);
  };

  return (
    <div>
      <div className="nav w-full fixed top-0 left-0 h-auto flex  sm:flex-row lg:px-6 lg:py-2 sm:px-10 justify-between items-center border-b-2 bg-gradient-to-r from-purple-500 to-pink-500 md:p-1 z-50 px-5 py-2 md:pr-2">
        <div className="sm:hidden" onClick={handlemenu}>
          <div>
            <MdOutlineMenu />
          </div>
        </div>

        <Link to={"/"}>
          <span>
            <img
              className="logo h-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidyDz4vUFPC_pC4WT44M-8OE1iyO2TcSr0Q&s"
              alt="logo"
            />
          </span>
        </Link>

        <div className="hidden sm:flex lg:w-full justify-around">
          <div className="  lg:w-96 flex flex-col sm:flex-row justify-between mt-4 sm:mt-0  md:w-80 md:mr-2">
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
          <div className="flex flex-col sm:flex-row justify-around items-center w-full sm:w-auto gap-2 sm:gap-5 mt-4 sm:mt-0">
            <Link to={"/signin"}>
              <div>
                <button className="logbtn border-2 lg:px-5 lg:py-2 rounded-md md:p-1">
                  Sign In
                </button>
              </div>
            </Link>
            <Link to={"/signup"}>
              <div>
                <button className="logbtn border-2 lg:px-5 lg:py-2 rounded-md md:p-1">
                  Sign Up
                </button>
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
        <div>
          <Link to={"/cart"}>
            <div className="cart flex items-center">
              {<MdOutlineShoppingCart />}
              <span className="ml-1 text-xs">
                <p>{cart.length}</p>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className=" sm:hidden bg-gradient-to-r from-purple-500 to-pink-500 mt-14">
        {menu && (
          <Menu
            isactive={isactive}
            signout={signout}
            user={user}
            Links={Links}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
