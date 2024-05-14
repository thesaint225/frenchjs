import AdminDashboard from "@/components/AdminDashbord";
import BlogCard from "@/components/BlogCard";
import ButtonDelete from "@/components/Buttondelete";
import fetchblogs from "@/utility/fetchblogs";
import { Box, Button, Link } from "@chakra-ui/react";

const Dashboard = async () => {
  const blogs = await fetchblogs();
  console.log(blogs);

  return (
    <>
      <Box className="justify-between">
        <main className="max-w-5xl mx-auto flex flex-row flex-wrap justify-center ">
          {blogs.map((blog) => {
            return <AdminDashboard key={blog._id} blog={blog} />;
          })}
          <Button variant="solid" colorScheme="green">
            <Link href="/dashboard/addblog">Add</Link>
          </Button>
        </main>
      </Box>
    </>
  );
};

export default Dashboard;
