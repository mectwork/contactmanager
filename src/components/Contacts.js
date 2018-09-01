import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "john@gmail.com",
          phone: "123-456-789"
        },
        {
          id: 2,
          name: "Sonya Smith",
          email: "sonya@gmail.com",
          phone: "789-789-789"
        },
        {
          id: 3,
          name: "Juan Perez",
          email: "juan@gmail.com",
          phone: "456-456-456"
        }
      ]
    };
  }

  RemoveContact = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <div>
        {this.state.contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            removeContact={this.RemoveContact.bind(this, contact.id)}
          />
        ))}
      </div>
    );
  }
}
