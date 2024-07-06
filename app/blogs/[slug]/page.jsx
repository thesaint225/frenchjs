import { fetchBlog } from "@/utility/request";
import ArticleList from "@/components/SinglePost";

export default async function BlogPage({ params: { slug } }) {
  const blog = await fetchBlog(slug);

  if (!blog)
    return <h1 className="text-center text-2xl font-bold">Blog Not found</h1>;

  return <ArticleList blog={blog} />;
}
