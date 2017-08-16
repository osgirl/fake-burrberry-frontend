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

function HiddenMd({ children }) {
  return (
    <Responsive maxWidth={767}>
      {children}
    </Responsive>
  );
}

function VisibleMd({ children }) {
  return (
    <Responsive minWidth={768}>
      {children}
    </Responsive>
  );
}

HiddenMd.propTypes = {
  children: PropTypes.element.isRequired,
};

VisibleMd.propTypes = {
  children: PropTypes.element.isRequired,
};

HiddenLg.propTypes = {
  children: PropTypes.element.isRequired,
};

VisibleLg.propTypes = {
  children: PropTypes.element.isRequired,
};

export { HiddenMd, VisibleMd, HiddenLg, VisibleLg };
