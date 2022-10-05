// jshint esversion:6
import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListner } from "../utils/firebase/firebase-auth.utils";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  // destructure props
  const { children } = props;

  const [currentUser, setCurrentUser] = useState();

  // Mount Auth listner
  useEffect(() => {
    onAuthStateChangedListner((user) => {
      setCurrentUser(user);
    });
  }, []);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
