import React from "react";
import { SocialIcon } from "react-social-icons";

const Sidebar = ({ blogs }) => {
  return (
    <div>
      <div className="sidebar">
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>
        <div className="sidebar-box">
          <h3>Follow Us</h3>
          <ul className="social-link">
            <li>
              <SocialIcon
                bgColor="#fff"
                network="facebook"
                style={{ height: 20, width: 20 }}
              />
              <span>|</span>Facebook
            </li>
            <li>
              <SocialIcon
                fgColor="#fff"
                network="twitter"
                style={{ height: 20, width: 20 }}
              />
              <span>|</span>Twitter
            </li>
            <li>
              <SocialIcon
                bgColor="#fff"
                network="instagram"
                style={{ height: 20, width: 20 }}
              />
              <span>|</span>
              Instagram
            </li>
            <li>
              <SocialIcon
                fgColor="#fff"
                network="pinterest"
                style={{ height: 20, width: 20 }}
              />
              <span>|</span>pinterest
            </li>
            <li>
              <SocialIcon
                fgColor="#fff"
                network="rss"
                style={{ height: 20, width: 20 }}
              />
              <span>|</span>rss
            </li>
            <li>
              <SocialIcon
                fgColor="#fff"
                network="reddit"
                style={{ height: 20, width: 20 }}
              />
              <span>|</span>reddit
            </li>
          </ul>
        </div>

        <div className="sidebar-box">
          <h3>Popular Post</h3>
          {blogs
            ?.slice(-7)
            .map((blog) => (
              <div className="sidebar-posts" key={blog._id}>
                <h5>{blog.title}</h5>
                <p>{blog.body}</p>
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
