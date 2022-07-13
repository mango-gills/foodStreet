import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalComponent = ({
  confirmHandler,
  modalMessage,
  modalIsOpen,
  setModalIsOpen,
}) => {
  const savedeleteHandler = async () => {
    confirmHandler();
    setModalIsOpen(false);
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
    </div>
  );
};

export default ModalComponent;
