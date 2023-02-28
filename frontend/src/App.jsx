import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FeaturedBlog from "./components/FeaturedBlog";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { useQuery } from "@tanstack/react-query";

function App() {
  const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   componentMount();
  // }, []);

  // const componentMount = async () => {
  //   const { data } = await axios.get("http://localhost:5000/blogs");
  //   setBlogs(data);
  // };

  // try useQuery

  const { data, status, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: () =>
      axios
        .get("https://foodstreet-api.onrender.com/blogs")
        .then((res) => res.data),
  });

  if (isLoading) {
    return <div className="my-5 animated-bg">&nbsp;</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <>
      <main className="App">
        <FeaturedBlog data={data} />

        <div className="hidden blog-body-container">
          <div className="blog-list-container">
            <h3>Recent Posts</h3>
            {data.slice(0, 5).map((post) => (
              <Link
                to={`/blog/${post._id}`}
                className="blog-page-link"
                key={post._id}
                state={{ data: post }}
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
            <div className="flex">
              <button className="px-2 py-1 mr-4 bg-orange-500 rounded-sm previous">
                Previous
              </button>
              <button className="px-5 py-1 mr-4 bg-orange-500 rounded-sm next">
                Next
              </button>
            </div>
          </div>
          {/* <Sidebar blogs={blogs} /> */}
        </div>
      </main>
    </>
  );
}
export default App;
