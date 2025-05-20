import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import {faEye}from"@fortawesome/free-regular-svg-icons"
import { convertDate } from "../helper/convertDate.js";
import axios from "axios";
const Card = ({blog}) => {
  const onDelete=async(blogId)=>{

  try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/blog/deleteblog/${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 200) {
        console.log(res.data);
       
      }
    } catch (error) {
      console.log(error);
    }


  }
  return (

     <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-gray-900 mb-1 line-clamp-1">{blog?.title}</h3>
          <span 
            className={`px-2 py-1 text-xs rounded-full ${
              blog?.status === 'published' 
                ? 'bg-emerald-100 text-emerald-800' 
                : 'bg-amber-100 text-amber-800'
            }`}
          >
            {blog?.status === 'published' ? 'Published' : 'Draft'}
          </span>
        </div>
        
        <p className="text-gray-500 text-sm mb-3">Last updated: {convertDate(blog?.createdAt)}</p>
        
        <p className="text-gray-700 mb-4 line-clamp-2">
          {blog.content.length > 150 ? blog.content.substring(0, 150) + '...' : blog.content}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {blog?.tags.map(tag => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full"
            >
              {tag}
            </span>
          ))}
          {blog?.tags.length === 0 && (
            <span className="text-xs text-gray-400">No tags</span>
          )}
        </div>
        
        <div className="flex justify-end gap-2 pt-2">
          <NavLink to={`/blog/${blog._id}`}
          
            className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
          >
           <FontAwesomeIcon icon={faEye} />
          </NavLink>
        
          <button 
            onClick={() => onDelete(blog?._id)}
            className="p-1.5 text-red-600 hover:text-red-900 hover:bg-red-50 rounded-md transition-colors"
          >
    <FontAwesomeIcon icon={faTrash} className="text-red-700"/>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
