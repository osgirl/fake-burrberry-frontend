import React, { Component } from 'react';
import styled from 'styled-components';
import { VisibleLg } from '../../common/Responsive';
import TextBtn from '../../common/TextButton';

const sizesData = ['S', 'M', 'L', 'XL', 'XXL'];

const Sizes = styled.div`
  display: none;
  padding: 0 0.5rem;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 62rem) {
    display: block;
    padding-left: 0;
    padding-right: 0;
    border-bottom: 0;
  }
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const SizeTxt = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const SizePanel = styled.div`
  @media screen and (min-width: 62rem) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
  }
`;

const Button = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #171717;
  border-radius: 2px;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: 0.75rem;
  font-weight: ${props => (props.active ? 700 : 400)};
  line-height: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  outline: 0;
`;

const TextButton = TextBtn.extend`margin: 0;`;

class SizePalette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = Number(e.target.id);
    this.setState({ isSelected: id });
  }

  render() {
    const buttons = sizesData.map((singleSize, key) => (
      <Button
        key={key.toString()}
        onClick={this.handleClick}
        name={singleSize}
        type="button"
        active={this.state.isSelected === key}
      >
        {singleSize}
      </Button>
    ));

    return (
      <Sizes>
        <FlexBetween>
          <SizeTxt>
            Size: <b>{sizesData[this.state.isSelected]}</b>
          </SizeTxt>

          <VisibleLg>
            <TextButton>NEED SIZE HELP?</TextButton>
          </VisibleLg>
        </FlexBetween>

        <SizePanel>{buttons}</SizePanel>
      </Sizes>
    );
  }
}

export default SizePalette;
