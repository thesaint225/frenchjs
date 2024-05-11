import AdminDashboard from "@/components/AdminDashbord";
import BlogCard from "@/components/BlogCard";
import ButtonDelete from "@/components/Buttondelete";
import fetchblogs from "@/utility/fetchblogs";

const Dashboard = async () => {
  const blogs = await fetchblogs();
  console.log(blogs);

  return (
    <>
      <main className="max-w-5xl mx-auto flex flex-row flex-wrap justify-center">
        {blogs.map((blog) => {
          return <AdminDashboard key={blog._id} blog={blog} />;
        })}
      </main>
    </>
  );
};

export default Dashboard;
