// jshint esversion:6
import "./sign-up.styles.scss";
import { nanoid } from "nanoid";

import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import ClearIcon from "@mui/icons-material/Clear";

import { NoteContext } from "../../contexts/note.context";
import { ModalContext } from "../../contexts/modal.context";

import {
  signInWithGooglePopup,
  createNewUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-auth.utils";

function SignUp() {
  const { addNote } = useContext(NoteContext);

  const { setShowModal, setShowAlert } = useContext(ModalContext);

  const navigate = useNavigate();

  const displayNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleClear() {
    setShowModal({ status: false, signin: true });
  }

  function handleNavigate() {
    setShowModal({ status: true, signin: true });
  }

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

  /* Sign in with Google */
  const signUpWithGoogle = async () => {
    /* Auth state lsitens for signed in user to create user doc */
    await signInWithGooglePopup();
  };

  async function handleSubmit(e) {
    /* Prevent default refresh of page after form submit */
    e.preventDefault();

    const displayName = displayNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setShowAlert({
        alertStatus: true,
        alertSeverity: "error",
        alertTitle: "Error",
        alertMsg: "Passwords do not match",
        alertBoldMsg: "try again!",
      });
      return;
    }

    try {
      const { user } = await createNewUserWithEmailAndPassword(email, password);

      setShowAlert({
        alertStatus: true,
        alertSeverity: "success",
        alertTitle: "Success",
        alertMsg: "Account creation successful",
        alertBoldMsg: " - Welcome",
      });

      console.log("Created user");
      console.log(user);

      const defaultNotes = [
        {
          id: nanoid(),
          date: new Date().getTime().toString(),
          title: "Getting started",
          body: "Try adding a new note! Dont't forget you can always delete notes you don't need",
        },
        {
          id: nanoid(),
          date: new Date().getTime().toString(),
          title: `Welcome ${displayName}`,
          body: "Try notes for free, an awesome way to create notes on different happenings around you",
        },
      ];

      defaultNotes.forEach((note) => {
        addNote(note, user.uid);
      });

      console.log("Finished creating user");
      console.log(user);

      handleClear();
      clearAlert();
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error code");
      console.log(errorCode);
      console.log("Error message");
      console.log(errorMessage);

      let alert = {
        alertStatus: true,
        alertSeverity: "warning",
        alertMsg: error.code,
      };

      switch (error.code) {
        case "auth/network-request-failed":
          setShowAlert({ ...alert, alertBoldMsg: "- check your connection" });
          break;
        case "auth/email-already-in-use":
          setShowAlert({ ...alert });
          break;
        case "auth/weak-password":
          setShowAlert({
            ...alert,
            alertMsg: "Password should be at least 6 characters",
            alertBoldMsg: "- weak password",
          });
          break;
        case "auth/too-many-requests":
          setShowAlert({
            ...alert,
            alertMsg: "Account temporarily restricted!",
            alertBoldMsg: "reset your passowrd",
          });
          break;
        default:
          setShowAlert({ ...alert, alertBoldMsg: " - try again" });
          break;
      }
    }
  }
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <form
        className="sign-up-form-container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <ClearIcon className="clear-icon" onClick={handleClear} />
        <h2>Create an account</h2>
        <input
          type="text"
          placeholder="Display Name"
          ref={displayNameRef}
          required
        />
        <input type="text" placeholder="Email" ref={emailRef} required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
          required
        />

        <button className="login-btn" type="submit">
          Register
        </button>

        <div className="reg-pass-container">
          <span></span>
          <span onClick={handleNavigate}>Sign in if account exists</span>
        </div>
        <div className="line-break">
          <div className="line"></div>
          <div id="line-break-text">or</div>
          <div className="line"></div>
        </div>
        <button className="google-sign-in" onClick={signUpWithGoogle}>
          LOGIN WITH GOOGLE
        </button>
      </form>
    </div>
  );
}

export default SignUp;
