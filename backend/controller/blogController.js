import Blogs from "../models/Blogs.js";

// GET Request
const getBlogs = (req, res) => {
  Blogs.find()
    .sort({ date: -1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(400).json({ err: "Data not found " + err }));
};

// GET Request from ID
const getBlogById = (req, res) => {
  const id = req.params.id;
  Blogs.findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(400).json({ err: "Blog not found." }));
};

// POST Request
const createBlog = (req, res) => {
  const blogPost = new Blogs(req.body);

  blogPost
    .save()
    .then(() => res.status(201).json({ message: "Success" }))
    .catch((err) =>
      res.status(400).json({ err: "Something went wrong. " + err })
    );
};

const updateBlog = (req, res) => {
  const id = req.params.id;

  Blogs.findByIdAndUpdate(id).then((blog) => {
    blog.username = req.body.username;
    blog.title = req.body.title;
    blog.body = req.body.body;
    blog.image_url = req.body.image_url;
    blog.location = req.body.location;

    blog
      .save()
      .then(() => res.status(200).json({ message: "Post was updated." }))
      .catch((err) => res.status(400).json("Error: " + err));
  });
};

// DELETE Request
const deleteBlog = (req, res) => {
  const id = req.params.id;

  Blogs.findByIdAndDelete(id)
    .then((result) => res.status(200).json({ message: "Post was deleted" }))
    .catch((err) => res.status(400).json("Error deleting post: " + err));
};

export default {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
