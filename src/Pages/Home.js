import React from 'react';
import profile from './Component/images/profile.svg';
import styles from './Component/css/home.module.css';
import Header from './Component/Header';
import Button from './Component/Button';
import Featured from './Component/Featured';
import Title from './Component/Title';
import Explorations from './Component/Explorations';
import Projects from './Component/Projects';
import Footer from './Component/Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alexander',
      description: ` I help businesses and companies reach
      their goals by designing user-centric digital
      products & interactive experiences.`,
    };
    this.featuredRef = React.createRef(null);
    this.projectsRef = React.createRef(null);
    this.footerRef = React.createRef(null);
    this.goToSection = (section) => window.scrollTo({ top: section.current.offsetTop, behavior: 'smooth' });
  }

  render() {
    const { name, description } = this.state;
    return (
      <div className={styles.wrappers}>
        <div className={styles.header}>
          <div className={styles.container}>
            <Header
              goToFeatured={() => this.goToSection(this.featuredRef)}
              goToProjects={() => this.goToSection(this.projectsRef)}
              goToFooter={() => this.goToSection(this.footerRef)}
            />
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
        <div id={styles.featured} ref={this.featuredRef}>
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
        <div ref={this.projectsRef}>
          <div className={styles.container}>
            <Title text="Personal Projects" />
            <Projects />
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
        <div ref={this.footerRef}>
          <div className={styles.container}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
