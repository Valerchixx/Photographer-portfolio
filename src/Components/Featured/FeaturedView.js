import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../utils/context/theme-context';
import styles from './css/featured.module.css';
import Overlay from '../Overlay/Overlay';
import arrow from '../../images/arrow.svg';
import item1 from '../../images/item1.jpg';
import item2 from '../../images/item2.jpg';
import item3 from '../../images/item3.jpg';
import item4 from '../../images/item4.jpg';

class FeaturedView extends React.PureComponent {
  itemsCol1 = [item1, item2];

  itemsCol2 = [item3, item4];

  render() {
    const { theme } = this.context;
    const { imgTitle, featuredTitle } = this.props;
    return (
      <div>
        <div className={styles.descr}>
          <img src={arrow} alt="" />
          <p
            className={theme === 'dark' ? styles.featuredParag
              : `${styles.featuredParag} ${styles.light}`}
          >
            {featuredTitle}

          </p>
        </div>
        <div className={styles.featuredItems}>
          <div className={styles.featuredCol1}>
            {this.itemsCol1.map((item) => <Overlay imgSrc={item} imgTitle={imgTitle} />)}
          </div>
          <div className={styles.featuredCol2}>
            {this.itemsCol2.map((item) => <Overlay imgSrc={item} imgTitle={imgTitle} />)}
          </div>
        </div>
      </div>
    );
  }
}
FeaturedView.propTypes = {
  imgTitle: PropTypes.string.isRequired,
  featuredTitle: PropTypes.string.isRequired,

};
FeaturedView.contextType = ThemeContext;
export default FeaturedView;
