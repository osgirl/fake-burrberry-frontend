import React from 'react';
import styled from 'styled-components';

const Block = styled.section`
  margin-bottom: 4rem;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Heading = styled.h2`
  display: inline-block;
  padding-bottom: .5rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  border-bottom: 1px solid #111;
  text-transform: uppercase;
`;

const LinksWrap = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Link = styled.a`
  display: block;
  margin-bottom: 1rem;
  font-family: Lora, serif;
  font-size: .875rem;
  line-height: 1.0625rem;
  text-decoration: none;
  font-style: italic;
  color: #171717;
`;

export default () =>
  (<Block>
    <div className="container">
      <Heading>more for you</Heading>
    </div>

    <div className="container">
      <LinksWrap>
        <Link href="/">Men’s Black Trench Coats</Link>
        <Link href="/">Men’s Short Trench Coats</Link>
        <Link href="/">Men’s Long Trench Coats</Link>
      </LinksWrap>
    </div>
  </Block>);
