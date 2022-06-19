import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../utils/context/theme-context';
import styles from './css/review.module.css';

const Review = ({ email, body }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === 'dark' ? styles.review : `${styles.review} ${styles.light}`}>
      <div className={theme === 'dark' ? styles.title : `${styles.title} ${styles.light}`}>
        <p>{email}</p>
      </div>
      <div className={styles.body}>
        <p>{body}</p>
      </div>
    </div>
  );
};

Review.propTypes = {
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default Review;
