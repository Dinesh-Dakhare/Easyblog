import React, { useState } from "react";
import TagInput from "../TagInput.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: [],
    status: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleTagsChange = (tags) => {
    setFormData((prev) => ({ ...prev, tags }));
  };

  const handlePublish = async (statusString) => {
    console.log(statusString);

    const updatedFormData = { ...formData, status: statusString };
    setFormData(updatedFormData);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/blog/createblog`,
        updatedFormData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 201) {
        toast(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(res.data);
        setFormData({
          title: "",
          content: "",
          tags: [],
          status: " ",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="space-y-6 mb-6">
      <div className="space-y-2">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={(e) => handleChange(e)}
          placeholder="Enter blog title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={(e) => handleChange(e)}
          placeholder="Write your blog content here..."
          rows={12}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-y"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="tags"
          className="block text-sm font-medium text-gray-700"
        >
          Tags
        </label>
        <TagInput tags={formData.tags} onChange={handleTagsChange} />
      </div>

      <div className="flex items-center justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors hover:cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => handlePublish("draft")}
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          Save as Draft
        </button>
        <button
          type="button"
          onClick={() => handlePublish("published")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Publish
        </button>
      </div>
    </form>
  );
};
