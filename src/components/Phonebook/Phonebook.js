import React, { Component } from 'react';
import styles from './Phonebook';
import Contacts from './Contacts';
import AddContact from './AddContact';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = ({ id, name, number }) => {
    this.setState({
      contacts: [...this.state.contacts, { id, name, number }],
    });
  };

  render() {
    return (
      <div className={styles.componenet}>
        <h2>Phonebook</h2>
        <AddContact onSubmit={this.handleAddContact} />
        <Contacts contctsList={this.state.contacts} />
      </div>
    );
  }
}

export default Phonebook;
