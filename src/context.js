import React, { Component } from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      }
      break
    case 'ADD_CONTACT':
      action.payload.id = Math.floor(Math.random() * Math.floor(100000))
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
      break
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            (contact.id === action.payload.id
              ? (contact = action.payload)
              : contact)
        )
      }
      break

    default:
      return state
      break
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '123-456-789'
      },
      {
        id: 2,
        name: 'Sonya Smith',
        email: 'sonya@gmail.com',
        phone: '789-789-789'
      },
      {
        id: 3,
        name: 'Juan Perez',
        email: 'juan@gmail.com',
        phone: '456-456-456'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }

  render () {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer
