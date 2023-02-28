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
    <div className="mx-auto my-5 rounded-md featured-blog h-[550px]">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true }}
        // navigation
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {randomBlogs.map((post) => (
          <SwiperSlide key={post._id}>
            <div className="slider-item">
              <img src={post.image_url[0].image} alt="image" />
              <div className="px-20 py-10 slider-description">
                {/* <div
                  className="w-[500px] bg-black/90 p-8 rounded-lg
                flex flex-col justify-between items-start"
                >
                  <h1 className="leading-none tracking-wide">{post.title}</h1>
                  <p className="my-5 line-clamp-3">{post.body}</p>
                  <button className="px-4 py-2 rounded-md bg-[#384e76] tracking-wider">
                    Read More
                  </button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedBlog;
