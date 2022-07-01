import React, { useState, useEffect } from 'react';
import HomeView from './HomeView';

const Home = () => {
  const [name] = useState('Alexander');
  const [description] = useState(
    ` I help businesses and companies reach
    their goals by designing user-centric digital
    products & interactive experiences.`
  );
  const [reviews, setReviews] = useState([]);
  const [timer, setTimer] = useState({
    ms: 0,
    s: 0,
    m: 0,
    h: 0,
  });
  const [time] = useState(+new Date());

  const featuredRef = React.createRef(null);
  const projectsRef = React.createRef(null);
  const footerRef = React.createRef(null);
  const goToSection = (section) => window.scrollTo({ top: section.current.offsetTop, behavior: 'smooth' });
  const breakPoints = [
    { width: 200, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

  let updateH = timer.h;
  let updateM = timer.m;
  let updateS = timer.s;
  let updateMs = timer.ms;

  const run = () => {
    const currentTime = +new Date();
    updateMs = Math.floor(((currentTime - time) / 10) % 100);
    updateS = Math.floor(((currentTime - time) / 1000) % 60);
    updateM = Math.floor(((currentTime - time) / 1000 / 60) % 60);
    updateH = Math.floor(((currentTime - time) / (1000 * 60 * 60)) % 24);
    setTimer({
      ms: updateMs, m: updateM, s: updateS, h: updateH
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      run();
    }, 10);
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setReviews(data);
      });
    return () => clearInterval(interval);
  }, []);

  return (
    <HomeView
      name={name}
      description={description}
      goToSection={goToSection}
      footerRef={footerRef}
      featuredRef={featuredRef}
      projectsRef={projectsRef}
      timer={timer}
      reviews={reviews}
      breakPoints={breakPoints}
    />

  );
};

export default Home;
