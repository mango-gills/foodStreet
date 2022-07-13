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
      "https://food-street-api.herokuapp.com/blogs"
    );
    setBlogs(data);
  };

  return (
    <main className="App">
      <Navbar />
      <div className="blog-body-container">
        <div className="blog-list-container">
          <h3>All Posts</h3>
          {blogs.map((post) => (
            <Link
              to={`/blog/${post._id}`}
              className="blog-page-link"
              key={post._id}
            >
              <div className="post-container">
                <div className="thumbnail">
                  <img src={post.image_url[0]?.image} alt="image" />
                </div>
                <div className="post-details">
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                  <small>by {post.username}</small>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Sidebar />
      </div>
      <Footer />
    </main>
  );
};

export default AllBlogs;
