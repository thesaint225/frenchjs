import connecteDb from "@/config/db";
import Blog from "@/models/posts";

const { log } = console;

// GET api/blogs
export const GET = async (req) => {
  try {
    await connecteDb();
    const blogs = await Blog.find({});
    // console.log(blogs);
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

    console.log(req);

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
