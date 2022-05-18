import React from 'react';
import styles from './css/explorations.module.css';
import item1 from './images/gallery1.jpg';
import item2 from './images/gallery2.jpg';
import item3 from './images/gallery3.jpg';
import item4 from './images/gallery4.jpg';
import item5 from './images/gallery5.jpg';
import item6 from './images/gallery6.jpg';

function Explorations() {
  return (
    <div className={styles.explorationsWrap}>
      <div className={styles.explorationsCol1}>
        <div><img className={styles.item} src={item1} alt="item img" /></div>
        <div><img className={styles.item} src={item2} alt="item img" /></div>
        <div><img className={styles.item} src={item3} alt="item img" /></div>
      </div>
      <div className={styles.explorationsCol2}>
        <div><img className={styles.item} src={item4} alt="item img" /></div>
        <div><img className={styles.item} src={item5} alt="item img" /></div>
        <div><img className={styles.item} src={item6} alt="item img" /></div>
      </div>
    </div>
  );
}

export default Explorations;
