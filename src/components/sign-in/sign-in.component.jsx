// jshint esversion:6
import "./sign-in.styles.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { SignInUserWithEmailAndPassword } from "../../utils/firebase/firebase-auth.utils";

function SignIn() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/sign-up");
  }

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    /* Prevent default refresh of page after form submit */
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await SignInUserWithEmailAndPassword(email, password);

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
        className="form-container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2>Sign In</h2>
        <input type="text" placeholder="Email" ref={emailRef} />
        <input
          type="password"
          name="password"
          placeholder="Password"
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
        <button className="google-sign-in">LOGIN WITH GOOGLE</button>
      </form>
    </>
  );
}

export default SignIn;
