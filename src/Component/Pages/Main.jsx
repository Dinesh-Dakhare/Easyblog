import React, { useState } from "react";
import Card from "../Card.jsx";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  const [blogtoggler, setBlogToggler] = useState(false);
  const[currentTab,setCurrentTab]=useState("Blog")
  const blogPreviewHandle = () => {
    console.log("hellow");
    navigate("/blog");
  };
  const blogTogglerHandler = () => {
    setBlogToggler((prev) => !prev);
    console.log(blogtoggler);
  };
  return (
    <div className="space-y-5 ">
      <div className="w-full h-13 rounded-3xl bg-slate-200 flex justify-between items-center md:bg-white md:justify-start md:text-2xl md:ms-[-1rem] ">
        <div
          onClick={() => blogTogglerHandler()}
          className={
            "  font-semibold max-md:rounded-3xl p-2 w-40 h-10 ms-2 text-center transition duration-200 delay-100 ease-in-out md:text-center active: cursor-pointer  " +
            (blogtoggler ? " " : "bg-white text-blue-600 ")
          }
        >
          Blogs
        </div>
        <div
          onClick={() => blogTogglerHandler()}
          className={
            "  font-semibold rounded-3xl p-2 w-40 h-10 me-2 text-center transition duration-300 delay-100 ease-in-out md:text-start md:me-16 active:text-blue-600 cursor-pointer " +
            (blogtoggler ? "bg-white text-blue-600 " : " ")
          }
        >
          Draft
        </div>
      </div>
      <div
        className="md:grid grid-cols-2 gap-6 max-sm:space-y-4 md:w-full md:justify-between lg:grid-cols-3 lg:px-10 lg:pt-10"
        onClick={blogPreviewHandle}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
