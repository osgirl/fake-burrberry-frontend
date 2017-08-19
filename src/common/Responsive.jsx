import React from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';

function HiddenLg(props) {
  return (
    <Responsive maxWidth={991}>
      {props.children}
    </Responsive>
  );
}

function VisibleLg(props) {
  return (
    <Responsive minWidth={992}>
      {props.children}
    </Responsive>
  );
}

HiddenLg.propTypes = {
  children: PropTypes.node.isRequired,
};

VisibleLg.propTypes = {
  children: PropTypes.node.isRequired,
};

export { HiddenLg, VisibleLg };
