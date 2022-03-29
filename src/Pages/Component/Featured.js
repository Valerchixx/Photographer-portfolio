import React from 'react';
import styles from './css/featured.module.css';
import arrow from './images/arrow.svg';
import item1 from './images/item1.jpg';
import item2 from './images/item2.jpg';
import item3 from './images/item3.jpg';
import item4 from './images/item4.jpg';

function Featured() {
  return (
    <div className={styles.wrap}>
      <div className={styles.descr}>
        <img src={arrow} alt="" />
        <p className={styles.featuredParag}>Featured Work</p>
      </div>
      <div className={styles.featuredItems}>
        <div className={styles.featuredCol1}>
          <div className={`${styles.featuredItem} ${styles.featuredItem1}`}>
            <div className={styles.ItemImg}>
              <img className={`${styles.item} ${styles.item1}`} src={item1} alt="" />
              <div className={styles.overlayFeatured}>
                <p className={styles.overlayP}>InVersion</p>
              </div>
            </div>
          </div>
          <div className={`${styles.featuredItem} ${styles.featuredItem2}`}>
            <div className={styles.ItemImg}>
              <img className={`${styles.item} ${styles.item2}`} src={item2} alt="" />
              <div className={styles.overlayFeatured}>
                <div><p className={styles.overlayP}>InVersion</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.featuredCol2}>
          <div className={`${styles.featuredItem} ${styles.featuredItem3}`}>
            <div className={styles.ItemImg}>
              <img className={`${styles.item} ${styles.item3}`} src={item3} alt="" />
              <div className={styles.overlayFeatured}>
                <p className={styles.overlayP}>InVersion</p>
              </div>
            </div>
          </div>
          <div className={`${styles.featuredItem} ${styles.featuredItem4}`}>
            <div className={styles.ItemImg}>
              <img className={`${styles.item} ${styles.item4}`} src={item4} alt="" />
              <div className={styles.overlayFeatured}>
                <p className={styles.overlayP}>InVersion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
