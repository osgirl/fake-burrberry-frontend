import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import Delivery from './Delivery';

const Wrapper = styled.section`
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 25rem) {
    border-bottom: 0;
  }

  @media screen and (min-width: 62rem) {
    margin-top: 4rem;
  }
`;

export default () =>
  (<Wrapper>
    <Description />
    <Delivery />
  </Wrapper>);
