// jshint esversion:6

import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home/Home.component";
import NoteContainer from "./components/note-container/note-container.component";
import SignInPage from "./routes/Sign-in/sign-in.page.component";
import SignUpPage from "./routes/Sign-up/sign-up.page.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<NoteContainer />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
