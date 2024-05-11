import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Row } from "react-bootstrap";

const AdminDashboard = ({ blog }) => {
  const getFirst15Words = (content) => {
    // Split the content into an array of words
    const words = content.split(" ");
    // Take the 15 words and join them back into string
    return words.slice(0, 15).join(" ");
  };
  return (
    // <Stack spacing={4} direction="column" align="center">
    <VStack
      divider={<hr />}
      spacing={4}
      align="stretch"
      width="100%"
      maxWidth="600px"
      margin="auto"
    >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <VStack align="stretch">
            <CardBody>
              <Heading size="md">{blog.owner}</Heading>

              <Text py="2">{getFirst15Words(blog.content)}</Text>
            </CardBody>
          </VStack>

          <CardFooter>
            <Stack spacing={4} direction="row" align="center">
              <Button variant="solid" colorScheme="blue">
                Add Blog
              </Button>

              <Button variant="solid" colorScheme="blue">
                Edit
              </Button>
            </Stack>
          </CardFooter>
        </Stack>
      </Card>
    </VStack>
  );
};

export default AdminDashboard;
