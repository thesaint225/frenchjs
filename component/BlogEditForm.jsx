"use client";
import { useState } from "react";

const BlogEditForm = (_id, owner, title, description, content) => {
  //   const [loading, setLoading] = useState(false);
  //   const [owner, setOwner] = useState("");
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [content, setContent] = useState("");

  const handleInputchange = (e) => {
    setOwner(e.target.value);
    setTitle(e.target.value);
    setDescription(e.target.value);
    setContent(e.target.value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const teamPayload = {
      owner,
      title,
      description,
      content,
    };
    log("Payload:", teamPayload);
    setSubmitted(true);
    setOwner("");
    setTitle("");
    setDescription("");
    setContent("");

    // send data over the server
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/blogs`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teamPayload),
      });
      const data = await res.json();
      log("response back", data);
    } catch (error) {
      log("Error", error);
    }
  };
  return (
    <form onSubmit={handleUpdate}>
      {/* Owner Name */}
      <div className="mb-4">
        <label
          htmlFor="owner"
          className="block text-gray-700 font-semibold mb-2"
        >
          Owner Name
        </label>
        <input
          onChange={({ target }) => setOwner(target?.value)}
          placeholder="Enter your name"
          value={owner}
          type="text"
          id="owner"
          name="owner"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Title */}
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 font-semibold mb-2"
        >
          Title
        </label>
        <input
          onChange={({ target }) => setTitle(target?.value)}
          type="text"
          value={title}
          placeholder="Enter your title"
          id="title"
          name="title"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-semibold mb-2"
        >
          Description
        </label>
        <textarea
          onChange={({ target }) => setDescription(target?.value)}
          id="description"
          name="description"
          value={description}
          rows="4"
          className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </div>

      {/* Content */}
      <div className="mb-6">
        <label
          htmlFor="content"
          className="block text-gray-700 font-semibold mb-2"
        >
          Content
        </label>
        <textarea
          onChange={({ target }) => setContent(target?.value)}
          id="content"
          name="content"
          value={content}
          rows="6"
          className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Upadate
      </button>
    </form>
  );
};

export default BlogEditForm;
