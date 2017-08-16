import React from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';

function HiddenLg({ children }) {
  return (
    <Responsive maxWidth={991}>
      {children}
    </Responsive>
  );
}

function VisibleLg({ children }) {
  return (
    <Responsive minWidth={992}>
      {children}
    </Responsive>
  );
}

HiddenLg.propTypes = {
  children: PropTypes.element.isRequired,
};

VisibleLg.propTypes = {
  children: PropTypes.element.isRequired,
};

export { HiddenLg, VisibleLg };
