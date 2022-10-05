// jshint esversion:6
import "./sign-up.styles.scss";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { NoteContext } from "../../contexts/note.context";

import { nanoid } from "nanoid";

import { createNewUserWithEmailAndPassword } from "../../utils/firebase/firebase-auth.utils";

function SignUp() {
  const { addNote } = useContext(NoteContext);

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/sign-in");
  }

  const displayNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  async function handleSubmit(e) {
    /* Prevent default refresh of page after form submit */
    e.preventDefault();

    const displayName = displayNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const { user } = await createNewUserWithEmailAndPassword(email, password);

      console.log("Created user");
      console.log(user);

      // Create default user note
      console.log("Creating default user notes");

      const defaultNotes = [
        {
          id: nanoid(),
          title: `Welcome ${displayName}`,
          body: "Try notes for free, an awesome way to create notes on different happenings around you",
        },
        {
          id: nanoid(),
          title: "Getting started",
          body: "Try adding a new note! Dont't forget you can always delete notes you don't need",
        },
      ];

      defaultNotes.forEach((note) => {
        addNote(note, user.uid);
      });

      console.log("Finished creating user");
      console.log(user);
      navigate("/");

      /* Clear input form fields */
      e.target.reset();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error code");
      console.log(errorCode);
      console.log("Error message");
      console.log(errorMessage);
    }
  }
  return (
    <>
      <form
        className="sign-up-form-container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2>Create an account</h2>
        <input type="text" placeholder="Display Name" ref={displayNameRef} />
        <input type="text" placeholder="Email" ref={emailRef} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <input
          type="password"
          name="password"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
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
        <button className="google-sign-in">LOGIN WITH GOOGLE</button>
      </form>
    </>
  );
}

export default SignUp;
