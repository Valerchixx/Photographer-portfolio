import React, { useState } from 'react';
import FeaturedView from './FeaturedView';

const Featured = () => {
  const [featuredTitle] = useState('Featured Work');
  const [imgTitle] = useState('InVersion');

  return (
    <FeaturedView imgTitle={imgTitle} featuredTitle={featuredTitle} />

  );
};

export default Featured;
