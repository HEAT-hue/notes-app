// jshint esversion:6
import "./note.styles.scss";
import { useContext } from "react";

import { ModalContext } from "../../contexts/modal.context";

// import Button from "react-bootstrap/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  // destructure props
  const { note, removeNote } = props;
  console.log(note);

  const { setShowEditNote } = useContext(ModalContext);

  function handleEditClick() {
    setShowEditNote({
      status: true,
      note,
    });
  }

  return (
    <div className="note-container">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <EditIcon className="edit-icon" onClick={handleEditClick} />
      <DeleteIcon
        className="delete-icon"
        onClick={() => {
          if (window.confirm("Delete note?")) removeNote(note.id);
        }}
      />
    </div>
  );
}

export default Note;
