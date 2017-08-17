import React from 'react';
import styled from 'styled-components';
import Chevron from '../../../assets/arrow.svg';

const Toolbar = styled.div`
  display: flex;
  margin-right: -.5rem;
  overflow-x: scroll;

  @media screen and (min-width: 48rem) {
    overflow-x: visible;
    margin-right: 0;
  }
`;

const Button = styled.button`
  display: block;
  padding: 1.5rem 0;
  margin-right: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  border: none;
  white-space: nowrap;
  background: transparent;
  color: #171717;

  &:after {
    content: "";
    display: inline-block;
    width: 13px;
    height: 6px;
    margin-left: .5rem;
    background-image: url(${Chevron});
    background-size: cover;
  }

  @media screen and (min-width: 48rem) {
    margin-right: 3rem;

    &:last-child {
      margin: 0;
      margin-left: auto;
    }
  }
`;

const Caption = styled.p`
  display: block;
  padding: 1.5rem 0;
  margin: 0;
  margin-right: 2rem;
  font-size: .75rem;
  line-height: 1rem;
  white-space: nowrap;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () =>
  (<Toolbar>
    <Caption>Refine by</Caption>

    <Button type="button">Category</Button>
    <Button type="button">Colour</Button>
    <Button type="button">Size</Button>
    <Button type="button">Sort by price</Button>
  </Toolbar>);
