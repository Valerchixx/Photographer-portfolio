import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/overlay.module.css';

const Overlay = ({ imgSrc, imgTitle }) => {
  return (
    <div>
      <div className={styles.ItemImg}>
        <img className={styles.item} src={imgSrc} alt="item1 img" />
        <div className={styles.overlayFeatured}>
          <p className={styles.overlayP}>{imgTitle}</p>
        </div>
      </div>
    </div>
  );
};
Overlay.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgTitle: PropTypes.string.isRequired,

};

export default Overlay;
