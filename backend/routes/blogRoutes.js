import express from "express";
const router = express.Router();

import blogController from "../controller/blogController.js";

const { getBlogs, createBlog, updateBlog, deleteBlog, getBlogById } =
  blogController;

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/blog", createBlog);
router.post("/post/:id", updateBlog);
router.delete("/post/:id", deleteBlog);
export default router;
