import app from "./firebase-config.utils";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Create new user
export const createNewUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   // Signed in
    //   const user = userCredential.user;
    //   console.log("User credentials");
    //   console.log(user);
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log("Error code");
    //   console.log(errorCode);
    //   console.log("Error message");
    //   console.log(errorMessage);

    //   // ..
    // });
};

export const SignInUserWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
};

export const onAuthStateChangedListner = async (callbackFunc) => {
  return await onAuthStateChanged(auth, callbackFunc);
};

// Create a sign out feature for user
export const signOutUser = async () => {
  return signOut(auth);
};
