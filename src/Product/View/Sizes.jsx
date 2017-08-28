import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { VisibleLg } from '../../common/Responsive';
import TextBtn from '../../common/TextButton';

const sizesIncome = ['S', 'M', 'L', 'XL', 'XXL'];

const Sizes = styled.div`
  display: none;
  padding: 0 .5rem;
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
  font-size: .75rem;
  line-height: 1rem;
`;

const SizePanel = styled.div`
  @media screen and (min-width: 62rem) {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1.5rem;
  }
`;

const Button = styled.button`
  display: block;
  padding: .5rem 1rem;
  margin-right: .5rem;
  border: 1px solid #171717;
  border-radius: 2px;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  outline: 0;
`;

const TextButton = TextBtn.extend`margin: 0;`;

function SizeButtons() {
  const button = sizesIncome.map(singleSize =>
    (<SizeButton key={singleSize.toString()}>
      {singleSize}
    </SizeButton>),
  );

  return (
    <SizePanel>
      {button}
    </SizePanel>
  );
}

class SizeButton extends Component {
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
        onClick={this.handleClick}
        type="button"
        style={{ fontWeight: this.state.isSelected ? 700 : 400 }}
      >
        {this.props.children}
      </Button>
    );
  }
}

SizeButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default () =>
  (<Sizes>
    <FlexBetween>
      <SizeTxt>
        Size: <b>XL</b>
      </SizeTxt>

      <VisibleLg>
        <TextButton>NEED SIZE HELP?</TextButton>
      </VisibleLg>
    </FlexBetween>

    <SizePanel>
      <SizeButtons />
    </SizePanel>
  </Sizes>);
