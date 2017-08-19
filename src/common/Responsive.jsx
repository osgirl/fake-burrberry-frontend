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

function HiddenMd(props) {
  return (
    <Responsive maxWidth={767}>
      {props.children}
    </Responsive>
  );
}

function VisibleMd(props) {
  return (
    <Responsive minWidth={768}>
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

HiddenMd.propTypes = {
  children: PropTypes.node.isRequired,
};

VisibleMd.propTypes = {
  children: PropTypes.node.isRequired,
};

export { HiddenLg, VisibleLg, HiddenMd, VisibleMd };
