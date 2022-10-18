// jshint esversion:6
import { useRef, useContext } from "react";

import { ModalContext } from "../../contexts/modal.context";
import { NoteContext } from "../../contexts/note.context";
import { UserContext } from "../../contexts/user.context";

import {
  Container,
  Form,
  FormHeader,
  ClearForm,
  FormTitle,
  FormBody,
  EditButton,
} from "./edit-note.styles";

function EditNote(props) {
  // destructure props
  const { note } = props;

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

  /* Submit Form */
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
    <Container onClick={handleClear}>
      <div onClick={(e) => e.stopPropagation()}>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <FormHeader>
            <ClearForm onClick={handleClear} />
            <FormTitle
              type="text"
              defaultValue={note.title}
              ref={noteTitleRef}
              required
            />
          </FormHeader>
          <FormBody
            as="textarea"
            name=""
            id=""
            cols="30"
            rows="4"
            defaultValue={note.body}
            ref={noteBodyRef}
            required
          ></FormBody>
          <EditButton type="submit">Edit note</EditButton>
        </Form>
      </div>
    </Container>
  );
}

export default EditNote;
