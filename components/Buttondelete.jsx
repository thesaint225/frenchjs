// Delete Blogs
"use client";

import { Button } from "@chakra-ui/react";

const ButtonDelete = ({ slug }) => {
  console.log(slug);

  const handleDelete = async () => {
    console.log(slug);
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/blogs/${slug}`,

        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <Button variant="solid" colorScheme="red" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default ButtonDelete;
