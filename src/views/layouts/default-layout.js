import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper } from '#styles/layouts/default-layout-style.js';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
