import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../utils/context/theme-context';
import styles from './css/header.module.css';
import logo from '../../images/logo.svg';

const Header = ({ goToFeatured, goToFooter, goToProjects }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.headerWrapper}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={theme === 'dark' ? styles.navWrap : `${styles.navWrap} ${styles.light}`}>
          <a className={styles.linkHeader} onClick={goToFeatured} href="#featured">{t('featuredH')}</a>
          <a className={styles.linkHeader} onClick={goToProjects} href="#work">{t('workH')}</a>
          <a className={styles.linkHeader} onClick={goToFooter} href="#contact">{t('contactH')}</a>
          <a className={styles.linkHeader} href="/table/">{t('tableH')}</a>
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
