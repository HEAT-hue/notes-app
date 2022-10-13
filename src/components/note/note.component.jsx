// jshint esversion:6
import "./note.styles.scss";
import { useContext, useState } from "react";

import { ModalContext } from "../../contexts/modal.context";

// import Button from "react-bootstrap/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  // destructure props
  const { note, removeNote } = props;

  const { setShowEditNote } = useContext(ModalContext);

  const noteTitleDisplayLength = 23;

  const noteBodyDisplayLength = 257;

  const longNoteTite = note.title.length > noteTitleDisplayLength;

  const longNoteBody = note.body.length > noteBodyDisplayLength;

  let shortNote = note.body.slice(0, noteBodyDisplayLength);

  let shortTitle = note.title.slice(0, noteTitleDisplayLength);

  function handleEditClick() {
    setShowEditNote({
      status: true,
      note,
    });
  }

  return (
    <div className="note-container">
      <div className="note-details">
        {longNoteTite ? (
          <h2 className="note-title">{shortTitle}...</h2>
        ) : (
          <h2 className="note-title">{note.title}</h2>
        )}
        {longNoteBody ? (
          <p className="note-body">
            {shortNote}{" "}
            <span className="read-more-link" onClick={handleEditClick}>
               read more ...
            </span>
          </p>
        ) : (
          <p className="note-body">{note.body}</p>
        )}
      </div>
      <div className="note-icons">
        <EditIcon className="edit-icon" onClick={handleEditClick} />
        <DeleteIcon
          className="delete-icon"
          onClick={() => {
            if (window.confirm("Delete note?")) removeNote(note.id);
          }}
        />
      </div>
    </div>
  );
}

export default Note;
