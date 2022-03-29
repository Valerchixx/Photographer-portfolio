import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/title.module.css';

function Title({ text }) {
  return (
    <h2 className={styles.title}>{text}</h2>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
