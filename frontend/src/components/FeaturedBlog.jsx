import React, { useState, useEffect, Component } from "react";
import axios from "axios";

import { Carousel } from "react-responsive-carousel";

const FeaturedBlog = () => {
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    randomizedBlog();
  }, []);

  const randomizedBlog = async () => {
    const { data } = await axios.get(
      "https://food-street-api.herokuapp.com/blogs"
    );
    const shuffled = data.sort(() => Math.random() - 0.5);
    setRandomBlogs(shuffled);
  };

  return (
    <div className="App">
      <div className="featured-blog">
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={2500}
          infiniteLoop={true}
          className="carousel"
          transitionTime={1000}
          animationHandler="fade"
          showThumbs={false}
          autoFocus={true}
          showStatus={false}
          useKeyboardArrows={true}
          key={randomBlogs.length}
        >
          {randomBlogs.map((post) => (
            <div key={post._id}>
              <img src={post.image_url[0].image} alt="image" />
              <p className="carousel-text">{post.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedBlog;
