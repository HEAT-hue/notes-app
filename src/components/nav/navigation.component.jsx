// jshint esversion:6
import "./navigation.styles.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

import { UserContext } from "../../contexts/user.context";
import { ModalContext } from "../../contexts/modal.context";
import { signOutUser } from "../../utils/firebase/firebase-auth.utils";

function Navigation() {
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  const { setShowModal } = useContext(ModalContext);

  function handleSignOut() {
    signOutUser();
  }

  function handleSignIn() {
    setShowModal({ status: true, signin: true });
    return;
  }

  function handleNavigate() {
    navigate("/");
  }

  return (
    <nav className="navigation">
      <div>
        <h1>Note Keeper App</h1>
        <NoteAltIcon
          sx={{ fontSize: 34 }}
          onClick={handleNavigate}
          style={{ cursor: "pointer" }}
        />
      </div>
      {currentUser ? (
        <span onClick={handleSignOut} style={{ cursor: "pointer" }}>
          SIGN OUT
        </span>
      ) : (
        <span onClick={handleSignIn} style={{ cursor: "pointer" }}>
          SIGN IN
        </span>
      )}
    </nav>
  );
}

export default Navigation;
