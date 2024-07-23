import connecteDb from "@/config/db";
import Result from "@/models/(quizz)/result";
import { Types } from "mongoose";

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(Request.url);
    const questionId = searchParams.get("questionId");
    if (!questionId || !Types.ObjectId.isValid(questionId)) {
      return new Response(JSON.stringify({ message: "invalid id" }));
    }

    await connecteDb();
    const results = await Result.find();
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("error occured while fetching result"), {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  try {
    // const { searchParams } = new URL(Request.url);
    // const questionId = searchParams.get("questionId");
    // if (!questionId || !Types.ObjectId.isValid(questionId)) {
    //   return new Response(JSON.stringify({ message: "invalid id" }));
    // }
    const body = await request.json();
    await connecteDb();
    const newResults = new Result(body);
    await newResults.save();
    return new Response(
      JSON.stringify({
        message: "new results created",
        Result: newResults,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "error ocurred while generating the result" }),
      { status: 500 }
    );
  }
};
