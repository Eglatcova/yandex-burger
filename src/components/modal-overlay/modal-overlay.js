import React from "react";
import modalOverlayStyles from "./modal-overlay.module.css";

export default function ModalOverlay({ closeModal }) {
  return (
    <div
      className={`${modalOverlayStyles.wrapper}`}
      onClick={(e) => {
        e.stopPropagation();
        closeModal();
      }}
    ></div>
  );
}
