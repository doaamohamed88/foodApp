import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { ModalContext } from "../../store/ModalContext";

export default function AppModal({ title, children }) {
  const { closeModal, modal } = useContext(ModalContext);

  if (!modal) return null; // Prevent rendering when closed

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        
        {title && <h1 className={styles.modaltitle}>{title}</h1>}

        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("modalRoot")
  );
}
