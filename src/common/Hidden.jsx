import React from 'react';
import Responsive from 'react-responsive';

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

export { HiddenLg, VisibleLg };
