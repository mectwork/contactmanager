import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
