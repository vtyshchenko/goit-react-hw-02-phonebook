import styles from './Contacts.module.scss';

function Contacts({ contctsList }) {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contctsList.map(contactsItem => (
          <li key={contactsItem.id}>{contactsItem.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Contacts;
