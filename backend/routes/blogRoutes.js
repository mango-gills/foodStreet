import express from "express";
const router = express.Router();

import blogController from "../controller/blogController.js";

const { getBlogs, createBlog, updateBlog, deleteBlog, getBlogById } =
  blogController;

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);
export default router;
