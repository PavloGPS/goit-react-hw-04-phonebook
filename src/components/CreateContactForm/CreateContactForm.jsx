import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './CreateContactForm.module.css';

class CreateContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onCreateContact: PropTypes.func.isRequired,
  };

  handleOnChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleCreateContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };
    this.props.onCreateContact(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form
        className={css.createContactForm}
        onSubmit={this.handleCreateContact}
      >
        <label className={css.formLabel}>
          Name
          <input
            className={css.formInputField}
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleOnChange}
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            className={css.formInputField}
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleOnChange}
          />
        </label>

        <button className={css.submitBtnForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default CreateContactForm;
