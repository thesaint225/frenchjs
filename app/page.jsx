import connecteDb from "@/config/db";
import Blog from "@/models/posts";
import CallToActionWithIllustration from "@/components/Hero";
import SmallWithSocial from "@/components/footer";
import { signIn } from "@/auth";
import BlogCard from "@/components/BlogCard";

export default async function Home() {
  console.log(process.env.MONGODB_URI);
  connecteDb();

  // create a new  instance of blogs
  const newBlog = new Blog({
    owner: "Henri Miessan",
    title: "les verbes en francais",
    description: "lorem mfjejr",
    content: "henri has gone to school",
  });

  const newBlog1 = new Blog({
    owner: "damy ",
    title: "danser",
    description: "les verbes en englais",
    content: "Emma dansent ",
  });
  const newBlog2 = new Blog({
    owner: "Emma ",
    title: "les garcons de la ville",
    description: "les verbes en allemand",
    content: "regarder les filles ",
  });

  const newPost = new Blog({
    title: "My First Blog Post in french",
    description: "This is the description of my first blog post",
    content: "his is the content of my first blog post. ",
  });

  console.log(newBlog, newBlog1);

  newBlog,
    newBlog1
      .save()
      .then((savedBlog) => {
        console.log("blog saved successfully:", savedBlog);
      })
      .catch((error) => {
        console.error("Error saving blog:", error);
      });

  newBlog2
    .save()
    .then((savedBlog) => {
      console.log("blog saved successfully:", savedBlog);
    })
    .catch((error) => {
      console.error("Error saving blog:", error);
    });

  newPost
    .save()
    .then((savedBlog) => {
      console.log("blog saved successfully:", savedBlog);
    })
    .catch((error) => {
      console.error("Error saving blog:", error);
    });

  return (
    <>
      <CallToActionWithIllustration />
      <h1>Welcome to learn french</h1>
      <SmallWithSocial />
      {/* <BlogCard /> */}
    </>
  );
}
