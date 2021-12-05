import React, { Component } from 'react';
import styles from './Phonebook';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div className={styles.componenet}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    );
  }
}

export default Phonebook;
