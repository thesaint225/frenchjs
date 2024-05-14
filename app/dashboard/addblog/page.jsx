"use client";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";

const { log } = console;
const blogpage = () => {
  const [owner, setOwner] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  log(owner);
  log(title);
  log(description);
  log(content);

  const handleSubmit = async (e) => {
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
        method: "POST",
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
    <Heading>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>
        <form>
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
            {/* <textarea
              onChange={({ target }) => setContent(target?.value)}
              id="content"
              name="content"
              value={content}
              rows="6"
              className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
              required
            ></textarea> */}
            <ReactQuill theme="snow" value={content} />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Content Preview
            </label>
            <div className="w-full px-4 py-2 border rounded-md">
              {parse(content)}
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </Heading>
  );
};

export default blogpage;
