import React from 'react';
import FeaturedView from './FeaturedView';

class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredTitle: 'Featured Work',
      imgTitle: 'InVersion',

    };
  }

  render() {
    const { featuredTitle, imgTitle } = this.state;
    return (
      <FeaturedView imgTitle={imgTitle} featuredTitle={featuredTitle} />

    );
  }
}
export default Featured;
