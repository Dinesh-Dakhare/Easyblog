import React, { useState, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const TagInput = ({ tags, onChange }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        onChange([...tags, input.trim()]);
      }
      setInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    onChange(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-wrap gap-2 p-2 border rounded-md bg-white min-h-12">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center px-2 py-1 bg-indigo-100 text-indigo-800 rounded-md gap-1 text-sm group"
          >
            <span>{tag}</span>
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="text-indigo-500 hover:text-indigo-700 transition-colors"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder={tags.length ? "Add more tags..." : "Add tags..."}
          className="flex-grow outline-none min-w-[120px] py-1"
        />
      </div>
      <p className="text-sm text-gray-500">Press Enter to add a tag</p>
    </div>
  );
};

export default TagInput;
