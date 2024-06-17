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

  return (
    <>
      <Heading>
        <Statistic />
      </Heading>
    </>
  );
};

export default blogpage;
