import app from "./firebase-config.utils";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

/********************** Google Auth *****************************/
// Instance of the Google auth provider Class:
const GoogleProvider = new GoogleAuthProvider();

// Specify custom parameter to send with the OAuth request
GoogleProvider.setCustomParameters({
  login_hint: "user@example.com",
});

// Export the Google Auth signin popup window to create an authenticated user
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, GoogleProvider);

/********************** User Email and Password Auth *****************************/
// Create new user
export const createNewUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListner = async (callbackFunc) => {
  return await onAuthStateChanged(auth, callbackFunc);
};

// Create a sign out feature for user
export const signOutUser = async () => {
  return signOut(auth);
};
