import React, { Component } from 'react';
import styles from './Phonebook';
import Contacts from './Contacts';
import AddContact from './AddContact';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    console.log(AddContact);
    return (
      <div className={styles.componenet}>
        <h2>Phonebook</h2>
        <AddContact />
        <Contacts
          contctsList={[
            { id: 1, name: 'valdis' },
            { id: 2, name: 'nadya' },
          ]}
        />
      </div>
    );
  }
}

export default Phonebook;
