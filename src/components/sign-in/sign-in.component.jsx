// jshint esversion:6
import "./sign-in.styles.scss";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";

import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-auth.utils";

import { ModalContext } from "../../contexts/modal.context";

function SignIn() {
  const navigate = useNavigate();

  const { setShowModal, setShowAlert } = useContext(ModalContext);

  function handleNavigate() {
    setShowModal({ status: true, signin: false });
  }

  const emailRef = useRef();
  const passwordRef = useRef();

  /* Remove sign-in modal */
  function handleClear() {
    setShowModal({ status: false, sigin: true });
  }

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

  async function signInWithGoogle() {
    /* Remove sign in modal */
    handleClear();

    /* Auth state captures signed in user automatically */
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
      return;
    }

    console.log("User details");
    console.log(user);

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
  }

  async function handleSubmit(e) {
    /* Prevent default refresh of page after form submit */
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      /* Sign in a user */
      await signInUserWithEmailAndPassword(email, password);

      /* Clear input form fields */
      e.target.reset();

      /* Inform user if successful */
      setShowAlert({
        alertStatus: true,
        alertSeverity: "success",
        alertTitle: "Success",
        alertMsg: "Sign in successful",
        alertBoldMsg: " - Welcome",
      });

      /* Remove sign in modal */
      handleClear();

      /* Clear alert to user */
      clearAlert();

      /* Navigate to home page */
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      let alert = {
        alertStatus: true,
        alertSeverity: "error",
        alertMsg: error.code,
      };

      switch (error.code) {
        case "auth/network-request-failed":
          setShowAlert({ ...alert, alertBoldMsg: "- check your connection" });
          break;
        case "auth/invalid-email":
        case "auth/wrong-password":
          setShowAlert({
            ...alert,
            alertMsg: "Invalid email or password!",
            alertBoldMsg: "- check your details",
          });
          break;
        case "auth/user-not-found":
          setShowAlert({
            ...alert,
            alertBoldMsg: "- check your details",
          });
          break;
        case "auth/too-many-requests":
          setShowAlert({
            ...alert,
            alertMsg: "Account temporarily restricted!",
            alertBoldMsg: "- reset your passowrd",
          });
          break;
        default:
          setShowAlert({ ...alert, alertBoldMsg: "try again!" });
          break;
      }
      clearAlert();
      console.log("Error code");
      console.log(errorCode);
      console.log("Error message");
      console.log(errorMessage);
    }
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <form
        className="sign-in__form-container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <ClearIcon className="clear-icon" onClick={handleClear} />
        <h2>Sign In</h2>
        <input type="text" placeholder="Email" ref={emailRef} required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />
        <button className="login-btn" type="submit">
          Login
        </button>
        <div className="reg-pass-container">
          <span onClick={handleNavigate}>Sign Up Now</span>
          <span>forgot password</span>
        </div>
        <div className="line-break">
          <div className="line"></div>
          <div id="line-break-text">or</div>
          <div className="line"></div>
        </div>
        <button className="google-sign-in" onClick={signInWithGoogle}>
          LOGIN WITH GOOGLE
        </button>
      </form>
    </div>
  );
}

export default SignIn;
