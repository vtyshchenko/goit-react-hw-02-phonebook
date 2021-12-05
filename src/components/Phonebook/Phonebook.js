import React, { Component } from 'react';
import styles from './Phonebook';
import Contacts from './Contacts';
import AddContact from './AddContact';
import Filter from './Filter';

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
    const { contacts } = this.state;
    const filterLC = name.toLowerCase();
    const res = this.getFilteredContacts(filterLC, contacts);
    console.log(res);
    if (res) {
      alert(`${name} is alredy in contacts`);
    } else {
      this.setState({
        contacts: [...contacts, { id, name, number }],
      });
    }
  };

  handleOnFiler = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts(filterLC, contacts) {
    return contacts.filter(contactItem => contactItem.name.toLowerCase().includes(filterLC));
  }

  getContacts() {
    const { contacts, filter } = this.state;
    const filterLC = filter.toLowerCase();
    return this.getFilteredContacts(filterLC, contacts);
  }

  render() {
    const { filter } = this.state;
    const contacts = this.getContacts();

    return (
      <div className={styles.componenet}>
        <h1>Phonebook</h1>
        <AddContact onSubmit={this.handleAddContact} />
        <Filter filter={filter} onChange={this.handleOnFiler} />
        <h2>Contacts</h2>
        <Contacts contctsList={contacts} />
      </div>
    );
  }
}

export default Phonebook;
