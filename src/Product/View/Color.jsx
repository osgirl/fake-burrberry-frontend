import React, { Component } from 'react';
import styled from 'styled-components';

const colorIncome = [
  {
    name: 'honey',
    color: '#cfa880',
  },
  {
    name: 'black',
    color: '#232122',
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

// border: 1px solid #232122;

class ColorButton extends Component {
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
    const colorSet = colorIncome.map(singleColor =>
      (<Button
        key={singleColor.name}
        active={this.state.isSelected}
        color={singleColor.color}
        name={singleColor.name}
        type="button"
        onClick={this.handleClick}
        style={{
          border: this.state.isSelected ? '1px solid red' : '1px solid transparent',
        }}
      >
        choose {singleColor.name} color
      </Button>),
    );

    return (
      <ColorPanel>
        {colorSet}
      </ColorPanel>
    );
  }
}

export default () =>
  (<Colors>
    <ColorTxt>
      Colour: <b>Honey</b>
    </ColorTxt>

    <ColorButton />
  </Colors>);
