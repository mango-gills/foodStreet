import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import FeaturedBlog from "./components/FeaturedBlog";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    componentMount();
  }, []);

  const componentMount = async () => {
    const { data } = await axios.get("http://localhost:5000/blogs");
    setBlogs(data);
  };

  return (
    <main className="App">
      <Navbar />
      <FeaturedBlog />
      <div className="blog-body-container">
        <div className="blog-list-container">
          <h3>Recent Posts</h3>
          {blogs.slice(0, 5).map((post) => (
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
        <Sidebar blogs={blogs} />
      </div>
      <Footer />
    </main>
  );
}
export default App;
