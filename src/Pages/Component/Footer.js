import React from 'react';
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
import icon5 from './images/icon5.svg';
import styles from './css/footer.module.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Valeria Proshachenko',
      date: '2021',
    };
  }

  render() {
    const { name, date } = this.state;
    return (
      <div className={styles.footerWrap}>
        <div>
          <p className={styles.copyright}>
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
      </div>

    );
  }
}

export default Footer;
