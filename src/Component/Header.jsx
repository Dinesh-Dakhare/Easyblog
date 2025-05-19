import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropDown = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <header className="flex justify-between pb-5 md:pb-10 lg:w-100vh  ">
      <div onClick={(homeNavigation) => navigate("/")}>
        <h1 className="text-black font-semibold text-2xl md:pt-2 md:text-3xl hover:cursor-pointer">EASYBLOG</h1>
      </div>
      <div className="md:hidden" onClick={() => dropDown()}>
        <FontAwesomeIcon icon={faBarsStaggered} className="text-xl " />
      </div>
      <div className="max-sm:hidden flex gap-10 ">
        <NavLink to={"/login"} className="pt-2 md:text-xl font-medium">LOGIN</NavLink>
        <NavLink
          to={"/blogform"}
          className="rounded-lg text-blue-600 border p-2 md:text-xl font-medium"
        >
          NEW BLOG
        </NavLink>
      </div>

      {/*Mobile view*/}
      <div
        className={
          "fixed right-5 top-18  border-3 rounded-xl border-slate-200 z-20 transition duration-150 delay-100 ease-in-out bg-white  " +
          (!open ? "translate-x-100" : "translate-x-0 ")
        }
      >
        <div className="grid w-[10rem] p-2 rounded-lg text-lg font-medium space-y-2  ">
          <NavLink>LOGIN</NavLink>
          <NavLink to={"/blogform"} className="" onClick={() => dropDown()}>
            NEW BLOG
          </NavLink>
        </div>
      </div>
    </header>
  );
};
