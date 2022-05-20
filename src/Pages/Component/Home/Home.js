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
    };
    this.featuredRef = React.createRef(null);
    this.projectsRef = React.createRef(null);
    this.footerRef = React.createRef(null);
    this.goToSection = (section) => window.scrollTo({ top: section.current.offsetTop, behavior: 'smooth' });
  }

  render() {
    const { name, description } = this.state;
    return (
      <HomeView
        name={name}
        description={description}
        goToSection={this.goToSection}
        footerRef={this.footerRef}
        featuredRef={this.featuredRef}
        projectsRef={this.projectsRef}
      />

    );
  }
}

export default Home;
