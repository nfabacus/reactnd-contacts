import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }
  render() {
    return (
      <div className="app">
          <Route exact path="/" render={()=>(
            //You can pass props to the component as well.
            <ListContacts
              onDeleteContact={this.removeContact} contacts={this.state.contacts}
              onNavigate={()=>{
                this.setState({ screen: 'create'})
              }}
            />
          )}/>
        <Route path="/create" component={CreateContact}/>
      </div>
    )
  }
}

export default App;
