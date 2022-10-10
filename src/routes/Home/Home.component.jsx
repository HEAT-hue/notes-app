// jshint esversion:6
import "./home.styles.scss";

import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { ModalContext } from "../../contexts/modal.context";

import Navigation from "../../components/nav/navigation.component";

import Modal from "../../components/Modal/Modal.component";

import DescriptionAlerts from "../../components/description-alert/description-alert.component";

import EditNote from "../../components/edit-note/edit-note.component";

function Home() {
  const { showModal, showAlert, showEditNote } = useContext(ModalContext);

  return (
    <div className="note-app-container">
      <Navigation />
      {showAlert.alertStatus && <DescriptionAlerts />}
      <Outlet />
      {showModal.status && <Modal />}
      {showEditNote.status && <EditNote note={showEditNote.note} />}
    </div>
  );
}

export default Home;
