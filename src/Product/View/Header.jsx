import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`@media screen and (min-width: 48rem) {border-bottom: 0;}`;

const Text = styled.div`
  margin: 1rem 0;
  font-family: Lora, serif;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: #171717;

  @media screen and (min-width: 48rem) {
    margin: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.8125rem;
  }

  @media screen and (min-width: 62rem) {
    margin: 0;
    margin-bottom: .5rem;
    line-height: 1.75rem;
  }
`;

export default () =>
  (<Heading>
    <Text>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Text>
  </Heading>);
