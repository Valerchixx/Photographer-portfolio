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

    this.start = () => {
      this.run();
      this.interv = setInterval(this.run, 10);
    };

    this.run = () => {
      if (this.updateM === 60) {
        this.updateH += 1;
        this.updateM = 0;
      }
      if (this.updateS === 60) {
        this.updateM += 1;
        this.updateS = 0;
      }
      if (this.updateMs === 100) {
        this.updateS += 1;
        this.updateMs = 0;
      }
      this.updateMs += 1;
      return this.setState({
        timer:
        {
          ms: this.updateMs, m: this.updateM, s: this.updateS, h: this.updateH,
        },
      });
    };
    this.stop = () => {
      clearInterval(this.interv);
    };
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const {
      name, description, timer, status,
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
      />

    );
  }
}

export default Home;
