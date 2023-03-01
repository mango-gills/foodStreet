import React from "react";
import { Link } from "react-router-dom";

const RecentPosts = ({ data, isLoading }) => {
  return (
    <div className="w-11/12 mx-auto 2xl:w-full xl:px-0">
      <h3 className="mb-3 text-lg md:text-2xl">Recent Posts</h3>

      <div className="grid grid-cols-1 gap-5 mb-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.slice(0, 6).map((post) => (
          <Link
            to={`/blog/${post._id}`}
            className="duration-100 ease-in rounded-md"
            key={post._id}
            state={{ data: post }}
          >
            <div
              className="h-[200px] sm:h-[160px] max-w-[400px] md:w-full bg-cover rounded-md bg-center mx-auto"
              style={{
                backgroundImage: `url(${post.image_url[0]?.image})`,
              }}
            />

            <div className="mb-3 text-center">
              <h1 className="mt-2 text-2xl">{post.title}</h1>
              <p className="text-slate-500/90">Category/Category</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex pt-2 mb-5 border-t-2 border-orange-500">
        <button className="px-2 py-1 mr-4 bg-orange-500 rounded-sm previous">
          Previous
        </button>
        <button className="px-5 py-1 mr-4 bg-orange-500 rounded-sm next">
          Next
        </button>
      </div>
    </div>
  );
};

export default RecentPosts;
