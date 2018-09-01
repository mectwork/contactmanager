import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showInfo: false
    };
  }

  ToggleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    return (
      <div className="container">
        <div class="card mb-3">
          <div class="card-header">
            <i class="fas fa-sort-down mr-2" onClick={this.ToggleInfo} />
            {this.props.contact.name}
          </div>
          {this.state.showInfo ? (
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
          ) : null}
        </div>
      </div>
    );
  }
}
