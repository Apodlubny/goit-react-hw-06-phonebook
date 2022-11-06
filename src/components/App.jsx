import { ContactList } from 'components/ContactList/ContactList';

import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from 'components/App.styled';

import { useSelector } from 'react-redux';
import { getContactsData } from 'redux/contactsSlice';

export const App = () => {
  const { contactsList } = useSelector(getContactsData);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      {contactsList.length > 0 && <h2>Contacts</h2>}
      {contactsList.length > 0 && <Filter />}

      <ContactList />
    </Container>
  );
};
