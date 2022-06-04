import React from 'react';
import HomeView from './HomeView';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alexander',
      description: ` I help businesses and companies reach
      their goals by designing user-centric digital
      products & interactive experiences.`,
      timer: {
        ms: 0,
        s: 0,
        m: 0,
        h: 0,
      },
      time: 0,
      reviews: [],

    };
    this.interv = '';
    const { timer } = this.state;
    this.featuredRef = React.createRef(null);
    this.projectsRef = React.createRef(null);
    this.footerRef = React.createRef(null);
    this.goToSection = (section) => window.scrollTo({ top: section.current.offsetTop, behavior: 'smooth' });
    this.updateH = timer.h;
    this.updateM = timer.m;
    this.updateS = timer.s;
    this.updateMs = timer.ms;
    this.breakPoints = [
      { width: 200, itemsToShow: 1 },
      { width: 800, itemsToShow: 2 },
      { width: 1200, itemsToShow: 3 },
    ];

    this.run = () => {
      const { time } = this.state;
      const currentTime = +new Date();
      this.updateMs = Math.floor(((currentTime - time) / 10) % 100);
      this.updateS = Math.floor(((currentTime - time) / 1000) % 60);
      this.updateM = Math.floor(((currentTime - time) / 1000 / 60) % 60);
      this.updateH = Math.floor(((currentTime - time) / (1000 * 60 * 60)) % 24);
      this.setState({
        timer: {
          ms: this.updateMs, s: this.updateS, m: this.updateM, h: this.updateH,
        },
      });
    };
    this.stop = () => {
      clearInterval(this.interv);
    };
  }

  componentDidMount() {
    this.setState({ time: +new Date() });
    this.interv = setInterval(() => {
      this.run();
    }, 100);
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((json) => this.setState({ reviews: json }));
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const {
      name, description, timer, status, reviews,
    } = this.state;
    return (
      <HomeView
        name={name}
        description={description}
        goToSection={this.goToSection}
        footerRef={this.footerRef}
        featuredRef={this.featuredRef}
        projectsRef={this.projectsRef}
        timer={timer}
        start={this.start}
        status={status}
        stop={this.stop}
        reset={this.reset}
        reviews={reviews}
        breakPoints={this.breakPoints}
      />

    );
  }
}

export default Home;
