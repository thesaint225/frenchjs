import connecteDb from "@/config/db";
import Blog from "@/models/posts";

// GET api/blogs
export const GET = async (req) => {
  try {
    await connecteDb();
    const blogs = await Blog.find({});

    console.log("blogs", blogs);
    // console.log(blogs.length + 1);
    return new Response(JSON.stringify(blogs), {
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

// POST api/blogs

export const POST = async (request) => {
  try {
    await connecteDb();

    // Extract data from the request body

    const req = await request.json();

    console.log("req", req);

    // Create a new blog instance
    const newBlog = new Blog(req);

    // Save the new blog to the database
    await newBlog.save();
    log("new blog :", newBlog);

    return new Response(
      JSON.stringify({ message: "Blog created successfully" }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// PUT/api/blogs
export const PUT = async (request, { params: { _id } }) => {
  console.log("This is the id:", _id);
  try {
    await connecteDb();

    const blog = await Blog.findOneAndUpdate(_id);

    if (!blog) return new Response("Property not found", { status: 404 });

    revalidatePath("/blogs");
    redirect("/blogs");
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
