import { PropTypes } from 'prop-types';
import {
  ContactListEl,
  ContactListItem,
  ContactItemHeader,
  ContactItemText,
  ContactItemButton,
} from 'components/ContactList/ContactList.styled';
export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ContactListEl>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ContactListItem key={id}>
            <ContactItemHeader>{name}</ContactItemHeader>
            <ContactItemText>{number}</ContactItemText>
            <ContactItemButton type="button" onClick={() => deleteContact(id)}>
              Delete
            </ContactItemButton>
          </ContactListItem>
        );
      })}
    </ContactListEl>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
