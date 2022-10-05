// jshint esversion:6

import { Outlet } from "react-router-dom";

import Navigation from "../../components/nav/navigation.component";

function Home() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Home;
