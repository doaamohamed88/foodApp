import React, { createContext, useState } from "react";
export const ModalContext = createContext("");
export default function ModalContextProvider({ children }) {
  const [modal, setModal] = useState(null);
  function openModal(name) {
    setModal(name);
  }
  function closeModal() {
    setModal(null);
  }
  return (
    <>
      <ModalContext.Provider value={{ modal, openModal, closeModal }}>
        {children}
      </ModalContext.Provider>
    </>
  );
}
