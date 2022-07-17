import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes, { number, string } from 'prop-types';
import Carousel from 'react-elastic-carousel';
import i18n from '../../i18n';
import ThemeContext from '../../utils/context/theme-context';
import profile from '../../images/profile.svg';
import styles from './css/home.module.css';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import Featured from '../../Components/Featured/Featured';
import Title from '../../Components/Title/Title';
import Explorations from '../../Components/Explorations/Explorations';
import SwitchThemes from '../../Components/SwitchThemes/SwitchThemes';
import Projects from '../../Components/Projects/Projects';
import Footer from '../../Components/Footer/Footer';
import Display from '../../Components/Display/Display';
import Review from '../../Components/Review/Review';

const HomeView = ({
  name,
  goToSection,
  footerRef,
  projectsRef,
  featuredRef,
  timer,
  reviews,
  breakPoints,

}) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const author = i18n.language === 'ua' ? 'Олександр' : name;
  return (
    <div className={theme === 'dark' ? styles.wrappers : `${styles.wrappers} ${styles.light}`}>
      <div className={theme === 'dark' ? styles.header : `${styles.header} ${styles.light}`}>
        <div className={styles.container}>
          <div>
            <Header
              goToFeatured={() => goToSection(featuredRef)}
              goToProjects={() => goToSection(projectsRef)}
              goToFooter={() => goToSection(footerRef)}
            />
          </div>
          <div className={styles.switchThemes}>
            <SwitchThemes />
          </div>
          <Display timer={timer} />
        </div>
      </div>
      <div>
        <div className={styles.container}>
          <div className={styles.introInner}>
            <div className={styles.introHh}>
              <h2 className={theme === 'dark' ? styles.introH2 : `${styles.introH2} ${styles.light}`}>
                {t('intro', { name: author })}
              </h2>
              <p className={styles.introParag}>
                {t('descr')}
              </p>
              <div className={styles.introBtn}>
                <Button gmail="v.proshachenko@gmail.com" />
              </div>
            </div>
            <div className={styles.imgWrap}>
              <img src={profile} alt="profile img" />
            </div>
          </div>
        </div>
      </div>
      <div id={styles.featured} ref={featuredRef}>
        <div className={styles.container}>
          <Featured />
        </div>
      </div>
      <div>
        <div className={styles.container}>
          <Title text={t('visual')} />
          <Explorations />
        </div>
      </div>
      <div ref={projectsRef}>
        <div className={styles.container}>
          <Title text={t('projects')} />
          <Projects />
        </div>
      </div>
      <div className={styles.reviews}>
        <Title text={t('reviews')} />
        <div className={styles.reviewsWrap}>
          <Carousel breakPoints={breakPoints}>
            {reviews && reviews.map((item) => (
              <div key={item.id}>
                <Review email={item.email} body={item.body} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div>
        <div className={styles.container}>
          <Title text={t('contact')} />
          <p className={styles.contactParag}>{t('contactMe')}</p>
          <div className={styles.contactBtnWrap}>
            <Button gmail="v.proshachenko@gmail.com" />
          </div>
        </div>
      </div>
      <div ref={footerRef}>
        <div className={styles.container}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
HomeView.propTypes = {
  name: PropTypes.string.isRequired,
  goToSection: PropTypes.func.isRequired,
  footerRef: PropTypes.shape({}).isRequired,
  projectsRef: PropTypes.shape({}).isRequired,
  featuredRef: PropTypes.shape({}).isRequired,
  timer: PropTypes.shape({
    ms: number, s: number, m: number, h: number
  }).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    bosy: string,
    email: string,
    id: number,
    nam: string,
    postId: number
  })).isRequired,
  breakPoints: PropTypes.arrayOf(PropTypes.shape({ width: number, itemsToShow: number })).isRequired,
};
export default HomeView;
