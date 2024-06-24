"use client";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import Statistic from "@/components/Statistic";

const { log } = console;
const blogpage = () => {
  const [owner, setOwner] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [image, setImage] = useState("");

  log(owner);
  log(title);
  log(description);
  log(content);

  // creating a function that to upload the image

  const handleSubmit = async (e) => {
    e.preventDefault();
    const plainContent = parse(content);
    const teamPayload = {
      owner,
      title,
      description,
      content: plainContent,
      image,
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
    <>
      <Heading>
        <Statistic />
      </Heading>
    </>
  );
};

export default blogpage;
