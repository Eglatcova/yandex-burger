import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import modalStyles from "./modal.module.css";

const modalRoot = document.getElementById("react-modals");

export default function Modal({ children, isOpen, title, handleCloseModal }) {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [handleCloseModal]);

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <>
          <ModalOverlay handleCloseModal={handleCloseModal} />
          <div className={`${modalStyles.container} pt-10 pr-10 pb-15 pl-10`}>
            <div className={`${modalStyles.modalHeader}`}>
              <div className="text text_type_main-large">{title}</div>
              <CloseIcon
                type="primary"
                onClick={(e) => {
                  handleCloseModal();
                }}
              />
            </div>
            {children}
          </div>
        </>
      )}
    </>,
    modalRoot
  );
}

Modal.defaultProps = {
  title: "",
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};
