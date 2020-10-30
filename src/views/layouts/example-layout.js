import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper, Content } from './styles';

export default function SnippetLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

SnippetLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
