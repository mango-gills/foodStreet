import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ModalComponent from "../components/ModalComponent";
import Sidebar from "../components/Sidebar";

const BlogPage = () => {
  const location = useLocation();

  const [blogData, setBlogData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newLocation, setNewLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { title, body, username, date } = blogData;
  const { id } = useParams();

  const blog = { title, body, username, location, imageUrl };

  useEffect(() => {
    getBlogDataFromApi();
  }, []);

  const getBlogDataFromApi = async () => {
    // const { data } = await axios.get("http://localhost:5000/blogs/" + id);
    const data = location.state?.data;
    setBlogData(data);
    setNewLocation(data.location);
    setImageUrl(data.image_url);
  };

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const confirmHandler = async () => {
    await axios
      .delete("https://foodstreet-api.onrender.com/blogs/" + id, blog)
      .then((res) => {});
    deleteBlogSuccessful();
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  const deleteBlogSuccessful = () => {
    toast.info("Post deleted! Returning to home.", {
      autoClose: 2000,
      pauseOnHover: false,
      closeOnClick: true,
      theme: "colored",
      pauseOnFocusLoss: false,
      position: "top-center",
    });
  };

  const modalMessage = "delete";

  return (
    <main className="App">
      <div className="blog-body-container">
        <div className="blog-post-container">
          <img src={imageUrl[0]?.image} alt="image" className="blog-image" />
          <h1>{title}</h1>
          <small>by: {username}</small>
          <small>{date}</small>
          <p>{body}</p>
          <div className="google-map-code">
            <h3>Location</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: newLocation
                  ?.replace(`width="600"`, `width="100%"`)
                  .replace(`height="450"`, `height="300"`),
              }}
            />
          </div>
        </div>
        <Sidebar />
      </div>

      <div className="update-delete-btn">
        <button>
          <Link type="submit" id="update-link" to={`/update/${id}`}>
            Update
          </Link>
        </button>
        <button type="submit" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      <ModalComponent
        confirmHandler={confirmHandler}
        modalMessage={modalMessage}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <ToastContainer />
    </main>
  );
};

export default BlogPage;
