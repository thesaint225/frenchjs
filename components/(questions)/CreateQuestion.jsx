"use client";

import React, { useState, useEffect } from "react";
import { Checkbox, Stack, Input, Box, Text } from "@chakra-ui/react"; // Import from Chakra UI or your component library

const CreateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [checkedItems, setCheckedItems] = useState([false, false, false]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [false, false, false];
    newCheckedItems[index] = true;
    setCheckedItems(newCheckedItems);
  };

  if (!isMounted) {
    return null; // or a loading indicator
  }

  return (
    <Box>
      <Input
        placeholder="Write your question here"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        mb={4} // Margin bottom for spacing
      />
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={() => handleCheckboxChange(0)}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={() => handleCheckboxChange(1)}
        >
          Child Checkbox 2
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[2]}
          onChange={() => handleCheckboxChange(2)}
        >
          Child Checkbox 3
        </Checkbox>
      </Stack>
      <Box mt={4}>
        <Text fontWeight="bold">Your Question:</Text>
        <Text>{question}</Text>
      </Box>
    </Box>
  );
};

export default CreateQuestion;
