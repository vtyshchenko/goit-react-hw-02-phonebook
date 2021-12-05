import styles from './Filter.module.scss';

function Filter({ contctsList }) {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contctsList.map(contactsItem => (
          <li key={contactsItem.id}>
            {contactsItem.name}: {contactsItem.number}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Filter;
