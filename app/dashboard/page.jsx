import AdminDashboard from "@/components/AdminDashbord";
import BlogCard from "@/components/BlogCard";
import ButtonDelete from "@/components/Buttondelete";
import fetchblogs from "@/utility/fetchblogs";
import { Box, Button, Link, AbsoluteCenter } from "@chakra-ui/react";

const Dashboard = async () => {
  const blogs = await fetchblogs();
  console.log(blogs);

  return (
    <>
      <Box>
        <Box position="relative" h="100px">
          <AbsoluteCenter p="4" axis="both">
            <Button variant="solid" colorScheme="green" size="lg" mr={3}>
              <Link href="/dashboard/addblog">Add</Link>
            </Button>
          </AbsoluteCenter>
        </Box>
        <main>
          {blogs.map((blog) => {
            return <AdminDashboard key={blog._id} blog={blog} />;
          })}
        </main>
      </Box>
    </>
  );
};

export default Dashboard;
