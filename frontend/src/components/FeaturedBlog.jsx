import React, { useState, useEffect, Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

const FeaturedBlog = ({ data, isLoading }) => {
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    randomizedBlog();
  }, [data]);

  const randomizedBlog = async () => {
    const shuffled = data?.sort(() => Math.random() - 0.5);
    setRandomBlogs(shuffled);
  };

  return (
    <div className="w-11/12 xl:w-full mx-auto mt-5 mb-8 rounded-md featured-blog lg:h-[550px]">
      {isLoading && (
        <div className="w-full h-[350px] sm:h-[350px] md:h-[400px] lg:h-[550px] animated-bg">
          &nbsp;
        </div>
      )}

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
        {randomBlogs?.map((post) => (
          <SwiperSlide key={post._id}>
            <div className="slider-item">
              <img
                className="h-[350px] sm:h-[350px] md:h-[400px] lg:h-[550px] w-full"
                src={post.image_url[0].image}
                alt="image"
              />
              <div className="p-6 xl:py-10 xl:px-20 slider-description">
                <div
                  className="max-w-xs sm:max-w-sm lg:max-w-[500px] bg-black/90 p-4 md:p-8 rounded-lg
             flex flex-col justify-between items-start"
                >
                  <h1 className="text-2xl leading-none tracking-wide sm:text-3xl md:text-4xl lg:text-5xl">
                    {post.title}
                  </h1>
                  <p className="max-w-xs lg:max-w-[500px] my-3 lg:my-5 text-xs md:text-base line-clamp-2 lg:line-clamp-3">
                    {post.body}
                  </p>
                  <button className="text-xs md:text-base px-3 py-1 rounded-sm md:px-4 md:py-2 bg-[#384e76] tracking-wider">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedBlog;
