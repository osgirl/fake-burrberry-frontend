import React from 'react';
import styled from 'styled-components';
import Toolbar from './Toolbar';

const Filters = styled.section`background-color: #f3f3f3;`;

const Heading = styled.h1`
  padding: 2rem 0 1rem;
  margin: 0;
  font-family: Lora, serif;
  font-size: 1.625rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -.2px;
`;

const Caption = styled.p`
  margin: 0;
  margin-bottom: .5rem;
  font-size: .75rem;
  line-height: 1.25rem;
`;

export default () =>
  (<Filters>
    <div className="container">
      <Heading>Men&apos;s clothing</Heading>
      <Caption>
        Explore our menswear collection for the season. Sculptural knitwear, sweatshirts, artist
        overalls and oversized cabans feature alongside our signature trench coat in both heritage.
      </Caption>
      <Toolbar />
    </div>
  </Filters>);
