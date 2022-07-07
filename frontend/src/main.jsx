import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import PostBlog from "./pages/PostBlog";
import BlogPage from "./pages/BlogPage";
import Page404 from "./pages/Page404";
import UpdateBlog from "./pages/UpdateBlog";
import AllBlogs from "./pages/AllBlogs";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/all" element={<AllBlogs />} />
      <Route path="/blog" element={<PostBlog />} />
      <Route path="/blog/:id" element={<BlogPage />} />
      <Route path="/update/:id" element={<UpdateBlog />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
