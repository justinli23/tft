import React from "react";
import "./App.css";
import Header from "./Components/Header";
// import NavBar from "./Components/navbar";
import MainContainer from "./Components/tree_components/MainContainer";
// import Data from "./Components/list_components/data-container";
import Disclaimer from "./Components/Disclaimer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <NavBar /> */}
      <MainContainer />
      {/* <Data /> */}
      <Disclaimer />
    </div>
  );
}

export default App;
