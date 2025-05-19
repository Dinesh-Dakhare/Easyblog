import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=" min-h-screen space-y-20 flex-row mx-auto max-md:mt-10 p-4 md:grid md:items-center md:justify-center md:space-y-0">
      <NavLink to={"/"} className="bg-slate-100 flex p-2 rounded-full justify-center items-center w-[2.5rem]">
        <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
      </NavLink>
      <div className="space-y-12  h-full px-2">
        <form action="" className=" space-y-5 relative">
          <h1 className="text-3xl font-bold pb-4">
            Welcome back! Glad to see you. Again!
          </h1>
          <input
            type="email"
            className="w-full px-2 py-4 bg-slate-100 rounded-sm placeholder:text-xl text-xl"
            placeholder="Enter your Email"
          />
          <div>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-2 py-4 bg-slate-100  rounded-sm placeholder:text-xl text-xl "
              placeholder="Enter you password"
            />
            <div
              onClick={(showPasswordHandle) => setShowPassword((prev) => !prev)}
              className="absolute top-51 right-5 md:top-43"
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} className="text-xl" />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} className="text-xl" />
              )}
            </div>
          </div>
        </form>
        <button className="w-full bg-slate-900 font-semibold text-white rounded-lg text-2xl p-4">
          Login
        </button>
        <p className="text-center">
          Don't have account?
          <NavLink
            className="text-blue-600 hover:border-b-1 text-lg"
            to={"/signup"}
          >
            {" "}
            Create now
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
