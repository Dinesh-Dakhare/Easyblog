import React, { useState } from "react";

import axios from "axios";
import Card from "../Card.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserDataContext } from "../../context/UserContext.jsx";
import { useEffect } from "react";
const Main = () => {
  const navigate = useNavigate();
  const [blogtoggler, setBlogToggler] = useState(false);
  const [blogs, setBlogs] = useState(null);
 

  const getBlog = async (status) => {
    setBlogToggler((prev) => !prev);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/blog/blogs`,{status},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 200) {
        console.log(res.data);
        setBlogs(res.data.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlog();
  }, []);

   if (blogs?.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <p className="text-gray-500">No blogs found. Create your first blog post!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {
          blogs?.map(elem=>{
            return   <Card blog={elem} key={elem._id} />
          })
        }
      
    </div>
  );
};

export default Main;
