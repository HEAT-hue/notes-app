// shint esversion:6
import { useContext } from "react";

import Note from "../note/note.component";
import "./notes-preview.styles.scss";

import { NoteContext } from "../../contexts/note.context";

function NotesPreview(props) {
  // destructure props
  const { noteList, removeNote } = useContext(NoteContext);

  return (
    <div className="notes-preview-container">
      {noteList.map((noteItem) => (
        <Note key={noteItem.id} note={noteItem} removeNote={removeNote} />
      ))}
    </div>
  );
}

export default NotesPreview;
