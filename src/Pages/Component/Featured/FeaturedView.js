import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../css/featured.module.css';
import arrow from '../../../images/arrow.svg';
import item1 from '../../../images/item1.jpg';
import item2 from '../../../images/item2.jpg';
import item3 from '../../../images/item3.jpg';
import item4 from '../../../images/item4.jpg';

class FeaturedView extends React.PureComponent {
  render() {
    const { imgTitle, featuredTitle } = this.props;
    return (
      <div>
        <div className={styles.descr}>
          <img src={arrow} alt="" />
          <p className={styles.featuredParag}>{featuredTitle}</p>
        </div>
        <div className={styles.featuredItems}>
          <div>
            <div>
              <div className={styles.ItemImg}>
                <img className={styles.item} src={item1} alt="item1 img" />
                <div className={styles.overlayFeatured}>
                  <p className={styles.overlayP}>{imgTitle}</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.ItemImg}>
                <img className={styles.item} src={item2} alt="item2 img" />
                <div className={styles.overlayFeatured}>
                  <div><p className={styles.overlayP}>InVersion</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.featuredCol2}>
            <div>
              <div className={styles.ItemImg}>
                <img className={styles.item} src={item3} alt="item3 img" />
                <div className={styles.overlayFeatured}>
                  <p className={styles.overlayP}>{imgTitle}</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.ItemImg}>
                <img className={styles.item} src={item4} alt="item 4 img" />
                <div className={styles.overlayFeatured}>
                  <p className={styles.overlayP}>{imgTitle}</p>
                </div>
              </div>
            </div>
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
export default FeaturedView;
