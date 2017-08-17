import React from 'react';
import styled from 'styled-components';
import { SimpleButton as Button } from '../Button';
import { HiddenLg, VisibleLg } from '../../common/Responsive';

const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 62rem) {
    flex-direction: row;
  }
`;

export default () =>
  (<Buttons>
    <HiddenLg>
      <Button primary type="button">
        SELECT SIZE
      </Button>
    </HiddenLg>

    <VisibleLg>
      <Button primary type="button">
        ADD TO CART
      </Button>
    </VisibleLg>

    <Button type="button">FIND IN STORE</Button>
  </Buttons>);
