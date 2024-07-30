"use client";

import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Stack,
  Input,
  Box,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";

const QuestionForm = () => {
  const [questions, setQuestions] = useState([
    { title: "", options: [false, false, false] },
  ]);
  const handleTitleChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const handleCheckboxChange = (qIndex, cIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[cIndex] =
      !newQuestions[qIndex].options[cIndex];
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { title: "", options: [false, false, false] }]);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/questions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teamPayload),
        }
      );
      const data = await res.json();
      log("response back", data);
    } catch (error) {
      log("Error", error);
    }
  };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.50"
    >
      {questions.map((question, qIndex) => (
        <Box
          key={qIndex}
          p={4}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          width={{ base: "90%", md: "50%" }}
          mb={6}
        >
          <Input
            placeholder={`Enter question ${qIndex + 1}`}
            value={question.title}
            onChange={(e) => handleTitleChange(qIndex, e.target.value)}
            mb={4}
          />
          <Stack pl={6} mt={1} spacing={1}>
            {(question.options || []).map((isChecked, cIndex) => (
              <Checkbox
                key={cIndex}
                isChecked={isChecked}
                onChange={() => handleCheckboxChange(qIndex, cIndex)}
              >
                Option {cIndex + 1}
              </Checkbox>
            ))}
          </Stack>
        </Box>
      ))}
      <Button onClick={addQuestion} colorScheme="teal" size="md">
        Add Question
      </Button>
      <Button onClick={handleSubmit} colorScheme="blue" size="md" mt={4}>
        Submit
      </Button>
    </Flex>
  );
};

export default QuestionForm;
