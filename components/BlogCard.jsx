// "use client";

import {
  Heading,
  Text,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import CreateQuestion from "./(questions)/CreateQuestion";

export default function BlogCard({ blog }) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mt={2}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={blog.image}
        alt="Caffe Latte"
        borderRadius="12px"
        fontSize="16px"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{blog.title}</Heading>

          <Text py="2">{blog.description}</Text>
        </CardBody>

        <CardFooter>
          <Stack spacing={4} direction="row" align="center">
            <Button variant="solid" colorScheme="blue">
              <Link href={`/blogs/${blog.slug}`}>lesson</Link>
            </Button>
            <Button variant="solid" colorScheme="cyan">
              {/* <CreateQuestion /> */}
            </Button>
          </Stack>
        </CardFooter>
      </Stack>
    </Card>
  );
}
