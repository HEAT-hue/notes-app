// jshint esversion:6
/* This allows props to be available throught out the react components */
import { createContext, useState, useEffect, useContext } from "react";

import { UserContext } from "./user.context";

import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
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

  const [noteList, setNoteList] = useState([]);

  const [notesUpdated, setNotesUpdated] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      let newList = [];
      const collectionID = currentUser ? currentUser.uid : "b0a5-580d7251a637";
      console.log("collectionID used", collectionID);
      const querySnapshot = await getDocs(collection(db, collectionID));

      querySnapshot.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        console.log(data);
        newList.push(data);
      });

      setNoteList(newList);
    };

    fetchNotes();
  }, [notesUpdated, currentUser]);

  async function addNote(note, userID = currentUser.uid) {
    // Add Note to fire store
    console.log("Add note function called");
    try {
      console.log("Trying to add data to firestore");
      console.log("Note to add");
      console.log(note);

      // Refernce to the document created (db_name, collectionID, docID)
      const docRef = doc(db, userID, note.id);

      // Add data to created document
      await setDoc(docRef, note);

      console.log("Document written with ID: ", docRef.id);
      console.log("User collection ID: ", userID);
    } catch (e) {
      console.log("Error adding document: ", e);
    }

    setNotesUpdated((prev) => !prev);
  }

  async function removeNote(id) {
    if (!currentUser) return;
    await deleteDoc(doc(db, currentUser.uid, id));
    setNotesUpdated((prev) => !prev);
  }

  const value = { noteList, addNote, removeNote };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
