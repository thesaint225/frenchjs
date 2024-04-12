import { model, models, Schema } from "mongoose";

const PostSchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
const Blog = models.Blog || model("Blog", PostSchema);

export default Blog;
