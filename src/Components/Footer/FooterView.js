import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import i18n from '../../i18n';
import ThemeContext from '../../utils/context/theme-context';
import icon1 from '../../images/icon1.svg';
import icon2 from '../../images/icon2.svg';
import icon3 from '../../images/icon3.svg';
import icon4 from '../../images/icon4.svg';
import icon5 from '../../images/icon5.svg';
import styles from './css/footer.module.css';

const FooterView = ({ name, date, changeLang }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.footerWrap}>
      <div>
        <p className={theme === 'dark' ? styles.copyright : `${styles.copyright} ${styles.light}`}>
          Made by
          {' '}
          <span>{name}</span>
          {' '}
          — Copyright 2021
          {' '}
          {date}
        </p>
      </div>
      <div className={styles.icons}>
        <div><img className={styles.icon} src={icon1} alt="icon" /></div>
        <div><img className={styles.icon} src={icon2} alt="icon" /></div>
        <div><img className={styles.icon} src={icon3} alt="icon" /></div>
        <div><img className={styles.icon} src={icon4} alt="icon" /></div>
        <div><img className={styles.icon} src={icon5} alt="icon" /></div>
      </div>
      <div>
        <select defaultValue={i18n.language} name="language" onChange={changeLang}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ua">Український</option>
        </select>
      </div>
    </div>

  );
};

FooterView.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changeLang: PropTypes.func.isRequired,

};
export default FooterView;
