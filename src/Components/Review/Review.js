import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/review.module.css';

const Review = ({ email, body }) => {
  return (
    <div className={styles.review}>
      <div className={styles.title}>
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
