import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

import ModalComponent from "../components/ModalComponent";
import Sidebar from "../components/Sidebar";

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [remove, setRemove] = useState(false);
  const [newLocation, setNewLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const removePost = { remove, setRemove };
  const { title, body, username, date } = blogData;
  const { id } = useParams();

  useEffect(() => {
    getBlogDataFromApi();
  }, []);

  const getBlogDataFromApi = async () => {
    const { data } = await axios.get("http://localhost:5000/blogs/" + id);
    setBlogData(data);
    setNewLocation(data.location);
    setImageUrl(data.image_url);
  };

  const deleteHandler = () => {
    setRemove(true);
    setModalIsOpen(true);
  };

  const modalMessage = "delete";

  return (
    <main className="App">
      <Navbar />

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
        id={id}
        removePost={removePost}
        modalMessage={modalMessage}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </main>
  );
};

export default BlogPage;
