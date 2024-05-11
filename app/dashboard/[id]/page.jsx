"use client";

// there mistake made here is that i used {-id} in the param that is
// directly used by the folder name but the folder has [id ] therefore conflit of name .it should
// be consist with the name

// any hook state in function and should be called has function
// example : useParams()with should invoke the function with the the baracket()

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchBlog } from "@/utility/request";
const BlogPage = () => {
  const { id } = useParams();

  console.log(id);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchblogData = async () => {
      if (!id) return;
      try {
        const blog = await fetchBlog(id);
        console.log(blog);
        setBlog(blog);
      } catch (error) {
        console.error("Error fetching  blog :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchblogData();
  }, [id]);

  if (!blog && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">Blog No found !</h1>
    );
  }

  return (
    <>
      {" "}
      {!loading && blog && (
        <>
          <div className="bg-white overflow-hidden shadow-sm rounded-lg w-80 m-4">
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
            {/* <ButtonDelete _id={blog._id} /> */}
          </div>
        </>
      )}
      ;
    </>
  );
};

export default BlogPage;
