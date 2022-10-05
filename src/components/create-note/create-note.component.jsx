// jshint esversion:6
import "./create-note.styles.scss";
import { nanoid } from "nanoid";

import { useRef, useContext } from "react";
import { NoteContext } from "../../contexts/note.context";
// import { UserContext } from "../../contexts/user.context";

import Button from "react-bootstrap/Button";

function CreateNote() {
  // const navigate = useNavigate();

  // Get props from context
  const { addNote } = useContext(NoteContext);
  // const { currentUser } = useContext(UserContext);

  const noteTitleRef = useRef();
  const noteBodyRef = useRef();

  async function handleClick() {
    // if (!currentUser) navigate("/sign-in");

    const title = noteTitleRef.current.value;
    const body = noteBodyRef.current.value;

    const note = { id:nanoid(), title, body };
    addNote(note);
  }

  return (
    <div className="create-note-container">
      <div className="form-container">
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
        <Button variant="success" onClick={handleClick}>
          Add
        </Button>
      </div>
    </div>
  );
}
export default CreateNote;
