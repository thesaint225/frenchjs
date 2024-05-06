"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchBlog } from "@/utils/request";
import ArticleList from "@/components/SinglePost";

const Blogpage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!id) return;
      try {
        const blog = await fetchBlog(id);
        setBlog(blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    if (blog === null) {
      fetchBlogData();
    }
  }, [id, blog]);

  if (!blog && !loading) {
    <h1 className="text-center text-2xl font-bold">Blog Not found</h1>;
  }

  return (
    <>
      {!loading && blog && (
        <>
          <ArticleList blog={blog} />
        </>
      )}
    </>
  );
};

export default Blogpage;
