// jshint esversion:6
import "./edit-note.styles.scss";
import { useRef, useContext } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import { ModalContext } from "../../contexts/modal.context";
import { NoteContext } from "../../contexts/note.context";
import { UserContext } from "../../contexts/user.context";

function EditNote(props) {
  // destructure props
  const { note } = props;
  console.log("Note to edit");
  console.log(note);

  const { setShowEditNote, setShowModal } = useContext(ModalContext);
  const { addNote, removeNote } = useContext(NoteContext);
  const { currentUser } = useContext(UserContext);

  const noteTitleRef = useRef();
  const noteBodyRef = useRef();

  /* Remove sign-in modal */
  function handleClear() {
    setShowEditNote({
      status: false,
      note: {
        title: "",
        body: "",
      },
    });
  }

  function handleSubmit(e) {
    // Prevent default action of forms refreshing page after submit
    e.preventDefault();

    if (!currentUser) {
      setShowModal({ status: true, signin: true });
      return;
    }

    removeNote(note.id);

    note.title = noteTitleRef.current.value;
    note.body = noteBodyRef.current.value;

    addNote(note, note.userID);

    // Clear modal
    handleClear();

    return;
  }

  return (
    <div className="edit-note-container" onClick={handleClear}>
      <div className="edit-form-wrapper" onClick={(e) => e.stopPropagation()}>
        <form
          className="edit-form-container"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="edit-note-header">
            <ClearIcon className="clear-icon" onClick={handleClear} />
            <input
              className="edit-component edit-note-title"
              type="text"
              defaultValue={note.title}
              ref={noteTitleRef}
              required
            />
          </div>
          <textarea
            className="edit-component edit-note-body"
            name=""
            id=""
            cols="30"
            rows="4"
            defaultValue={note.body}
            ref={noteBodyRef}
            required
          ></textarea>
          <button type="submit" className="edit-btn edit-btn-success">
            Edit note
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditNote;
