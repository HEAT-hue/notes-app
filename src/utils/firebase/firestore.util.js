// jshint esversion:6

// Get Firebase app
import app from "./firebase-config.utils";

// Get firestore library
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference tot he service
const db = getFirestore(app);

// // Enabling persistence in firestore
// enableIndexedDbPersistence(db).catch((err) => {
//   if (err.code === "failed-precondition") {
//     // Multiple tabs open, persistence can only be enabled
//     // in one tab at a a time.
//     // ...
//     console.log("offline Persistence failed, multiple tabs open");
//   } else if (err.code === "unimplemented") {
//     console.log("Current browser doesn.t support persistence");
//     // The current browser does not support all of the
//     // features required to enable persistence
//     // ...
//   }
// });
// Subsequent queries will use persistence, if it was enabled successfully

export default db;
