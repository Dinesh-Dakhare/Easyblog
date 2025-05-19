import React ,{useState}from "react";
import TagInput from "../TagInput.jsx";

export const BlogForm = () => {
    const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: [],
    status: 'draft'
  });
    const handleTagsChange = (tags) => {
    setFormData(prev => ({ ...prev, tags }));
  };
  return (
    // <div className=" space-y-5 lg:space-y-10">
    //   <h1 className="font-bold text-xl md:text-2xl lg:text-3xl ">Create your blog</h1>
    //   <form className="space-y-10 lg:space-y-10">
    //     <label className="block text-lg font-medium" htmlFor="">Title</label>
    //     <input
    //       type="text"
    //       className="w-full p-2 rounded-md  placeholder:text-lg  drop-shadow-sm  lg:text-xl lg:drop-shadow-lg border outline-blue-500"
    //       placeholder="Enter blog title"
    //     />
    //     <label className="text-lg font-medium" htmlFor="">Content</label>

    //     <textarea
    //       name=""
    //       id=""
    //       className="w-full  p-2 rounded-md border placeholder:text-lg drop-shadow-sm resize-none lg:text-xl lg:drop-shadow-lg outline-blue-500 "
    //       placeholder="Write your blog content here..."
    //       style={{height:'22rem'} }
    //     />
    //     <label className="text-lg font-medium" htmlFor="">Tags</label>

    //     <input
    //       type="text"
    //       placeholder="Add tags..."
    //       className="w-full p-2 rounded-md border placeholder:text-lg drop-shadow-sm lg:text-xl lg:drop-shadow-lg outline-blue-500"
    //     />
    //   </form>
    //   <div className="flex gap-4 ">
    //     <button className="px-2 py-1 bg-slate-800 text-white rounded-lg text-sm md:text-lg md:px-4   lg:hover:bg-slate-900 transition-colors cursor-pointer ">
    //       Save as draft
    //     </button>
    //     <button className="px-2 py-2 border-1 bg-indigo-600 rounded-lg text-sm  md:text-lg md:px-4 lg:drop-shadow-lg text-white lg:hover:bg-indigo-700 transition-colors cursor-pointer">
    //       Publish
    //     </button>
    //   </div>
    // </div>
      <form className="space-y-6 mb-6">
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={()=>handleChange()}
          placeholder="Enter blog title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={()=>handleChange()}
          placeholder="Write your blog content here..."
          rows={12}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-y"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
          Tags
        </label>
        <TagInput tags={formData.tags} onChange={handleTagsChange} />
      </div>
      
      <div className="flex items-center justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={()=>onCancel()}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={()=>handleSaveDraft()}
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          Save as Draft
        </button>
        <button
          type="button"
          onClick={()=>handlePublish()}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Publish
        </button>
      </div>
    </form>
  );
};
