import React, { Component } from 'react'
import { Consumer } from '../../context'
import { Link } from 'react-router-dom'

export default class Contact extends Component {
  constructor () {
    super()
    this.state = {
      showInfo: false
    }
  }

  ToggleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  RemoveContact = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  }
  render () {    
    const location = {
      pathname: `/contacts/edit/${this.props.contact.id}`,
      state: this.props.contact
    }
    return (
      <Consumer>
        {value => (
          <React.Fragment>
            <div className='card mb-3'>
              <div className='card-header'>
                <i
                  className='fas fa-sort-down mr-2'
                  style={{ cursor: 'pointer' }}
                  onClick={this.ToggleInfo}
                />
                {this.props.contact.name}
                <i
                  className='fas fa-times'
                  style={{ float: 'right', color: 'red', cursor: 'pointer' }}
                  onClick={this.RemoveContact.bind(
                    this,
                    this.props.contact.id,
                    value.dispatch
                  )}
                />
                <Link to={location}>
                  <i
                    className='fas fa-pen mr-2'
                    style={{ float: 'right', cursor: 'pointer' }}
                  />
                </Link>
              </div>
              {this.state.showInfo
                ? <div className='card-body'>
                  <ul>
                    <li>
                      <strong>Email:</strong> {this.props.contact.email}
                    </li>
                    <li>
                      <strong>Phone:</strong> {this.props.contact.phone}
                    </li>
                  </ul>
                </div>
                : null}
            </div>
          </React.Fragment>
        )}
      </Consumer>
    )
  }
}
