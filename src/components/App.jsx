import React, { Component } from 'react';
import CreateContactForm from './CreateContactForm/CreateContactForm';
import ContactsList from './ContactsList/ContactsList';
import Section from './Section/Section';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    // Loads contacts from localStorage if they exist
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevState) {
    // Saves contacts to localStorage whenever the state changes
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const nameIsAlreadyInContacts = this.state.contacts.some(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (nameIsAlreadyInContacts) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  setFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLocaleLowerCase() });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter)
    );
  };
  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <CreateContactForm onCreateContact={this.addContact} />
        <Section title="Contacts">
          <Filter value={filter} onChangeFilterValue={this.setFilter} />
          <ContactsList
            contacts={filteredContacts}
            onDeleteBtnClick={this.removeContact}
          />
        </Section>
      </>
    );
  }
}
