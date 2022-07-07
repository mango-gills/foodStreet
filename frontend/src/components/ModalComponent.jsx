import React from "react";
import Modal from "react-modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

const ModalComponent = ({
  id,
  blog,
  modalMessage,
  modalIsOpen,
  setModalIsOpen,
  savePost,
  removePost,
}) => {
  const { remove, setRemove } = removePost ?? false;
  const { save, setSave } = savePost ?? false;

  const savedeleteHandler = async () => {
    if (save == true) {
      createBlogSuccessful();
      await axios.post("http://localhost:5000/blogs/blog", blog).then((res) => {
        console.log("Post saved successfully.");
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }

    if (remove == true) {
      await axios
        .delete("http://localhost:5000/blogs/post/" + id, blog)
        .then((res) => {
          console.log("Post deleted successfully.");
        });
      deleteBlogSuccessful();
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }

    setModalIsOpen(false);
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

  return (
    <div>
      <Modal
        className="modal-open"
        overlayClassName="modal-overlay"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={false}
      >
        <div>
          <p>Are you sure you want to {modalMessage} this post?</p>
          <button className="modal-open-btn" onClick={savedeleteHandler}>
            Yes
          </button>

          <button
            className="modal-open-btn"
            onClick={() => setModalIsOpen(false)}
          >
            No
          </button>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default ModalComponent;
