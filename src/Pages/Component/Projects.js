import React from 'react';
import item1 from './images/project1.jpg';
import item2 from './images/project2.jpg';
import item3 from './images/project3.jpg';
import styles from './css/projects.module.css';

function Projects() {
  return (
    <div className={styles.projectsWrap}>
      <div><img className={styles.item} src={item1} alt="" /></div>
      <div><img className={styles.item} src={item2} alt="" /></div>
      <div><img className={styles.item} src={item3} alt="" /></div>
    </div>
  );
}
export default Projects;
