import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/header.module.css';
import logo from './images/logo.svg';

function Header({ goToFeatured, goToFooter, goToProjects }) {
  return (
    <div>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrap}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.navWrap}>
          <a className={styles.linkHeader} onClick={goToFeatured} href="#">Featured</a>
          <a className={styles.linkHeader} onClick={goToProjects} href="#">Work</a>
          <a className={styles.linkHeader} onClick={goToFooter} href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  goToFeatured: PropTypes.string.isRequired,
  goToProjects: PropTypes.string.isRequired,
  goToFooter: PropTypes.string.isRequired,

};

export default Header;
