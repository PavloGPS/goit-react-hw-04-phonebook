import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChangeFilterValue }) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by Name
      <input
        className={css.filterInputField}
        type="text"
        value={value}
        onChange={onChangeFilterValue}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
};

export default Filter;
