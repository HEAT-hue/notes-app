// jshint esversion:6
import "./modal.styles.scss";
import { useContext } from "react";

import { ModalContext } from "../../contexts/modal.context";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

function Modal() {
  const { showModal, setShowModal } = useContext(ModalContext);

  return (
    <div
      className="modal-container"
      onClick={() => setShowModal({ status: false, signin: true })}
    >
      {showModal.signin ? <SignIn /> : <SignUp />}
    </div>
  );
}

export default Modal;
