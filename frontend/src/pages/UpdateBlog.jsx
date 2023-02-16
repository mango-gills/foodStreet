import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FileBase64 from "react-file-base64";
import axios from "axios";

const UpdateBlog = () => {
  const [blogData, setBlogData] = useState([]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [location, setNewLocation] = useState("");
  const [image_url, setNewImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getBlogDataFromApi();
  }, []);

  const getBlogDataFromApi = async () => {
    const { data } = await axios.get(
      "https://foodstreet-api.onrender.com/blogs/" + id
    );
    setBlogData(data);
    setTitle(data.title);
    setBody(data.body);
    setUsername(data.username);
    setNewLocation(data.location);
    setNewImage(data.image_url);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await axios.put(
      "https://foodstreet-api.onrender.com/blogs/" + id,
      JSON.stringify({ username, title, body, location, image_url }),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    window.location.href = "/";
  };

  return (
    <main className="App">
      <Navbar />
      <div className="new-blog-container">
        <h1>Update blog</h1>

        <form onSubmit={handleFormSubmit} className="form-input">
          <h3>Title</h3>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e?.target.value)}
          />

          <h3>Location</h3>
          <input
            type="text"
            placeholder="Please input map embed url"
            required
            value={location}
            onChange={(e) => setNewLocation(e?.target.value)}
          />

          <h3>Upload image</h3>
          <FileBase64
            type="file"
            multiple={false}
            value={image_url[0]?.image}
            onDone={({ base64 }) =>
              JSON.stringify(setNewImage({ image_url, image: base64 }))
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
            onChange={(e) => setBody(e?.target.value)}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
};

export default UpdateBlog;
