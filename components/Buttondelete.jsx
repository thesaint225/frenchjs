"use client";

import { Button } from "@chakra-ui/react";

const ButtonDelete = ({ _id }) => {
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/blogs/${_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log("response back", data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <Button variant="solid" colorScheme="red" onClick={handleDelete}>
        Delete
      </Button>
      {/* <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:bg-red-600"
        onClick={handleDelete}
      >
        Delete
      </button> */}
    </div>
  );
};

export default ButtonDelete;
