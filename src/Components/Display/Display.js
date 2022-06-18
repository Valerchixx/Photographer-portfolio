import React from 'react';
import PropTypes, { number } from 'prop-types';
import styles from './css/display.module.css';

const Display = ({ timer }) => {
  return (
    <div className={styles.timer}>
      <span className={styles.span}>{timer.h >= 10 ? timer.h : `0${timer.h}`}</span>
      &nbsp;:&nbsp;
      <span>{timer.m >= 10 ? timer.m : `0${timer.m}`}</span>
      &nbsp;:&nbsp;
      <span>{timer.s >= 10 ? timer.s : `0${timer.s}`}</span>
      &nbsp;:&nbsp;
      <span>{timer.ms >= 10 ? timer.ms : `0${timer.ms}`}</span>
    </div>

  );
};
Display.propTypes = {
  timer: PropTypes.shape({
    ms: number, s: number, m: number, h: number
  }).isRequired,

};
export default Display;
