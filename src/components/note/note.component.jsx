// jshint esversion:6
import "./note.styles.scss";
// import Button from "react-bootstrap/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  // destructure props
  const { note, removeNote } = props;

  return (
    <div className="note-container">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <DeleteIcon className="delete-icon"
        onClick={() => {
          removeNote(note.id);
        }}
      />
    </div>
  );
}

export default Note;
