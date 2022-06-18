import React from 'react';
import PropTypes from 'prop-types';
import icon1 from '../../images/icon1.svg';
import icon2 from '../../images/icon2.svg';
import icon3 from '../../images/icon3.svg';
import icon4 from '../../images/icon4.svg';
import icon5 from '../../images/icon5.svg';
import styles from './css/footer.module.css';

class FooterView extends React.PureComponent {
  render() {
    const { name, date } = this.props;
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
FooterView.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

};
export default FooterView;
