"use client";

import React from "react";
import { useState } from "react";

const CreateQuestion = ({ blogId }) => {
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([
    {
      text: "",
      isCorrect: false,
    },
  ]);

  const handleOptionChange = (index, key, value) => {
    const newOptions = [...options];
    newOptions[index][key] = [value];
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options], [{ text: "", isCorrect: false }]);
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/questions?blogId=${blogId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, options }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Options:</label>
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="text"
                value={option.text}
                onChange={(e) =>
                  handleOptionChange(index, "text", e.target.value)
                }
              />
              <input
                type="checkbox"
                checked={option.isCorrect}
                onChange={(e) =>
                  handleOptionChange(index, "isCorrected", e.target.value)
                }
              />
              <button type="button" onClick={() => handleRemoveOption(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddOption}>
            Add Option
          </button>
        </div>
        <button type="submit"> Create Question </button>
      </form>
    </div>
  );
};

export default CreateQuestion;
