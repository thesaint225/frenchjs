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

    if (!blog) return new Response("Property not found", { status: 404 });

    revalidatePath("/blogs");
    redirect("/blogs");
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
