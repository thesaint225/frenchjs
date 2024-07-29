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
    { text: "", checkedItems: [false, false, false] },
    { text: "", checkedItems: [false, false, false] },
    { text: "", checkedItems: [false, false, false] },
  ]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCheckboxChange = (qIndex, cIndex) => {
    const newQuestions = [...questions];
    const newCheckedItems = [false, false, false];
    newCheckedItems[cIndex] = true;
    newQuestions[qIndex].checkedItems = newCheckedItems;
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].text = value;
    setQuestions(newQuestions);
  };

  const createQuestion = aync (question)=>{
    const response = await fetch($`{process.env.NEXT_PUBLIC_API_DOMAIN}/questions`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(question)
    }
      
    )
  }

  const updateQuestionWithCheckboxes = (qIndex, cIndex, value) => {
    const newQuestions = [...questions];
    const newCheckedItems = [false, false, false];
    newCheckedItems[cIndex] = value;
    newQuestions[qIndex].checkedItems = newCheckedItems;
    setQuestions(newQuestions);
  };

  const handleSubmit = () => {
    // Logic to handle form submission
    console.log(questions);
    // For example, you could send the questions data to an API endpoint
    // fetch('/api/questions', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ questions }),
    // });
  };

  if (!isMounted) {
    return null; // or a loading indicator
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh" // Full viewport height to center vertically
      bg="gray.50" // Optional: Background color for better visibility
    >
      {questions.map((question, qIndex) => (
        <Box
          key={qIndex}
          p={4}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          width={{ base: "90%", md: "50%" }} // Responsive width
          mb={6} // Margin bottom for spacing between questions
        >
          <Input
            placeholder={`Write your question ${qIndex + 1} here`}
            value={question.text}
            onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
            mb={4} // Margin bottom for spacing
          />
          <Stack pl={6} mt={1} spacing={1}>
            {question.checkedItems.map((isChecked, cIndex) => (
              <Checkbox
                key={cIndex}
                isChecked={isChecked}
                onChange={() => handleCheckboxChange(qIndex, cIndex)}
              >
                Child Checkbox {cIndex + 1}
              </Checkbox>
            ))}
          </Stack>
          <Box mt={4}>
            <Text fontWeight="bold">Your Question {qIndex + 1}:</Text>
            <Text>{question.text}</Text>
          </Box>
          <Button onClick={updateQuestionWithCheckboxes}>update</Button>
        </Box>
      ))}
      <Button onClick={handleSubmit} colorScheme="blue" size="md">
        Submit
      </Button>
      <Button onClick={addQuestionWithCheckboxes}>add question</Button>
    </Flex>
  );
};

export default QuestionForm;
