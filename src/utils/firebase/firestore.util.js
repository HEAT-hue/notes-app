// jshint esversion:6

// Get Firebase app
import app from "./firebase-config.utils";

// Get firestore library
import { getFirestore } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference tot he service
const db = getFirestore(app);

export default db;
