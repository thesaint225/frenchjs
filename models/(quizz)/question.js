import { model, models, Schema } from "mongoose";

const QuestionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  options: [
    {
      text: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
      },
    },
  ],
  blog: {
    type: Schema.Types.ObjectId,
    ref: "Blog",
  },
});

const Question = models.Question || model("Question", QuestionSchema);

export default Question;
