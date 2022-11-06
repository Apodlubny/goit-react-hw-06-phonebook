import {
  ContactListEl,
  ContactListItem,
  ContactItemHeader,
  ContactItemText,
  ContactItemButton,
} from 'components/ContactList/ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getContactsData, deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contactsList, filter } = useSelector(getContactsData);
  const getFilteredContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const deleteCard = contactId => {
    dispatch(deleteContact(contactId));
  };
  const filteredContacts = getFilteredContact();
  return (
    <ContactListEl>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ContactListItem key={id}>
            <ContactItemHeader>{name}</ContactItemHeader>
            <ContactItemText>{number}</ContactItemText>
            <ContactItemButton type="button" onClick={() => deleteCard(id)}>
              Delete
            </ContactItemButton>
          </ContactListItem>
        );
      })}
    </ContactListEl>
  );
};
