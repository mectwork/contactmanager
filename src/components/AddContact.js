import React, { Component } from "react";
import { Consumer } from "../context";

class AddContact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: ""
    };
  }

  saveForm = (dispatch, e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: this.state });
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };
  onFormChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Consumer>
        {value => (
          <div className="container">
            <form onSubmit={this.saveForm.bind(this, value.dispatch)}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.onFormChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onFormChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  className="form-control"
                  name="phone"
                  type="text"
                  value={this.state.phone}
                  onChange={this.onFormChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="btn btn-dark btn-block"
                  type="submit"
                  value="Save Form"
                />
              </div>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}
export default AddContact;
