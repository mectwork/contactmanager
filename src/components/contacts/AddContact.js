import React, { Component } from "react";
import { Consumer } from "../../context";

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

    this.props.history.push('/');
  };

  onFormChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => (
          <React.Fragment>
            <h1 className="mb3">Add Contact</h1>
            <form onSubmit={this.saveForm.bind(this, value.dispatch)}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  required
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
                  required
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
                  required
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
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}
export default AddContact;
