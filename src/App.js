import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import Header from './components/layout/Header'
import Contacts from './components/contacts/Contacts'
import { Provider } from './context'
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
import NotFound from './pages/NotFound'

class App extends Component {
  render () {
    return (
      <Provider>
        <BrowserRouter>
          <div className='App'>
            <Header />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/contacts/add' component={AddContact} />
                <Route
                  exact
                  path='/contacts/edit/:id'
                  component={EditContact}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
