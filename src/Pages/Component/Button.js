import React, { useState } from 'react';
import envelope from './images/envelope.svg';
import styles from './css/button.module.css';

function Button() {
  const [gmail] = useState(' hi@yourname.com');
  return (
    <button className={styles.btn} type="button">
      <img src={envelope} alt="" />
      {gmail}
    </button>
  );
}

export default Button;
