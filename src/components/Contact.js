import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div class="card mb-3">
          <div class="card-header">{this.props.contact.name}</div>
          <div class="card-body">
            <ul>
              <li>
                <strong>Email:</strong> {this.props.contact.email}
              </li>
              <li>
                <strong>Phone:</strong> {this.props.contact.phone}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
