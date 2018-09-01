import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div class="card">
          <div class="card-header">Contact Name</div>
          <div class="card-body">
            <ul>
              <li>
                <strong>Email:</strong> themail@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> 456-456-465
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
