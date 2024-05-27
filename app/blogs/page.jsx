import BlogCard from "@/components/BlogCard";

import BlogEditForm from "@/components/BlogEditForm";
import ButtonDelete from "@/components/Buttondelete";
import { Link } from "@chakra-ui/react";

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
  console.log(blogs);
  //   console.log(blogs.length);

  return (
    <>
      <main className="max-w-5xl mx-auto flex flex-row flex-wrap justify-center">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </main>
    </>
  );
};

export default Blogspage;
