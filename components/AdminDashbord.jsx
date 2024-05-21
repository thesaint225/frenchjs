import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
  Link,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Row } from "react-bootstrap";
import ButtonDelete from "./Buttondelete";
function Feature({ title, desc, _id }) {
  return (
    <VStack spacing={4} align="stretch">
      <Card>
        <CardHeader>
          <Heading size="md">
            <Link href={`/blogs/${_id}`}>{title}</Link>
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>{desc}</Text>
        </CardBody>
        <CardFooter>
          <HStack spacing={4}>
            {/* <Button variant="solid" colorScheme="green">
              <Link href="/dashboard/addblog">Add</Link>
            </Button> */}
            <Button variant="solid" colorScheme="blue">
              <Link href={`/dashboard/${_id}/edit`}> Edit </Link>
            </Button>

            <ButtonDelete _id={_id} />
          </HStack>
        </CardFooter>
      </Card>
    </VStack>
  );
}

const AdminDashboard = ({ blog }) => {
  const getFirst15Words = (content) => {
    // Split the content into an array of words
    const words = content.split(" ");
    // Take the 15 words and join them back into string
    return words.slice(0, 15).join(" ");
  };
  // return (
  //   // <Stack spacing={4} direction="column" align="center">
  //   <VStack
  //     divider={<hr />}
  //     spacing={4}
  //     align="stretch"
  //     width="100%"
  //     maxWidth="600px"
  //     margin="auto"
  //   >
  //     <Card
  //       direction={{ base: "column", sm: "row" }}
  //       overflow="hidden"
  //       variant="outline"
  //     >
  //       <Image
  //         objectFit="cover"
  //         maxW={{ base: "100%", sm: "200px" }}
  //         src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  //         alt="Caffe Latte"
  //       />

  //       <Stack>
  //         <VStack align="stretch">
  //           <CardBody>
  //             <Heading size="md">{blog.owner}</Heading>

  //             <Text py="2">{getFirst15Words(blog.content)}</Text>
  //           </CardBody>
  //         </VStack>

  //         <CardFooter>
  //           <Stack spacing={4} direction="row" align="center">
  //             <Button variant="solid" colorScheme="blue">
  //               Add Blog
  //             </Button>

  //             <Button variant="solid" colorScheme="blue">
  //               Edit
  //             </Button>
  //           </Stack>
  //         </CardFooter>
  //       </Stack>
  //     </Card>
  //   </VStack>
  // );
  return (
    <>
      <Stack spacing={8} direction="row">
        <Feature title={blog.title} desc={blog.content} _id={blog._id} />
      </Stack>
    </>
  );
};

export default AdminDashboard;
