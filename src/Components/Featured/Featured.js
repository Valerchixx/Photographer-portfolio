import React, { useState } from 'react';
import FeaturedView from './FeaturedView';

const Featured = () => {
  const [imgTitle] = useState('InVersion');

  return (
    <FeaturedView imgTitle={imgTitle} />

  );
};

export default Featured;
