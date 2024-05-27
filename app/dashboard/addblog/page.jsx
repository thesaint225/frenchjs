"use client";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import Statistic from "@/components/Statistic";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";

const { log } = console;
const blogpage = () => {
  const [owner, setOwner] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // learning cloudinary

  const [imageId, setImageId] = useState("");

  log(owner);
  log(title);
  log(description);
  log(content);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const plainContent = parse(content);
    const teamPayload = {
      owner,
      title,
      description,
      content: plainContent,
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
        <CldUploadButton uploadPreset="pcgb9hrq" />
        {imageId && (
          <CldImage
            width="960"
            height="600"
            src="{imageId}"
            sizes="100vw"
            alt="Description of my image"
          />
        )}
      </Heading>
    </>
  );
};

export default blogpage;
