import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../utils/context/theme-context';
import styles from './css/title.module.css';

const Title = ({ text }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <h2 className={theme === 'dark' ? styles.title : `${styles.title} ${styles.light}`}>{text}</h2>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
