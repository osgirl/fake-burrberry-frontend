import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Colors = styled.div``;

const ColorTxt = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: .75rem;
  line-height: 0.9375rem;
`;

const ColorPanel = styled.div`
  display: flex;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 62rem) {
    margin-bottom: 0;
    padding-bottom: 1.5rem;
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  display: block;
  padding: 1.25rem;
  margin-right: 1rem;
  border: 0;
  border-radius: 50%;
  font-size: 0;
  line-height: 0;
  cursor: pointer;
  background-color: ${props => props.color};

  ${props =>
    props.active &&
    `
    padding: 1.1875rem;
    border: 1px solid #232122;
  `};
`;

function ColorButton(props) {
  return (
    <Button active={props.active} color={props.color} name={props.name} type="button">
      choose {props.name} color
    </Button>
  );
}

ColorButton.propTypes = {
  active: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ColorButton.defaultProps = {
  active: false,
};

export default () =>
  (<Colors>
    <ColorTxt>
      Colour: <b>Honey</b>
    </ColorTxt>

    <ColorPanel>
      <ColorButton color="#232122" name="black" />

      <ColorButton active color="#cfa880" name="honey" />
    </ColorPanel>
  </Colors>);
