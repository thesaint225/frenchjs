"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchBlog } from "@/utility/request";
import ArticleList from "@/components/SinglePost";

const Blogpage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!slug) return;
      try {
        const blog = await fetchBlog(slug);
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
  }, [slug, blog]);

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
