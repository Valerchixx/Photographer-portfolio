/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import styles from './Component/css/home.module.css';
import profile from './Component/images/profile.svg';
import Header from './Component/Header';
import arr from './Component/images/arrow.svg';
import Button from './Component/Button';
import Featured from './Component/Featured';
import Title from './Component/Title';
import Explorations from './Component/Explorations';
import Projects from './Component/Projects';
import Footer from './Component/Footer';

function Home() {
  const [sections] = useState({
    featured: useRef(null),
    projects: useRef(null),
    footer: useRef(null),
  });

  const goToSection = (section) => window.scrollTo({ top: section.current.offsetTop, behavior: 'smooth' });
  return (
    <div className={styles.wrappers}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Header
            goToFeatured={() => goToSection(sections.featured)}
            goToProjects={() => goToSection(sections.projects)}
            goToFooter={() => goToSection(sections.footer)}
          />
        </div>
      </div>
      <div className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introInner}>
            <div className={styles.textWrap}>
              <h2 className={styles.introH2}>
                Hi, I am Alexander
                A Product Designer
                based in City.
              </h2>
              <p className={styles.introParag}>
                I help businesses and companies reach
                their goals by designing user-centric digital
                products & interactive experiences.
              </p>
              <div className={styles.introBtn}>
                <Button />
              </div>
            </div>
            <div className={styles.imgWrap}>
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id={styles.featured} ref={sections.featured} className={styles.feautured}>
        <div className={styles.container}>
          <Featured />
        </div>
      </div>
      <div className={styles.explorations}>
        <div className={styles.container}>
          <Title text="Visual Explorations" />
          <Explorations />
        </div>
      </div>
      <div ref={sections.projects} className={styles.projects}>
        <div className={styles.container}>
          <Title text="Personal Projects" />
          <Projects />
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.container}>
          <Title text="Contact Me" />
          <p className={styles.contactParag}>
            If you are looking to hire a product designer,
            I’m currently available for freelance work
          </p>
          <div className={styles.contactBtnWrap}>
            <Button />
          </div>
        </div>
      </div>
      <div ref={sections.footer} className={styles.footer}>
        <div className={styles.container}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Home;
