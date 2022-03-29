import React from 'react';
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
import icon5 from './images/icon5.svg';
import styles from './css/footer.module.css';

function Footer() {
  return (
    <div className={styles.footerWrap}>
      <div>
        <p className={styles.copyright}>
          Made by

          <span> Valeria Proshachenko </span>
          — Copyright 2021
        </p>
      </div>
      <div className={styles.icons}>
        <div><img className={styles.icon} src={icon1} alt="" /></div>
        <div><img className={styles.icon} src={icon2} alt="" /></div>
        <div><img className={styles.icon} src={icon3} alt="" /></div>
        <div><img className={styles.icon} src={icon4} alt="" /></div>
        <div><img className={styles.icon} src={icon5} alt="" /></div>
      </div>
    </div>
  );
}

export default Footer;
