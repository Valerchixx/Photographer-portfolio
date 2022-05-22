import React from 'react';
import PropTypes from 'prop-types';
import envelope from '../../images/envelope.svg';
import styles from '../../css/button.module.css';

function Button({ gmail }) {
  return (
    <button className={styles.btn} type="button">
      <img src={envelope} alt="" />
      {gmail}
    </button>
  );
}
Button.propTypes = {
  gmail: PropTypes.string.isRequired,
};

export default Button;
