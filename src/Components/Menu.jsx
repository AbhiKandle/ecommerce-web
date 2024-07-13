import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = ({ isactive, signout, user, Links }) => {
  return (
    <div className=" w-full  p-4 flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-4">
        {Links.map((e) => (
          <NavLink
            style={({ isActive }) => {
              return isActive ? isactive : { color: "black" };
            }}
            key={e.to}
            to={e.to}
            className="text-black no-underline"
          >
            {e.text}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <Link to={"/signin"}>
          <button className="logbtn border-2 rounded-md px-4 py-2">
            Sign In
          </button>
        </Link>
        <Link to={"/signup"}>
          <button className="logbtn border-2 rounded-md px-4 py-2">
            Sign Up
          </button>
        </Link>
      </div>
      <div>
        <select
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
  );
};

export default Menu;
