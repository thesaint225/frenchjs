import connecteDb from "@/config/db";
import Blog from "@/models/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Delete/api/blogs
export const DELETE = async (request, { params: { _id } }) => {
  console.log("This is the id:", _id);
  try {
    await connecteDb();

    const blog = await Blog.findByIdAndDelete(_id);

    if (!blog) return new Response("Blog  not found", { status: 404 });

    revalidatePath("/blogs");
    redirect("/blogs");
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// GET api/blogs/:id
export const GET = async (req, { params: { slug } }) => {
  try {
    await connecteDb();
    const blog = await Blog.findOne({ slug });
    if (!blog) return new Response("blog Not Found", { status: 400 });
    return new Response(JSON.stringify(blog), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// PUT/api/blogs/:id
export const PUT = async (request, { params: { _id } }) => {
  const req = await request.json();
  try {
    await connecteDb();

    const blog = await Blog.findByIdAndUpdate(_id, req);

    if (!blog) return new Response("blog  not found", { status: 404 });

    revalidatePath("/blogs");
    revalidatePath(`/blogs/${_id}`);

    return new Response(JSON.stringify(blog));
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
