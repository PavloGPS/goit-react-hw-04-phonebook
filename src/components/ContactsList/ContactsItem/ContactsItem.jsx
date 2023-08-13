import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';

const ContactsItem = ({ contact, onDeleteBtnClick }) => {
  const { name, number, id } = contact;
  return (
    <li className={css.ContactsItem}>
      <p>
        {name}: {number}
      </p>
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => onDeleteBtnClick(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};

export default ContactsItem;
