import React, { Component } from 'react'
import { Consumer } from '../../context'

class EditContact extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: '',
      name: '',
      email: '',
      phone: ''
    }
  }

  componentDidMount () {
    const { id, name, email, phone } = this.props.location.state
    this.setState({
      id,
      name,
      email,
      phone
    })
  }

  saveForm = (dispatch, e) => {
    e.preventDefault()
    dispatch({ type: 'EDIT_CONTACT', payload: this.state })
    this.setState({
      id: '',
      name: '',
      email: '',
      phone: ''
    })

    this.props.history.push('/')
  }

  onFormChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render () {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <h1 className='mb3'>Edit Contact</h1>
              <form onSubmit={this.saveForm.bind(this, value.dispatch)}>
                <div className='form-group'>
                  <label htmlFor='name'>Name:</label>
                  <input
                    className='form-control'
                    name='name'
                    type='text'
                    required
                    value={this.state.name}
                    onChange={this.onFormChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email:</label>
                  <input
                    className='form-control'
                    name='email'
                    type='email'
                    required
                    value={this.state.email}
                    onChange={this.onFormChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='phone'>Phone:</label>
                  <input
                    className='form-control'
                    name='phone'
                    type='text'
                    required
                    value={this.state.phone}
                    onChange={this.onFormChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    className='btn btn-dark btn-block'
                    type='submit'
                    value='Save Form'
                  />
                </div>
              </form>
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default EditContact
