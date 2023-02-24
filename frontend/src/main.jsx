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

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./Layout/Layout";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/all" element={<AllBlogs />} />
            <Route path="/blog" element={<PostBlog />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/update/:id" element={<UpdateBlog />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
