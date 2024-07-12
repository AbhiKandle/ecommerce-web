import React, { useRef, useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const SignUp = () => {
  const username = useRef();
  const password = useRef();
  const id = useId();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(), // Simple unique ID
      username: username.current.value,
      password: password.current.value,
    };

    useLocalStorage("user", newUser, "set");

    navigate("/signin");
  };

  return (
    <div className="w-full h-[92vh] flex items-center justify-center bg-gray-200">
      <div className="container mx-auto bg-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-auto p-5 sm:p-9 shadow-xl rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              ref={username}
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              ref={password}
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              ref={password}
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <p>Already have an account?</p>
          <Link to={"/signin"}>
            <span className="text-blue-900 font-extrabold ml-1">Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
