import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner"
import NavBar from "./Nav"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row />
    </div>
  );
}

export default App;
