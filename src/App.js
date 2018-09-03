import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Contacts from "./components/Contacts";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
