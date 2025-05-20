import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { convertDate } from '../../helper/convertDate.js'
const Blog = () => {
  const {id} = useParams()
const [blog,setBlog]=useState()
  
  const getSingleBlog = async (status) => {
    

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/blog/blogs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 200) {
        console.log(res.data);
        setBlog(res.data.blog);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   console.log(id);
   getSingleBlog()
   
  }, [])
  
  return (
    <div className='flex justify-center lg:mt-15'>
    <div className=' space-y-2 lg:w-[60%] '>
        <h1 className='font-semibold text-2xl lg:text-4xl'>{blog?.title}</h1>
        <p className='text-sm text-slate-600 lg:pb-4 lg:text-lg'>Last Updated :{convertDate(blog?.createdAt)}</p>
        <p className='text-base lg:text-xl font-medium text-justify'> {blog?.content}</p>
    </div>
    </div>
  )
}

export default Blog