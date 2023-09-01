import { useState, useEffect } from 'react';
import CreateContactForm from './CreateContactForm/CreateContactForm';
import ContactsList from './ContactsList/ContactsList';
import Section from './Section/Section';
import Filter from './Filter/Filter';
export const App = () => {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(window.localStorage.getItem('contacts') ?? [])
  );
  const [filter, setFilter] = useState('');
  // Saves contacts to localStorage whenever contacts changes
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // продовжити звідси
  const addContact = newContact => {
    const nameIsAlreadyInContacts = contacts.some(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (nameIsAlreadyInContacts) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prevState => [newContact, ...prevState]);
  };

  const setFilterValue = e => {
    setFilter(e.currentTarget.value.toLocaleLowerCase());
  };

  const getFilteredContacts = () => {
    // const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter)
    );
  };
  const removeContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <CreateContactForm onCreateContact={addContact} />
      <Section title="Contacts">
        <Filter value={filter} onChangeFilterValue={setFilterValue} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteBtnClick={removeContact}
        />
      </Section>
    </>
  );
};
