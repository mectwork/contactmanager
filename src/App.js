import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
