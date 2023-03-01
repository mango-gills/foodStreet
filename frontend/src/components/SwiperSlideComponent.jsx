import React from "react";
import { Link } from "react-router-dom";

const SwiperSlideComponent = ({ post }) => {
  return (
    <div className="cursor-pointer slider-item">
      <img
        className="h-[350px] sm:h-[350px] md:h-[400px] lg:h-[550px] w-full hover:scale-105 ease-in duration-300"
        src={post.image_url[0].image}
        alt="image"
      />
      <div className="m-8 xl:my-10 xl:mx-16 p-4 lg:p-8 slider-description max-w-xs sm:max-w-sm lg:max-w-[500px] bg-black/90 rounded-lg">
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-2xl leading-none tracking-wide sm:text-3xl md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="max-w-xs lg:max-w-[500px] my-3 lg:my-5 text-xs md:text-base line-clamp-2 lg:line-clamp-3">
            {post.body}
          </p>
          <Link
            to={`/blog/${post?._id}`}
            className="text-xs md:text-base px-3 py-1 rounded-sm md:px-4 md:py-2 bg-[#384e76] tracking-wider"
            state={{ data: post }}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlideComponent;
