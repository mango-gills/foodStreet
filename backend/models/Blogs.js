import mongoose from "mongoose";

const options = {
  type: String,
  required: true,
};

const dateNow = () => {
  let date = new Date();
  return date.toISOString();
};

const blogSchema = mongoose.Schema(
  {
    username: options,
    title: options,
    body: String,
    date: {
      type: Date,
      default: dateNow,
    },
    location : String,
    image_url: Array,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);
