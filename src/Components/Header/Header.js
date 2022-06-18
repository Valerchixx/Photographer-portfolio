import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/header.module.css';
import logo from '../../images/logo.svg';

const Header = ({ goToFeatured, goToFooter, goToProjects }) => {
  return (
    <div>
      <div className={styles.headerWrapper}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.navWrap}>
          <a className={styles.linkHeader} onClick={goToFeatured} href="#featured">Featured</a>
          <a className={styles.linkHeader} onClick={goToProjects} href="#work">Work</a>
          <a className={styles.linkHeader} onClick={goToFooter} href="#contact">Contact</a>
          <a className={styles.linkHeader} href="/table/">Table</a>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  goToFeatured: PropTypes.func.isRequired,
  goToProjects: PropTypes.func.isRequired,
  goToFooter: PropTypes.func.isRequired,

};

export default Header;
