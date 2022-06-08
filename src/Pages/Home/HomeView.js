import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import profile from '../../images/profile.svg';
import styles from './home.module.css';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import Featured from '../../Components/Featured/Featured';
import Title from '../../Components/Title/Title';
import Explorations from '../../Components/Explorations/Explorations';
import Projects from '../../Components/Projects/Projects';
import Footer from '../../Components/Footer/Footer';
import Display from '../../Components/Display/Display';
import Review from '../../Components/Review/Review';

class HomeView extends React.PureComponent {
  render() {
    const {
      name,
      description,
      goToSection,
      footerRef,
      projectsRef,
      featuredRef,
      timer,
      reviews,
      breakPoints,
    } = this.props;
    return (
      <div className={styles.wrappers}>
        <div className={styles.header}>
          <div className={styles.container}>
            <Header
              goToFeatured={() => goToSection(featuredRef)}
              goToProjects={() => goToSection(projectsRef)}
              goToFooter={() => goToSection(footerRef)}
            />
            <Display timer={timer} />
          </div>
        </div>
        <div>
          <div className={styles.container}>
            <div className={styles.introInner}>
              <div>
                <h2 className={styles.introH2}>
                  Hi, I am
                  {' '}
                  {name}
                  {' '}
                  A Product Designer
                  based in City.
                </h2>
                <p className={styles.introParag}>
                  {description}
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
            <Title text="Visual Explorations" />
            <Explorations />
          </div>
        </div>
        <div ref={projectsRef}>
          <div className={styles.container}>
            <Title text="Personal Projects" />
            <Projects />
          </div>
        </div>
        <div className={styles.reviews}>
          <Title text="Reviews" />
          <div className={styles.reviewsWrap}>
            <Carousel breakPoints={breakPoints}>
              {reviews.slice(0, 9).map((item) => (
                <div key={item.id}>
                  <Review email={item.email} body={item.body} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div>
          <div className={styles.container}>
            <Title text="Contact Me" />
            <p className={styles.contactParag}>
              If you are looking to hire a product designer,
              I’m currently available for freelance work
            </p>
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
  }
}
HomeView.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  goToSection: PropTypes.func.isRequired,
  footerRef: PropTypes.object.isRequired,
  projectsRef: PropTypes.object.isRequired,
  featuredRef: PropTypes.object.isRequired,
  timer: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  breakPoints: PropTypes.array.isRequired,
};
export default HomeView;
