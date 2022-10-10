// jshint esversion:6
import "./create-note.styles.scss";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

import { useRef, useContext } from "react";
import { NoteContext } from "../../contexts/note.context";
import { UserContext } from "../../contexts/user.context";
import { ModalContext } from "../../contexts/modal.context";

import Button from "react-bootstrap/Button";

function CreateNote() {
  const navigate = useNavigate();

  // Get props from context
  const { addNote } = useContext(NoteContext);
  const { currentUser } = useContext(UserContext);
  const { setShowModal } = useContext(ModalContext);

  const noteTitleRef = useRef();
  const noteBodyRef = useRef();

  async function handleSubmit(e) {
    // Prevent default action of forms
    e.preventDefault();

    if (!currentUser) {
      e.target.reset();
      setShowModal({ status: true, signin: true });
      return;
    }

    const title = noteTitleRef.current.value;
    const body = noteBodyRef.current.value;

    const note = {
      id: nanoid(),
      date: new Date().getTime().toString(),
      title,
      body,
    };
    addNote(note);

    // Clear fields
    e.target.reset();
  }

  return (
    <div className="create-note-container">
      <form
        className="form-container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="component note-title"
          type="text"
          placeholder="Title"
          ref={noteTitleRef}
          required
        />
        <textarea
          className="component note-body"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Take a note..."
          ref={noteBodyRef}
          required
        ></textarea>
        <Button variant="success" type={"submit"}>
          Add
        </Button>
      </form>
    </div>
  );
}
export default CreateNote;
