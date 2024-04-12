import Image from "next/image";
import connecteDb from "@/config/db";
import Blog from "@/models/posts";

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

  return (
    <>
      <addForm />
      <h1>Welcome to learn french</h1>
    </>
  );
}
