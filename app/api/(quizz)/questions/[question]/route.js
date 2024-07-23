import Blog from "@/models/posts";
import Question from "@/models/(quizz)/question";
import connecteDb from "@/config/db";
import { Types } from "mongoose";

export const PATCH = async (request, context) => {
  const questionId = context.params.question;
  try {
    const body = await request.json();
    const { title, options } = body;

    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("blogId");
    if (!blogId || !Types.ObjectId.isValid(blogId)) {
      return new Response(JSON.stringify({ message: "blog Id not found" }), {
        status: 400,
      });
    }
    if (!questionId || !Types.ObjectId.isValid(questionId)) {
      return new Response(
        JSON.stringify({ message: "question id not found" }),
        {
          status: 400,
        }
      );
    }

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return Response(JSON.stringify({ message: "blog not found" }));
    }

    await connecteDb();

    const question = await Question.findOne({ _id: questionId });
    if (!question) {
      return new Response(JSON.stringify({ message: "question not found" }), {
        status: 400,
      });
    }

    // Update the question's title if provided
    if (title) {
      question.title = title;
    }
    // Update the question's options if provided
    if (options && Array.isArray(options)) {
      options.forEach((updatedOption) => {
        const optionIndex = question.options.findIndex(
          (option) => option._id.toString() === updatedOption._id
        );
        if (optionIndex !== -1) {
          question.options[optionIndex].text = updatedOption.text;
          question.options[optionIndex].isCorrect = updatedOption.isCorrect;
        }
      });
    }

    await question.save();

    return new Response(
      JSON.stringify({ message: "question updated", updateQuestion: question }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "error occurred while updating the question" }),
      { status: 500 }
    );
  }
};

export const DELETE = async (request, context) => {
  const questionId = context.params.question;
  try {
    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("blogId");
    if (!blogId || !Types.ObjectId.isValid(blogId)) {
      return new Response(JSON.stringify({ message: "blog Id not found" }), {
        status: 400,
      });
    }
    if (!questionId || !Types.ObjectId.isValid(questionId)) {
      return new Response(
        JSON.stringify({ message: "question id not found" }),
        {
          status: 400,
        }
      );
    }

    await connecteDb();

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return new Response(JSON.stringify({ message: "blog not found" }), {
        status: 404,
      });
    }
    const question = await Question.findOne({ _id: questionId });
    if (!question) {
      return new Response(
        JSON.stringify({ message: "question not found " }, { status: 404 })
      );
    }
    const deletedQuestion = await Question.findByIdAndDelete(questionId);
    return new Response(
      JSON.stringify({
        message: "question successfully deleted",
        question: deletedQuestion,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "error occurred while deleting question " }),
      { status: 400 }
    );
  }
};
