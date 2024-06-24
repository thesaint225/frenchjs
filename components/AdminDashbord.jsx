import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
  Link,
  StackDivider,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import ButtonDelete from "./Buttondelete";
function Feature({ title, desc, _id, slug }) {
  console.log(slug);
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        mt={6}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">
              <Link href={`/blogs/${_id}`}>{title}</Link>
            </Heading>

            <Text py="2">{desc}</Text>
          </CardBody>

          <CardFooter>
            <ButtonDelete slug={slug} />
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}

const AdminDashboard = ({ blog }) => {
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
      <Stack divider={<StackDivider />} spacing="4">
        <Feature
          title={blog.title}
          desc={blog.content}
          _id={blog._id}
          slug={blog.slug}
        />
      </Stack>
    </>
  );
};

export default AdminDashboard;
