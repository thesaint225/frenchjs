"use client";

import {
  Heading,
  Container,
  VStack,
  Center, // Import Center component
} from "@chakra-ui/react";
import { marked } from "marked";

import { CldImage } from "next-cloudinary";

const ArticleList = ({ blog }) => {
  return (
    <Center>
      {" "}
      {/* Wrap the content in Center component */}
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">{blog.title}</Heading>
        <CldImage
          width="960"
          height="600"
          src={blog.image}
          sizes="100vw"
          alt="Description of my image"
        />

        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What we write about</Heading>

          <div
            dangerouslySetInnerHTML={{
              __html: marked(blog.content),
            }}
          />
        </VStack>
      </Container>
    </Center>
  );
};

export default ArticleList;
