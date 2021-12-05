import styles from './Contacts.module.scss';

function Contacts({ contctsList }) {
  return (
    <>
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

export default Contacts;
