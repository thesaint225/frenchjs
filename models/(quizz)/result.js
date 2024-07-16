import { Schema, model, models } from "mongoose";

const ResultSchema = new Schema(
  {
    User: {
      Type: String,
      required: true,
    },
    score: {
      Type: Number,
      required: true,
    },
    totalQuestions: {
      Type: Number,
      required: true,
    },
    correctAnswser: {
      Type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    Question: {
      type: Schema.Types.ObjectId,
      ref: Question,
    },
  }
);

const Result = models.Result || model("Result", ResultSchema);

export default Result;
