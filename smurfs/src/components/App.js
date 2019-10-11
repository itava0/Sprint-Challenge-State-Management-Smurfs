import React, { Component } from "react";
import Smurfs from "./Smurfs"
import SmurfsForm from "./SmurfsForm"
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Welcome to the Smurfs Village!!!</h1>
        <SmurfsForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
