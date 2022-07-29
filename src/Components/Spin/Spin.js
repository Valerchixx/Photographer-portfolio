import { TailSpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux/es/exports';
import styles from './css/spin.module.css';

const Spin = () => {
  const visibleProperty = useSelector(({ reviews }) => reviews.loading);
  return (
    <div className={visibleProperty ? styles.loaderStyle : `${styles.loaderStyle} ${styles.close}`}>
      <div className={styles.loaderWrap}>
        <TailSpin color="#00BFFF" height={110} width={110} visible={visibleProperty} />
      </div>
    </div>
  );
};

export default Spin;
