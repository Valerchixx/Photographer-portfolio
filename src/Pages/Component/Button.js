import React from 'react';
import envelope from './images/envelope.svg';
import styles from './css/button.module.css';

function Button() {
  return (
    <button className={styles.btn} type="button">
      <img src={envelope} alt="" />
      hi@yourname.com
    </button>
  );
}

export default Button;
