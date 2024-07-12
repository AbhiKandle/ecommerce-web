import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const { signin } = useContext(AuthContext);
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const data = useLocalStorage("user", null, "get");

    if (
      data &&
      data.data.password === password.current.value &&
      data.data.username === username.current.value
    ) {
      signin(data.data.username);
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="w-full h-[92vh] flex items-center justify-center bg-gray-200">
      <div className="container mx-auto bg-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-auto p-5 sm:p-9 shadow-xl rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handlesubmit}>
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
