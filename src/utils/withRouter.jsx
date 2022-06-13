/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useParams } from 'react-router-dom';

function withRouter(Child) {
  return function (props) {
    const params = useParams();
    return <Child {...props} params={params} />;
  };
}

export default withRouter;
