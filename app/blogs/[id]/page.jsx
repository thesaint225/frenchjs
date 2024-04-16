"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchBlog } from "@/utils/request";
const BlogPage = () => {
  const { _id } = useParams;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchblogData = async () => {
      if (!_id) return;
      try {
        const blog = await fetchBlog(_id);
        setBlog(blog);
      } catch (error) {
        console.error("Error fetching  blog :", error);
      } finally {
        setLoading(false);
      }
    };
    if (blog === null) {
      fetchblogData();
    }
  }, [_id, blog]);

  return (
    <div>
      <h2>Single blog</h2>
    </div>
  );
};

export default BlogPage;
