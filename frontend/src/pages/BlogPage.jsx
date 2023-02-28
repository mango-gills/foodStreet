import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ModalComponent from "../components/ModalComponent";

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
          <img className="rounded-md" src={imageUrl[0]?.image} alt="image" />
          <div className="my-3">
            <h1 className="text-4xl">{title}</h1>
            <div className="flex flex-col">
              <small className="mr-2">by: {username}</small>
              <small>posted on: {date?.split("T")[0]}</small>
            </div>
          </div>
          <p className="mb-5">{body}</p>
          <h3 className="mb-2 text-xl text-black">Location</h3>
          <div className="google-map-code">
            <div
              dangerouslySetInnerHTML={{
                __html: newLocation
                  ?.replace(`width="600"`, `width="100%"`)
                  .replace(`height="450"`, `height="300"`),
              }}
            />
          </div>
        </div>
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
