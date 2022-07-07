import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FileBase64 from "react-file-base64";

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
    setSave(true);
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
        blog={blog}
        savePost={savePost}
        modalMessage={modalMessage}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </main>
  );
};

export default PostBlog;
