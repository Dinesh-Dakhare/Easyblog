import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
const Card = () => {
  return (
    <div className="border-1 p-2 rounded-md shadow-md md:w-[21rem] md:p-2 lg:w-[30rem] lg:p-4 lg:hover:shadow-lg hover:cursor-pointer  ">
      <h1 className="font-medium text-lg md:text-2xl md:pb-1 ">Your Blog title</h1>
      <p className="text-sm pb-1 md:text-base md:pb-2 lg:pb-4">Last Updated May 17, 2025</p>
      <p className="text-sm line-clamp-2 md:text-lg md:pb-2 ">
        your blog content should be shown here. your beautiful content
      </p>
      <p className="mt-2 text-xs w-fit  px-1 rounded-full bg-blue-200 text-blue-900 md:text-base">tags</p>
      <div className="flex gap-5 justify-end pr-2">
        <NavLink className="text-xl md:text-xl">
          <FontAwesomeIcon icon={faPenToSquare} className="text-blue-600"/>
        </NavLink>
        <NavLink className="text-xl md:text-xl">
          <FontAwesomeIcon icon={faTrash} className="text-red-700"/>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
