// jshint esversion:6

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home.component";
import NoteContainer from "./components/note-container/note-container.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<NoteContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
