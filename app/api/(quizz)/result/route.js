import connecteDb from "@/config/db";
import Result from "@/models/(quizz)/result";

export const GET = async () => {
  try {
    await connecteDb();
    const results = await Result.find();
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(Json.stringify("error occured while fetching result"), {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  try {
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
    return new Response(
      JSON.stringify({ message: "error ocurred while generating the result" }),
      { status: 500 }
    );
  }
};
