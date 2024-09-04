import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { originals,action, comedy, horror, romance, documentary } from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost key="originals" url={originals} title='Netflix Originals'/>
      <RowPost key="action" url={action} title='Action' isSmall />
      <RowPost key="comedy" url={comedy} title='Comedy Movies' isSmall />
      <RowPost key="horror" url={horror} title='Horror' isSmall />
      <RowPost key="romance" url={romance} title='Romance' isSmall />
      <RowPost key="documentary" url={documentary} title='Documentary' isSmall />
    </div>
  );
}

export default App;
