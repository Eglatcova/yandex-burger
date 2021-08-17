import React from "react";
import PropTypes from "prop-types";
import modalOverlayStyles from "./modal-overlay.module.css";

export default function ModalOverlay({ handleCloseModal }) {
  return (
    <div
      className={`${modalOverlayStyles.wrapper}`}
      onClick={(e) => {
        e.stopPropagation();
        handleCloseModal();
      }}
    ></div>
  );
}

ModalOverlay.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
