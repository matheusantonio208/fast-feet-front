import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

import ExampleLayout from '#layouts/default-layout.js';

export default function RouterWrapper({ component: Component, ...rest }) {
  const Layout = ExampleLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouterWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
