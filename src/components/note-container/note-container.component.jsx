// jshint esversion:6
import CreateNote from "../create-note/create-note.component";
import NotesPreview from "../notes-preview/notes-preview.component";

function NoteContainer() {
  return (
    <div>
      <div>
        <CreateNote />
      </div>
      <div>
        <NotesPreview />
      </div>
    </div>
  );
}

export default NoteContainer;
