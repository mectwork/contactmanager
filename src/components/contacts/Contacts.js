import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => (
          <React.Fragment>            
            <h1 className="mb3">Contact List</h1>
            {value.contacts.map(contact => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}
