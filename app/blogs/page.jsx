import BlogEditForm from "@/component/BlogEditForm";
import ButtonDelete from "@/component/Buttondelete";

async function fetchblogs() {
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/blogs`, {
    //   method: "GET",
    // });
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/blogs`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const Blogspage = async () => {
  const blogs = await fetchblogs();
  //   console.log(blogs);
  //   console.log(blogs.length);
  return (
    <>
      <main className="max-w-5xl mx-auto flex flex-row flex-wrap justify-center">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white overflow-hidden shadow-sm rounded-lg w-80 m-4"
          >
            {/* Title */}
            <h1 className="text-3xl font-bold p-6 border-b">{blog.title}</h1>

            {/* Owner */}
            <div className="flex items-center p-6 border-b">
              <div>
                <h2 className="text-lg font-semibold">{blog.owner}</h2>
                {/* <p className="text-gray-600">Author</p> */}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg p-6 border-b">
              {blog.description}
            </p>

            {/* Content */}
            <div className="prose p-6">
              <p>{blog.content}</p>
            </div>
            <ButtonDelete _id={blog._id} />
          </div>
        ))}
      </main>
    </>
  );
};

export default Blogspage;
