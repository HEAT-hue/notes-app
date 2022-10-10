// jshint esversion:6
/* This allows props to be available throught out the react components */
import { createContext, useState, useEffect, useContext } from "react";

import { ModalContext } from "./modal.context";
import { UserContext } from "./user.context";

import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import db from "../utils/firebase/firestore.util";

export const NoteContext = createContext({
  noteList: [],
  setNoteList: () => null,
  addNote: () => null,
  removeNote: () => null,
});

export const NoteProvider = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  const { setShowAlert } = useContext(ModalContext);

  const [noteList, setNoteList] = useState([]);

  const [pendingNotes, setPendingNotes] = useState([]);

  /* Clear alert sent to user after 3000ms */
  function clearAlert() {
    setTimeout(() => {
      return setShowAlert({
        alertStatus: false,
        alertSeverity: "",
        alertTitle: "",
        alertMsg: "",
        alertBoldMsg: "",
      });
    }, 3000);
  }

  async function deleteNoteOnline(id) {
    try {
      await deleteDoc(doc(db, currentUser.uid, id));
      setShowAlert({
        alertStatus: true,
        alertSeverity: "success",
        alertMsg: "Note deleted online successfully",
      });
      clearAlert();
      return true;
    } catch (e) {
      console.log("An error occurred when deleting notes online");
      console.log(e);
      setShowAlert({
        alertStatus: true,
        alertSeverity: "error",
        alertMsg: "Could not delete note online",
        alertBoldMsg: "- refresh and try again!",
      });
      clearAlert();
      return false;
    }
  }

  async function addNoteOnline(note) {
    try {
      console.log("Trying to add data to firestore");
      console.log(note);

      // Refernce to the document created (db_name, collectionID, docID)
      const docRef = doc(db, note.userID, note.id);

      // Add data to created document
      await setDoc(docRef, note);

      console.log("Document written with ID: ", docRef.id);
      console.log("User collection ID: ", note.userID);

      setShowAlert({
        alertStatus: true,
        alertSeverity: "success",
        alertMsg: "Note added online successfully",
      });
      clearAlert();

      return true;
    } catch (e) {
      console.log("Error adding document: ", e);
      setShowAlert({
        alertStatus: true,
        alertSeverity: "error",
        alertMsg: "Could not add note online",
        alertBoldMsg: "- refresh and try again!",
      });
      clearAlert();
      return false;
    }
  }

  function clearPendingTasks() {
    const undoneNoteTasks = pendingNotes.filter((noteTask) => {
      return noteTask.status === false;
    });

    clearAlert();
    setPendingNotes(undoneNoteTasks);
  }

  useEffect(() => {
    // If no task, exit
    if (pendingNotes === undefined || pendingNotes.length === 0) return;
    console.log("Executing pending task");
    console.log(pendingNotes);
    setShowAlert({
      alertStatus: true,
      alertSeverity: "info",
      alertMsg: "Trying to sync data online",
      alertBoldMsg: "",
    });

    pendingNotes.forEach(async (noteTask) => {
      console.log("Note task");
      console.log(noteTask);
      if (noteTask.operation === "add") {
        noteTask.status = await addNoteOnline(noteTask.data);
      } else if (noteTask.operation === "del") {
        noteTask.status = await deleteNoteOnline(noteTask.data);
      }
      console.log(noteTask.status);
      console.log("Trying to clear pending tasks");
      clearPendingTasks();
    });

    console.log("Pending Notes");
    console.log(pendingNotes);
  }, [pendingNotes]);

  useEffect(() => {
    const fetchNotes = async () => {
      let newList = [];
      const collectionID = currentUser ? currentUser.uid : "b0a5-580d7251a637";
      console.log("collectionID used", collectionID);

      const notesRef = collection(db, collectionID);

      const q = query(notesRef, orderBy("date", "desc"));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        console.log(data);
        newList.push(data);
      });

      setNoteList(newList);
    };

    fetchNotes();
  }, [currentUser]);

  async function addNote(note, userID = currentUser.uid) {
    console.log("Note to add");
    const _note = { ...note, userID };
    console.log(_note);

    // Add notes to offline storage for fast preview rendering
    setNoteList((prev) => {
      return [_note, ...prev];
    });

    // Create a pending task to sync with DB online
    const pendingNote = { operation: "add", status: false, data: _note };

    // Send task to execution queue
    setPendingNotes((prev) => {
      return [...prev, pendingNote];
    });
  }

  async function removeNote(id) {
    if (!currentUser) return;

    console.log("Deleting note with id:", id);
    // Delete note from offline storage
    const newNotes = noteList.filter((note) => {
      return note.id !== id;
    });

    setNoteList(newNotes);

    // Create pending task to sync with DB online
    const pendingNote = { operation: "del", status: false, data: id };

    // Send task to execution queue
    setPendingNotes((prev) => {
      return [...prev, pendingNote];
    });
  }

  const value = { noteList, addNote, removeNote };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
