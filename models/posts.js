import { model, models, Schema } from "mongoose";
import slugify from "slugify";

const PostSchema = new Schema({
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
  slug: {
    type: String,
    // slug: "title",
    unique: true,
  },
});

// pre-save middleware to generate slug

PostSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Blog = models.Blog || model("Blog", PostSchema);

export default Blog;
