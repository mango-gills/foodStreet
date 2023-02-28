import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import FeaturedBlog from "./components/FeaturedBlog";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { useQuery } from "@tanstack/react-query";
import RecentPosts from "./components/RecentPosts";

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
    console.log("loading");
    // return <div className="my-5 animated-bg">&nbsp;</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <>
      <main className="App">
        <FeaturedBlog data={data} isLoading={isLoading} />
        <RecentPosts data={data} isLoading={isLoading} />
      </main>
    </>
  );
}
export default App;
