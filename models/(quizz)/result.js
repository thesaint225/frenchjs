import { Schema, model, models } from "mongoose";

const ResultSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  correctAnswer: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  selectedOption: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Result = models.Result || model("Result", ResultSchema);

export default Result;
