// shint esversion:6
import { useContext } from "react";

import Note from "../note/note.component";

import { NoteContext } from "../../contexts/note.context";

import { Container } from "./notes-preview.styles";

function NotesPreview(props) {
  // destructure props
  const { noteList, removeNote } = useContext(NoteContext);

  return (
    <Container>
      {noteList.map((noteItem) => (
        <Note key={noteItem.id} note={noteItem} removeNote={removeNote} />
      ))}
    </Container>
  );
}

export default NotesPreview;
