// jshint esversion:6
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

import { UserContext } from "../../contexts/user.context";
import { ModalContext } from "../../contexts/modal.context";
import { signOutUser } from "../../utils/firebase/firebase-auth.utils";

import { NavigationEl, NavigationDescription, H1 } from "./navigation.styles";

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
    <NavigationEl>
      <NavigationDescription>
        <H1>Notes</H1>
        <NoteAltIcon
          sx={{ fontSize: 34 }}
          onClick={handleNavigate}
          style={{ cursor: "pointer" }}
        />
      </NavigationDescription>
      {currentUser ? (
        <span onClick={handleSignOut} style={{ cursor: "pointer" }}>
          SIGN OUT
        </span>
      ) : (
        <span onClick={handleSignIn} style={{ cursor: "pointer" }}>
          SIGN IN
        </span>
      )}
    </NavigationEl>
  );
}

export default Navigation;
