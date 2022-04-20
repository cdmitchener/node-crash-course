const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Blog schema
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Blog model; Will look for collection named "Blog"
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
