/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useParams } from 'react-router-dom';

const withRouter = (Child) => {
  return (props) => {
    const params = useParams();
    return <Child {...props} params={params} />;
  };
};

export default withRouter;
