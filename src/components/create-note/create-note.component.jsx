// jshint esversion:6
// import "./create-note.styles.scss";
import { nanoid } from "nanoid";

import { useRef, useContext } from "react";
import { NoteContext } from "../../contexts/note.context";
import { UserContext } from "../../contexts/user.context";
import { ModalContext } from "../../contexts/modal.context";

// Get styled Components
import {
  Container,
  Form,
  NoteTitle,
  NoteBody,
  AddButton,
} from "./create-note.styles";

function CreateNote() {
  // Get props from Contexts
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
    <Container>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <NoteTitle
          type="text"
          placeholder="Title"
          ref={noteTitleRef}
          required
        />
        <NoteBody
          as="textarea"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Take a note..."
          ref={noteBodyRef}
          required
        ></NoteBody>
        <AddButton type="submit">Add</AddButton>
      </Form>
    </Container>
  );
}
export default CreateNote;
