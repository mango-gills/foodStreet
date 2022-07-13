import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import FileBase64 from "react-file-base64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ModalComponent from "../components/ModalComponent";

const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [location, setLocation] = useState("");
  const [username, setUsername] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [save, setSave] = useState(false);

  const blog = { title, body, username, location, image_url };
  const savePost = { save, setSave };

  useEffect(() => {
    setUsername("mango");
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  const confirmHandler = async () => {
    createBlogSuccessful();
    await axios
      .post("https://food-street-api.herokuapp.com/blogs", blog)
      .then((res) => {});
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const createBlogSuccessful = () => {
    toast.success("Post Saved!", {
      autoClose: 2000,
      pauseOnHover: false,
      closeOnClick: true,
      pauseOnFocusLoss: false,
      position: "top-center",
    });
  };

  const modalMessage = "save";

  return (
    <main className="App">
      <Navbar />

      <div className="new-blog-container">
        <h1>Add a new blog</h1>

        <form onSubmit={handleFormSubmit} className="form-input">
          <h3>Title</h3>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <h3>Location</h3>
          <input
            type="text"
            placeholder="Please input map embed url"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <h3>Upload Image</h3>

          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              JSON.stringify(setImageUrl({ image_url, image: base64 }))
            }
          />

          <h3>Body</h3>
          <textarea
            name=""
            id=""
            cols="60"
            rows="20"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
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

export default PostBlog;
