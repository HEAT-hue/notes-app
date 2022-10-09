// jshint esversion:6
import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState({ status: false, signin: true });
  const [showAlert, setShowAlert] = useState({
    alertStatus: false,
    alertSeverity: "",
    alertTitle: "",
    alertMsg: "",
    alertBoldMsg: "",
  });

  const value = { showModal, setShowModal, showAlert, setShowAlert };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
