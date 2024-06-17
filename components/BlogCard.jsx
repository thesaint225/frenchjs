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

export default function BlogCard({ blog }) {
  return (
    // <Center py={6}>
    //   {blog.image && (
    //     <CldImage
    //       width="960"
    //       height="600"
    //       src={blog.image}
    //       sizes="100vw"
    //       alt="Description of my image"
    //     />
    //   )}
    //   <Box
    //     maxW={"445px"}
    //     w={"full"}
    //     // eslint-disable-next-line react-hooks/rules-of-hooks
    //     bg={useColorModeValue("white", "gray.900")}
    //     boxShadow={"2xl"}
    //     rounded={"md"}
    //     p={6}
    //     overflow={"hidden"}
    //   >
    //     <Box
    //       h={"210px"}
    //       bg={"gray.100"}
    //       mt={-6}
    //       mx={-6}
    //       mb={6}
    //       pos={"relative"}
    //     ></Box>
    //     {blog.image && (
    //       <CldImage
    //         width="100"
    //         height="20"
    //         src={blog.image}
    //         sizes="100vw"
    //         alt="Description of my image"
    //       />
    //     )}
    //     <Stack>
    //       <Text
    //         color={"green.500"}
    //         textTransform={"uppercase"}
    //         fontWeight={800}
    //         fontSize={"sm"}
    //         letterSpacing={1.1}
    //       >
    //         Blog
    //       </Text>
    //       <Heading
    //         // eslint-disable-next-line react-hooks/rules-of-hooks
    //         color={useColorModeValue("gray.700", "white")}
    //         fontSize={"2xl"}
    //         fontFamily={"body"}
    //       >
    //         <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
    //       </Heading>

    //       <Text color={"gray.500"}>
    //         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    //         nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    //         erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
    //         et ea rebum.
    //       </Text>
    //     </Stack>
    //     <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
    //       <Avatar
    //         src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
    //       />
    //       <Stack direction={"column"} spacing={0} fontSize={"sm"}>
    //         <Text fontWeight={600}>{blog.owner}</Text>
    //         <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
    //       </Stack>
    //     </Stack>
    //   </Box>
    // </Center>

    // <Card
    //   direction={{ base: "column", sm: "row" }}
    //   overflow="hidden"
    //   variant="outline"
    //   spacing={4}
    //   mt={4}
    // >
    //   <Image
    //     objectFit="cover"
    //     maxW={{ base: "100%", sm: "200px" }}
    //     src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
    //     alt="Caffe Latte"
    //   />

    //   {/* <Stack spacing={4} p={4} w="full" h="full"> */}

    //   <VStack spacing={4} p={4} align="stretch" flex="1">
    //     <CardBody>
    //       <Heading size="md">{blog.title}</Heading>

    //       <Text py="2" noOfLines={4}>
    //         {blog.description}
    //         Caffè latte is a coffee beverage of Italian origin made with
    //         espresso and steamed milk.
    //       </Text>
    //     </CardBody>

    //     <CardFooter>
    //       <Button variant="solid" colorScheme="blue">
    //         <Link href={`/blogs/${blog.slug}`}>lesson</Link>
    //       </Button>
    //     </CardFooter>
    //     {/* </Stack> */}
    //   </VStack>
    // </Card>
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
          <Button variant="solid" colorScheme="blue">
            <Link href={`/blogs/${blog.slug}`}>lesson</Link>
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
