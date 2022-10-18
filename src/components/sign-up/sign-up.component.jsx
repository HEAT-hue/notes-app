// jshint esversion:6
import { nanoid } from "nanoid";

import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { NoteContext } from "../../contexts/note.context";
import { ModalContext } from "../../contexts/modal.context";

/* Styled Components */
import {
  signInWithGooglePopup,
  createNewUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-auth.utils";

import {
  Container,
  ClearModal,
  H2,
  Input,
  LoginButton,
  RegOption,
  LineBreak,
  Line,
  LineBreakText,
  GoogleButton,
} from "./sign-up.styles";

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
    /* Remove sign in modal */
    handleClear();

    /* Auth state lsitens for signed in user to create user doc */
    const user = await signInWithGooglePopup();

    if (!user) {
      /* Inform user if successful */
      setShowAlert({
        alertStatus: true,
        alertSeverity: "error",
        alertTitle: "Success",
        alertMsg: "Sign in failed",
        alertBoldMsg: " - try again ",
      });

      /* Clear alert to user */
      clearAlert();
      return;
    }

    /* Inform user if successful */
    setShowAlert({
      alertStatus: true,
      alertSeverity: "success",
      alertTitle: "Success",
      alertMsg: "Sign in successful",
      alertBoldMsg: " - Welcome",
    });

    /* Clear alert to user */
    clearAlert();

    /* Navigate to home page */
    navigate("/");
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
      <Container
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <ClearModal onClick={handleClear} />
        <H2>Create an account</H2>
        <Input
          type="text"
          placeholder="Display Name"
          ref={displayNameRef}
          required
        />
        <Input type="text" placeholder="Email" ref={emailRef} required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
          required
        />
        <LoginButton type="submit"> Register </LoginButton>

        <RegOption>
          <span></span>
          <span onClick={handleNavigate}>Sign in if account exists</span>
        </RegOption>

        <LineBreak>
          <Line />
          <LineBreakText>or</LineBreakText>
          <Line />
        </LineBreak>

        <GoogleButton
          buttonType={"Google"}
          type="button"
          onClick={signUpWithGoogle}
        >
          GOOGLE SIGN IN
        </GoogleButton>
      </Container>
    </div>
  );
}

export default SignUp;
