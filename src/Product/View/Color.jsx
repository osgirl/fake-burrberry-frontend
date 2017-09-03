import React, { Component } from 'react';
import styled from 'styled-components';

const colorData = [
  {
    name: 'Honey',
    color: '#cfa880',
  },
  {
    name: 'Blue',
    color: 'lightblue',
  },
  {
    name: 'Orange',
    color: 'orange',
  },
];

const Colors = styled.div``;

const ColorTxt = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const ColorPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 62rem) {
    margin-bottom: 0;
    padding-bottom: 0.5rem;
    border-bottom: 0;
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  display: block;
  padding: 1.25rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-radius: 50%;
  font-size: 0;
  line-height: 0;
  cursor: pointer;
  background-color: ${props => props.color};
  outline: 0;
  border: ${props => (props.active ? '1px solid #232122' : '1px solid transparent')};
`;

class ColorPalette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = Number(e.target.id);
    this.setState({ selectedColor: id });
  }

  render() {
    const colorSet = colorData.map((singleColor, key) => (
      <Button
        type="button"
        key={key.toString()}
        onClick={this.handleClick}
        color={singleColor.color}
        name={singleColor.name}
        active={this.state.selectedColor === key}
      >
        choose {singleColor.name} color
      </Button>
    ));

    return (
      <Colors>
        <ColorTxt>
          Colour: <b>{colorData[this.state.selectedColor].name}</b>
        </ColorTxt>

        <ColorPanel>{colorSet}</ColorPanel>
      </Colors>
    );
  }
}

export default ColorPalette;
