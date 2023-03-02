import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    componentMount();
  }, []);

  const componentMount = async () => {
    const { data } = await axios.get(
      "https://foodstreet-api.onrender.com/blogs"
    );
    setBlogs(data);
  };

  return (
    <div className="w-11/12 mx-auto 2xl:max-w-[1250px] mb-8">
      <h3 className="pb-2 mb-4 text-2xl border-b-2 border-orange-500">
        All Posts
      </h3>
      <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2">
        {blogs.map((post) => (
          <Link
            to={`/blog/${post._id}`}
            className="blog-page-link"
            key={post._id}
            state={{ data: post }}
          >
            <div className="flex items-center p-3 md:p-5 bg-white border-[1px] rounded-lg shadow-lg border-slate-500 shadow-black/10">
              <div
                className="h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] bg-cover rounded-lg bg-center mx-auto mr-5"
                style={{
                  backgroundImage: `url(${post.image_url[0]?.image})`,
                }}
              />

              <div className="flex-1 post-details">
                <h1 className="text-lg text-orange-500 sm:text-2xl">
                  {post.title}
                </h1>
                <p className="text-xs text-gray-500 sm:text-base">
                  {post.body}
                </p>
                <small>by {post.username}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
