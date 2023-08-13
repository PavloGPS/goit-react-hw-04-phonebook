import React from 'react';
import ContactsItem from './ContactsItem/ContactsItem';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteBtnClick }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <ContactsItem
          key={contact.id}
          contact={contact}
          onDeleteBtnClick={onDeleteBtnClick}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};

export default ContactsList;
