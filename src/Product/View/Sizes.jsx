import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { VisibleLg } from '../../common/Responsive';
import TextBtn from '../../common/TextButton';

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
  line-height: 0.9375rem;
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
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;

  ${props =>
    props.active &&
    `
    font-weight: 700;
  `};
`;

const TextButton = TextBtn.extend`margin: 0;`;

function SizeButton(props) {
  return (
    <Button active={props.active} name={props.name} type="button">
      {props.name}
    </Button>
  );
}

SizeButton.propTypes = {
  active: PropTypes.element.isRequired,
  name: PropTypes.element.isRequired,
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
      <SizeButton name="s" />

      <SizeButton name="m" />

      <SizeButton name="l" />

      <SizeButton active name="xl" />
    </SizePanel>
  </Sizes>);
