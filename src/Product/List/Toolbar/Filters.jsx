import React from 'react';
import styled from 'styled-components';
import chevron from '../../../assets/arrow.svg';

const Toolbar = styled.div`display: flex;`;

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
    width: 12px;
    height: 6px;
    margin-left: .5rem;
    background-image: url(${chevron});
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

export default () =>
  (<Toolbar>
    <Button type="button">Category</Button>
    <Button type="button">Colour</Button>
    <Button type="button">Size</Button>
    <Button type="button">Sort by price</Button>
  </Toolbar>);
