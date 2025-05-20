import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { useEffect } from "react";
export const Header = () => {

;
  const token = localStorage.getItem("token")
  
  return (
    // 
     <header className="bg-white shadow-sm mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
          
            <NavLink to={'/'} className="text-2xl font-bold text-gray-900">EASYBLOG</NavLink>
          </div>
             <div className="flex gap-10">
               {!token ? (
          <NavLink to={"/login"} className="pt-2 md:text-xl font-medium">
            LOGIN
          </NavLink>
        ) : (
          <NavLink to={"/logout"} className="pt-2 md:text-xl font-medium">
            LOGOUT
          </NavLink>
        )}
          <button
          
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center"
          >
         
            <NavLink to={"/blogform"}>New Blog</NavLink>
          </button>
             </div>
        </div>
      </div>
    </header>
  );
};
