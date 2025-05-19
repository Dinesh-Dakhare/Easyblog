import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
const Signup = () => {
  return (
    <div className="min-h-screen max-md:space-y-20 flex-row mx-auto max-md:mt-10 p-4 md:grid md:items-center md:justify-center">
      <NavLink
        to={"/"}
        className="bg-slate-100 flex p-2 rounded-full justify-center items-center w-[2.5rem]"
      >
        <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
      </NavLink>
      <div className="space-y-12  h-full px-2">
        <form action="" className=" space-y-5">
          <h1 className="text-3xl font-bold pb-4">
            Hello! Register to get started
          </h1>
          <input
            type="text"
            className="w-full px-2 py-4 bg-slate-100 rounded-sm placeholder:text-xl "
            placeholder="Username"
          />
          <input
            type="email"
            className="w-full px-2 py-4 bg-slate-100  rounded-sm placeholder:text-xl"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full px-2 py-4 bg-slate-100  rounded-sm placeholder:text-xl"
            placeholder="Password"
          />
        </form>
        <button className="w-full bg-slate-900 font-semibold text-white rounded-lg text-2xl p-4">
          Register
        </button>
        <p className="text-center">
          Already have an account?
          <NavLink
            className="text-blue-600 hover:border-b-1 text-lg "
            to={"/login"}
          >
            {" "}
            Login now
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
