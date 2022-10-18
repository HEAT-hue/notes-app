// jshint esversion:6
import { useContext } from "react";

import { ModalContext } from "../../contexts/modal.context";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

import { Container } from "./modal.styles";

function Modal() {
  const { showModal, setShowModal } = useContext(ModalContext);

  return (
    <Container onClick={() => setShowModal({ status: false, signin: true })}>
      {showModal.signin ? <SignIn /> : <SignUp />}
    </Container>
  );
}

export default Modal;
