import PropTypes from 'prop-types';
import { ContactListItem, Contact } from './PhoneBook';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          <Contact>
            {contact.name}: {contact.number}
          </Contact>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </ContactListItem>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
