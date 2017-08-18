import React from 'react';
import styled from 'styled-components';
import SimpleButton from '../Button';
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
      <SimpleButton primary type="button">
        SELECT SIZE
      </SimpleButton>
    </HiddenLg>

    <VisibleLg>
      <SimpleButton primary type="button">
        ADD TO CART
      </SimpleButton>
    </VisibleLg>

    <SimpleButton type="button">FIND IN STORE</SimpleButton>
  </Buttons>);
