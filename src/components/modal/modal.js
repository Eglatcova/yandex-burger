import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import modalStyles from "./modal.module.css";

const modalRoot = document.getElementById("react-modals");

export default function Modal({ children, isOpen = false, closeModal }) {
  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <>
          <ModalOverlay closeModal={closeModal} />
          <div className={modalStyles.container}>
            <div className={`${modalStyles.modalHeader} p-10`}>
              <div className="text text_type_main-large">
                {"Детали ингредиента"}
              </div>
              <CloseIcon
                type="primary"
                onClick={() => {
                  closeModal();
                }}
              />
            </div>
            <div className={modalStyles.content}>{children}</div>
          </div>
        </>
      )}
    </>,
    modalRoot
  );
}
