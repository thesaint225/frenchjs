import connecteDb from "@/config/db";
import Question from "@/models/(quizz)/question";
import Blog from "@/models/posts";
import { Types } from "mongoose";
export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("blogId");

    if (!blogId || !Types.ObjectId.isValid(blogId)) {
      return new Response(JSON.stringify({ message: "Invalid id" }), {
        status: 400,
      });
    }
    await connecteDb();
    const questions = await Question.find();
    return new Response(JSON.stringify(questions), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error occurred while fetching the questions",
      }),
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("blogId");

    console.log(blogId);
    if (!blogId || !Types.ObjectId.isValid(blogId)) {
      return new Response(JSON.stringify({ message: "Invalid id" }), {
        status: 400,
      });
    }

    const body = await request.json();
    await connecteDb();
    const newQuestions = new Question(body);
    await newQuestions.save();
    return new Response(
      JSON.stringify({
        message: "questions has been created",
        Question: newQuestions,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "error occured while creating questions" }),
      { status: 500 }
    );
  }
};
