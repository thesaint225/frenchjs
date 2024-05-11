import fetchblogs from "@/utility/fetchblogs";

const Dashboard = async () => {
  const blogs = await fetchblogs();
  console.log(blogs);

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div>
            key={blog._id}
            <h1>{blog.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
