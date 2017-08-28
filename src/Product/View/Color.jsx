import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const colorIncome = [
  {
    name: 'honey',
    color: '#cfa880',
  },
  {
    name: 'blue',
    color: 'lightblue',
  },
  {
    name: 'green',
    color: 'orange',
  },
];

const Colors = styled.div``;

const ColorTxt = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: .75rem;
  line-height: 1rem;
`;

const ColorPanel = styled.div`
  display: flex;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 62rem) {
    margin-bottom: 0;
    padding-bottom: 1.5rem;
    border-bottom: 0;
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
  outline: 0;
`;

class ColorButtonInside extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isSelected: !prevState.isSelected,
    }));
  }

  render() {
    return (
      <Button
        key={this.props.name}
        onClick={this.handleClick}
        active={this.state.isSelected}
        type="button"
        color={this.props.color}
        name={this.props.name}
        style={{
          border: this.state.isSelected ? '1px solid #232122' : '1px solid transparent',
        }}
      >
        {this.props.children}
      </Button>
    );
  }
}

ColorButtonInside.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function ColorPalette() {
  const colorSet = colorIncome.map(singleColor =>
    (<ColorButtonInside key={singleColor.name} color={singleColor.color} name={singleColor.name}>
      choose {singleColor.name} color
    </ColorButtonInside>),
  );

  return (
    <ColorPanel>
      {colorSet}
    </ColorPanel>
  );
}

export default () =>
  (<Colors>
    <ColorTxt>
      Colour: <b>Honey</b>
    </ColorTxt>

    <ColorPalette />
  </Colors>);
