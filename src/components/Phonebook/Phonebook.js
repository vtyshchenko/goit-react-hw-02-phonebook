import React, { Component } from 'react';
import styles from './Phonebook';
import Contacts from './Contacts';
import AddContact from './AddContact';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return (
      <div className={styles.componenet}>
        <h2>Phonebook</h2>
        <AddContact />
        <Contacts
          contctsList={[
            { id: 1, name: 'valdis', number: '111-11-11' },
            { id: 2, name: 'nadya', number: '111-22-33' },
          ]}
        />
      </div>
    );
  }
}

export default Phonebook;
