// jshint esversion:6
import { useContext } from "react";

import { ModalContext } from "../../contexts/modal.context";

import {
  Container,
  NoteTitle,
  NoteBody,
  ReadMore,
  NoteIcons,
  EditNoteIcon,
  DeleteNoteIcon,
} from "./note.styles";

function Note(props) {
  // destructure props
  const { note, removeNote } = props;

  const { setShowEditNote } = useContext(ModalContext);

  const noteTitleDisplayLength = 23;

  const noteBodyDisplayLength = 250;

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
    <Container>
      <div>
        {longNoteTite ? (
          <NoteTitle>{shortTitle}...</NoteTitle>
        ) : (
          <NoteTitle>{note.title}</NoteTitle>
        )}
        {longNoteBody ? (
          <NoteBody>
            {shortNote}{" "}
            <ReadMore onClick={handleEditClick}>read more ...</ReadMore>
          </NoteBody>
        ) : (
          <NoteBody>{note.body}</NoteBody>
        )}
      </div>
      <NoteIcons>
        <EditNoteIcon onClick={handleEditClick} />
        <DeleteNoteIcon
          onClick={() => {
            if (window.confirm("Delete note?")) removeNote(note.id);
          }}
        />
      </NoteIcons>
    </Container>
  );
}

export default Note;
