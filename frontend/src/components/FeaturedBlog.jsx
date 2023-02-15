import React, { useState, useEffect, Component } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

// import { Carousel } from "react-responsive-carousel";

const FeaturedBlog = ({ data }) => {
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    randomizedBlog();
  }, []);

  const randomizedBlog = async () => {
    // const { data } = await axios.get("http://localhost:5000/blogs");
    const shuffled = data.sort(() => Math.random() - 0.5);
    setRandomBlogs(shuffled);
  };

  return (
    <div className="App">
      <div className="featured-blog">
        <Swiper
          spaceBetween={50}
          slidesPerGroup={1}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          navigation
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {randomBlogs.map((post) => (
            <SwiperSlide key={post._id}>
              <div className="slider-item">
                <img src={post.image_url[0].image} alt="image" />
                <p className="slider-text">{post.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedBlog;
