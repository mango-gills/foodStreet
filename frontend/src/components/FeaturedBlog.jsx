import React, { useState, useEffect, Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import SwiperSlideComponent from "./SwiperSlideComponent";

const FeaturedBlog = ({ data, isLoading }) => {
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    randomizedBlog();
  }, [data]);

  const fyShuffle = (arr) => {
    let i = arr?.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr?.slice(0, 10);
  };

  const randomizedBlog = async () => {
    setRandomBlogs(fyShuffle(data));
  };

  return (
    <div className="w-11/12 2xl:w-full mx-auto mt-5 mb-8 rounded-md featured-blog lg:h-[550px]">
      {isLoading && (
        <div className="w-full h-[350px] sm:h-[350px] md:h-[400px] lg:h-[550px] animated-bg">
          <div className="p-6 xl:py-10 xl:px-20 slider-description animated-bg">
            <div
              className="max-w-xs sm:max-w-sm lg:max-w-[500px] p-4 md:p-8 rounded-lg
             flex flex-col justify-between items-start bg-white"
            >
              <h1 className="p-6 mb-2 animated-bg-text animated-bg">&nbsp;</h1>
              <p className="p-2 mb-1 animated-bg-text animated-bg"></p>
              <p className="p-2 mb-1 animated-bg-text animated-bg"></p>
              <p className="p-2 mb-1 animated-bg-text animated-bg"></p>

              <button className="text-xs md:text-base px-3 py-1 rounded-sm md:px-4 md:py-2 bg-[#384e76] animated-bg"></button>
            </div>
          </div>
        </div>
      )}

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {randomBlogs?.map((post) => (
          <SwiperSlide key={post._id}>
            <SwiperSlideComponent post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedBlog;
